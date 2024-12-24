import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _93df84a6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _79970335 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _639cc6b0 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _46bad9d6 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _5a708905 = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _75745ac0 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _74552bcb = () => interopDefault(import('../pages/home-book-store.vue' /* webpackChunkName: "pages/home-book-store" */))
const _89432ab4 = () => interopDefault(import('../pages/home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _017a09f5 = () => interopDefault(import('../pages/home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _3de1c669 = () => interopDefault(import('../pages/home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _19214fda = () => interopDefault(import('../pages/home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _4de87922 = () => interopDefault(import('../pages/home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _10f184eb = () => interopDefault(import('../pages/home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _255703d9 = () => interopDefault(import('../pages/home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _0db3efd8 = () => interopDefault(import('../pages/home-furniture.vue' /* webpackChunkName: "pages/home-furniture" */))
const _60a07297 = () => interopDefault(import('../pages/login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _1d882ac8 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _237e0527 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4ea44b86 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _69ec04a8 = () => interopDefault(import('../pages/shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _26434ef0 = () => interopDefault(import('../pages/shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _61a1b88a = () => interopDefault(import('../pages/shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _aeeaf3d2 = () => interopDefault(import('../pages/shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _7640f760 = () => interopDefault(import('../pages/shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _7b172f85 = () => interopDefault(import('../pages/shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _50dd874e = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _44262a56 = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _a9c17526 = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _8396c0ce = () => interopDefault(import('../pages/blog/blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _5f080422 = () => interopDefault(import('../pages/product/product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _546fcf1c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _77e061ed = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _4cc73bec = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _93df84a6,
    name: "about"
  }, {
    path: "/blog",
    component: _79970335,
    name: "blog"
  }, {
    path: "/cart",
    component: _639cc6b0,
    name: "cart"
  }, {
    path: "/checkout",
    component: _46bad9d6,
    name: "checkout"
  }, {
    path: "/compare",
    component: _5a708905,
    name: "compare"
  }, {
    path: "/contact",
    component: _75745ac0,
    name: "contact"
  }, {
    path: "/home-book-store",
    component: _74552bcb,
    name: "home-book-store"
  }, {
    path: "/home-cosmetics",
    component: _89432ab4,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _017a09f5,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _3de1c669,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _19214fda,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _4de87922,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _10f184eb,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _255703d9,
    name: "home-fashion-two"
  }, {
    path: "/home-furniture",
    component: _0db3efd8,
    name: "home-furniture"
  }, {
    path: "/login-register",
    component: _60a07297,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _1d882ac8,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _237e0527,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _4ea44b86,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _69ec04a8,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _26434ef0,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _61a1b88a,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _aeeaf3d2,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _7640f760,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _7b172f85,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _50dd874e,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _44262a56,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _a9c17526,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _8396c0ce,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _5f080422,
    name: "product-product-affiliate"
  }, {
    path: "/",
    component: _546fcf1c,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _77e061ed,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _4cc73bec,
    name: "product-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
