import Car from '../components/car/car'
import Myself from '../components/myself/myself'
import Goods from '../components/goods/goods' // 组件名称需要首字母大些，驼峰形式，组件必须要被包裹，也就是外层至少要有一个div

const routes = [
  {
    path: '/Car',
    component: Car
  },
  {
    path: '/Myself',
    component: Myself
  },
  {
    path: '/Goods',
    component: Goods
  } 
]

export default routes