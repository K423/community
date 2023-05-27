<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>（づ￣3￣）づ╭❤～ 推广</span>
    </div>
    <div>
      <p v-for="(item, index) in list" :key="index" class="block">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </p>
    </div>
  </el-card>
</template>
  
<script>

import { getList } from '@/api/promotion';

export default {
  name: 'Promotion',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      getList().then((res) => {
        const { data } = res
        this.list = data
      })
    }
  }
}
</script>
  
<style scoped></style>