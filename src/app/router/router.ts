import { createRouter, createWebHashHistory } from 'vue-router'
import { InboxPage, EmailPage } from '@/pages'

import { InboxRoute, EmailRoute } from './RouteName'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { name: InboxRoute, path: '/inbox', component: InboxPage },
    {
      name: EmailRoute,
      path: '/inbox/:id',
      props: {
        default: false,
        modal: (route) => ({ id: Number(route.params.id) })
      },
      components: {
        default: InboxPage,
        modal: EmailPage
      },
      meta: {
        onClose: { goto: '/inbox' },
        modal: true
      }
    },
    {
      path: '/',
      redirect: '/inbox'
    }
  ]
})
