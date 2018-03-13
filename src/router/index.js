import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Validate from '@/pages/form.vue'
import Modal from '@/pages/modal.vue'
import SelfForm from '@/pages/selfForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/form',
      name: 'Validate',
      component: Validate
    },
    {
      path: '/selfform',
      name: 'SelfForm',
      component: SelfForm
    }
  ]
})
