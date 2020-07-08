import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import hiwebRouter from 'hiweb-theme-sdk/router';

// Views
import cart from '@/views/Cart';
import collection from '@/views/Collection';
import collections from '@/views/Collections';
import home from '@/views/Home';
import page from '@/views/Page';
import pages from '@/views/Pages';
import post from '@/views/Post';
import posts from '@/views/Posts';
import product from '@/views/Product';
import products from '@/views/Products';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/'
})

// Register routes through hiweb router
hiwebRouter(router).register({
  cart,
  collection,
  collections,
  home,
  page,
  pages,
  post,
  posts,
  product,
  products
});

export default router
