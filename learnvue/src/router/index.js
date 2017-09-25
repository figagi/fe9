import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const Study = { template: '<div>我是学习的页面</div>' }
const Work = { template: '<div>我是工作的页面</div>' }
export default new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/study',
        name: 'Study',
        component: Study
    }, {
        path: '/work',
        name: 'Work',
        component: Work
    }]
})