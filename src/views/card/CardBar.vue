<template>
    <section>
        <!-- 登录 -->
        <LoginWel></LoginWel>
        <!-- 今日Tip -->
        <Tip></Tip>
        <!-- 推广 -->
        <Promotion></Promotion>
    </section>
  </template>
  
  <script>
  // @ is an alias to /src
  
import Tip from '@/views/card/Tip'
import Promotion from '@/views/card/Promotion'
import LoginWel from '@/views/card/LoginWel'
  
  export default {
    name: 'CardView',
    components : { LoginWel, Promotion, Tip }, 
  }
  </script>

  <style scoped>
</style>
  