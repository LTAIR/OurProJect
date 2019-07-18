import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Show from '../views/Show'
import Search from '../views/Search'
import Login from '../views/Login'
import Hot from '../components/Hot'
import MovieAbout from '../components/MovieAbout'
export default[
    {
        path:"/movie",
       alias:"/",
        component:Movie,
        name:"电影",
        isShow:true,
        exact:true,
        child:[
            {path:"/movie/",
             alias:"/movie/",
            component:Movie,
             name:"电影",
             exact:true
            },
            {
                path:"/movie/f-hot",
                component:Hot,
                name:"即将上映"
         },
        ]
    },
    {
        path:"/cinema",
        component:Cinema,
        name:"影院",
        exact:false,
        isShow:true,
    },
    {
        path:"/my",
        component:My,
        name:"我的",
        exact:false,
        isShow:true,
    },
    {
        path:"/login",
        component:Login,
        name:"登录",
        exact:false,
        isShow:false,
    },
    {
        path:"/search",
        component:Search,
        name:"搜索",
        exact:false,
        isShow:false,
    },
     
     {
         path:"/detailmovie/:id",
         component:MovieAbout,
         name:"电影售票页",
         isShow:false,
         exact:true,
     },
     {
        path:"/movie/f-hot",
        component:Hot,
        name:"即将上映"
 },
]