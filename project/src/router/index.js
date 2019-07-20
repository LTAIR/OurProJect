import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Show from '../views/Show'
import Search from '../views/Search'
import Login from '../views/Login'
import Hot from '../components/Hot'
import MtLogin from '../components/MtLogin'
import PhLogin from '../components/PhLogin'
import MovieAbout from '../components/MovieAbout'
import CityList from '../components/CityList'
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
        isShow: true
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
        path:"/city-list",
        component: CityList,
        name: "城市列表",
        exact: true,
    }
]