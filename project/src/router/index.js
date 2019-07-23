import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Show from '../views/Show'
import Search from '../views/Search'
import Login from '../views/Login'
import HuoQu from "../views/HuoQu"
import Hot from '../components/Hot'
import MtLogin from '../components/MtLogin'
import PhLogin from '../components/PhLogin'
import MovieAbout from '../components/MovieAbout'
import CityList from '../components/CityList'
import Order from '../components/Order'
import Shop from '../components/Shop'
import Coupon from '../components/Coupon'
import Live from '../components/Live'
import Card from '../components/Card'
export default [
    {
        path: "/",
        alias: "/movie",
        component: Movie,
        name: "电影",
        isShow: true,
        exact: true,
    },
    {
        path: "/cinema",
        component: Cinema,
        name: "影院",
        exact: false,
        isShow: true,
    },
    {
        path: "/my",
        component: My,
        name: "我的",
        exact: false,
        isShow: true,
        Authorization:true,
    },
    {
        path: "/login",
        component: Login,
        name: "登录",
        exact: false,
        isShow: false,
    },
    {
        path: "/search",
        component: Search,
        name: "搜索",
        exact: false,
        isShow: false,
    },

    {
        path: "/detailmovie/:id",
        component: MovieAbout,
        name: "电影售票页",
        isShow: false,
        exact: true,
    },
    {
        path: "/movie/f-hot",
        component: Hot,
        name: "即将上映",
        isShow: true,
        exact: true,
    },
    {
        path: "/movie",
        component: Movie,
        name: "电影",
        exact: true,
        isShow: true
    },
    {
        path:"/login/",
        component: MtLogin,
        name: "美团账号登录",
        exact: true
},
    {
        path:"/login/phLogin",
        component: PhLogin,
        name: "手机验证登录",
        exact: true,
    },
 {
        path:"/HuoQu/:id",
        component:HuoQu,
        name:"电影详情",
        exact:true

        
    },
 
   
     {
            path:"/movie/f-hot",
            component:Hot,
            name:"即将上映"
     },
    {
        path:"/city-list",
        component: CityList,
        name: "城市列表",
        exact: true,
    },
    {
        path:"/order",
        component: Order,
        name: "我的电影订单",
        exact: true,
    },
    {
        path:"/shop",
        component: Shop,
        name: "商城",
        exact: true,
    },
    {
        path:"/coupon",
        component: Coupon,
        name: "优惠卷",
        exact: true,
    },
    {
        path:"/live",
        component: Live,
        name: "在线观影",
        exact: true,
    },
    {
        path:"/card",
        component: Card,
        name: "折扣卡",
        exact: true,
    }


]