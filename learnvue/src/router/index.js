import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Blog from '@/views/blog/index'
import Daily from '@/views/daily/index'

Vue.use(Router)

const Study = { template: '<div>我是学习的页面</div>' }
const Work = { template: '<div>我是工作的页面</div>' }
    // const Blog = { template: '<div>我的博客页面</div>' }
const Info = { template: '<div>我的信息页面</div>' }

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }
const Notfound = { template: '<div>Notfound 404</div>' }

export default new Router({
    mode: 'hash',
    linkExactActiveClass: 'shudong',
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        }, {
            path: '/daily',
            name: 'Daily',
            component: Daily
        }, {
            path: '/blog',
            name: 'Blog',
            component: Blog
        }, {
            path: '/study',
            name: 'Study',
            component: Study
        }, {
            path: '/work',
            name: 'Work',
            component: Work
        }, {
            path: '/about',
            component: About,
            children: [{
                    path: '',
                    name: 'userhome',
                    component: UserHome
                },
                {
                    path: 'profile',
                    name: 'blog',
                    component: UserProfile
                }, {
                    path: 'posts',
                    name: 'info',
                    component: UserPosts
                }
            ]
        },
        {
            path: '*',
            // component: Notfound
            redirect: (to) => {
                console.log(to);
                if (to.path === '/aaa') {
                    return '/work'
                } else if (to.path === '/stark') {
                    return '/study'
                } else {
                    return '/'
                }
            }
        }
    ]
})