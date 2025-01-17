/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
  {
    path: '/',
    name: 'Login',
    redirect: { name: 'LoginIndex' },
    children: [
      {
        path: '/login',
        name: 'LoginIndex',
        component: () => import('@/views/login/index.vue')
      },
    ]
  },
]

export default constantRouterMap