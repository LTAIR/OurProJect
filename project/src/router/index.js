import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Show from '../views/Show'
import Search from '../views/Search'
import Login from '../views/Login'
import Hot from '../components/Hot'
export default[
    {
        path:"/movie",
       
        component:Movie,
        name:"电影",
        exact:true,
        child:[
            {
           
                path:"/movie/",
                component:Movie,
                name:"正在热映",
            },{
           
            path:"/movie/f-hot",
            component:Hot,
            name:"即将上映"
        }]
       
    },
    {
        path:"/cinema",
        component:Cinema,
        name:"影院",
        exact:false
    },
    {
        path:"/my",
        component:My,
        name:"我的",
        exact:false
    },
    {
        path:"/login",
        component:Login,
        name:"登录",
        exact:false
    },
    {
        path:"/search",
        component:Search,
        name:"搜索",
        exact:false
    },
    {
        path:"/show",
        component:Show,
        name:"页面详情",
        exact:false
    },
     {
            path:"/movie/f-hot",
            component:Hot,
            name:"即将上映"
     }
]