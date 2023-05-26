<template>
  <div>
    <div class="box">🔔 {{ board.content }}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {getBoard} from '@/api/board'
import CardBar from '@/views/card/CardBar'
import PostList from '@/views/post/Index'

export default {
  name: 'HomeView',
  components : {CardBar, TopicList : PostList},
  data() {
    return {
      board : {
        content : ''
      }
    }
  },
  created(){
    this.Board()
  },
  methods:{
    async Board(){
      getBoard().then((result) => {
        const { data } = result
        this.board = data
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}
</script>
