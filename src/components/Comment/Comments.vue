<template>
    <section class="box comments">
        <hr />
        <h3 class="title is-5">评论</h3>

        <LvCommentsForm :slug="slug" v-if="token" @loadComments="fetchComments"></LvCommentsForm>

        <LvCommentsItem v-for="comment in comments" :key="`comment-${comment.id}`" :comment="comment" />
    </section>
</template>
  
<script>
import { mapGetters } from 'vuex'
import { fetchCommentsByPostId } from '@/api/comment'
import LvCommentsItem from './CommentsItem'
import LvCommentsForm from './CommentsForm'
export default {
    name: 'LvComments',
    components: {
        LvCommentsItem,
        LvCommentsForm
    },
    data() {
        return {
            comments: []
        }
    },
    props: {
        slug: {
            type: String,
            default: null
        }
    },
    computed: {
        ...mapGetters([
            'token'
        ])
    },
    async mounted() {
        await this.fetchComments(this.slug)
    },
    methods: {
        // 初始化
        async fetchComments(topic_id) {
            console.log(topic_id)
            fetchCommentsByPostId(topic_id).then(response => {
                const { data } = response
                this.comments = data
            })
        }
    }
}
</script>