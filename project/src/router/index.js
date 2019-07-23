import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Show from '../views/Show'
import Search from '../views/Search'
import Login from '../views/Login'
import HuoQu from "../views/HuoQu"
import Hot from '../components/Hot'
import MovieAbout from '../components/MovieAbout'
export default[
    {
        path:"/movie",
       alias:"/",
        component:Movie,
        name:"电影",
        exact:true,
        child:[
            {
           
                path:"/movie/",
                alias:"/",
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
        path:"/show/:id",
        component:Show,
        name:"页面详情",
        exact:false
    },{
        path:"/HuoQu/:id",
        component:HuoQu,
        name:"电影详情",
        exact:false

        
    },
 
   
     {
            path:"/movie/f-hot",
            component:Hot,
            name:"即将上映"
     },
     {
         path:"/movie/:id",
         component:MovieAbout,
         name:"电影售票页"
     }
]