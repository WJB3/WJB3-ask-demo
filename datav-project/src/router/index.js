import Demo1 from '../components/demo1.vue'
import Demo2 from '../components/demo2.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: Demo1
  },
  {
    path: '/demo2',
    component: Demo2
  }
]
export default routers
