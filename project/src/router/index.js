import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Show from '../views/Show'
import Search from '../views/Search'
import Login from '../views/Login'
export default[
    {
        path:"/",
        component:Movie,
        name:"电影",
        exact:true
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
    }
]