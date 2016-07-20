import Vue from 'vue';
import Router from 'vue-router';
import 'server/methods';
import index from 'page/index.vue';

Vue.use(Router);

const router = new Router({
  history: true,
  saveScrollPosition: true
});

//路由设定
router.map({
    '/':{
        name: 'index',
        component: index
    }
})

Meteor.startup(()=>{
  router.start({name: 'app',template:"<div><router-view></router-view></div>"}, '#app');
})