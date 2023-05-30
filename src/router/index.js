import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/author/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/author/Login'),
    meta: {
      title: '登录'
    }
  },
  // 发布
  {
    name: 'post-create',
    path: '/post/create',
    component: () => import('@/views/post/Create'),
    meta: {
      title: '文章发布',
      requireAuth: true
    }
  },
  // 详情
  {
    name: 'post-detail',
    path: '/post/:id',
    component: () => import('@/views/post/Detail'),
    meta: {
      title: '文章详情',
      requireAuth: true
    }
  },
  // 编辑
  {
    name: 'topic-edit',
    path: '/post/edit/:id',
    component: () => import('@/views/post/Edit'),
    meta: {
      title: '编辑'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404'),
    meta: {
      title: '404 - NotFound'
    }
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router