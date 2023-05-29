<template>
  <el-card class="box-card" shadow="never">
    <div slot="header" style="text-align: center;">
      <span>⭐(((((ી(･◡･)ʃ)))))⭐</span>
    </div>

    <div v-if="token != null && token != ''" class="has-text-centered">
      <b-button type="is-danger" tag="router-link" :to="{ path: '/post/create' }" outlined>
        ✍ 灵光一现
      </b-button>
    </div>
    <div v-else class="has-text-centered">
      <b-button type="is-primary" tag="router-link" :to="{ path: '/register' }" outlined>
        加入我们
      </b-button>
      <b-button type="is-danger" tag="router-link" :to="{ path: '/login' }" outlined class="ml-2">
        社区登入
      </b-button>
    </div>
  </el-card>
</template>
  
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['token'])
  }
}
</script>
  
<style scoped></style>