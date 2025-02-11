import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77fb6f34 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _420a6bee = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6c5200d7 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _2068a87d = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _97ea6d04 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _61e2c98e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _77f03978 = () => interopDefault(import('..\\pages\\home-book-store.vue' /* webpackChunkName: "pages/home-book-store" */))
const _b5ab3fe6 = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _2f5cc72e = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _6bc483a2 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _b0d38c7e = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _7faffb16 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _c133225c = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _68098900 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _3a1c050a = () => interopDefault(import('..\\pages\\home-furniture.vue' /* webpackChunkName: "pages/home-furniture" */))
const _4a6c67fe = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _16b0ab83 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _0d49fa8e = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _575985ad = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _2ece10cf = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _29b549d2 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _4c935234 = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _6d6c923e = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _ec7cdf12 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _098c196c = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _10fc8216 = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _90ca8d08 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _9d6c9d6e = () => interopDefault(import('..\\pages\\admin\\blogs\\index.vue' /* webpackChunkName: "pages/admin/blogs/index" */))
const _2951eeab = () => interopDefault(import('..\\pages\\admin\\product\\index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _178f91ce = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _24d7d645 = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _83dfb4d2 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _388bb9aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4577ae7e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _13b0c5b2 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

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
    component: _77fb6f34,
    name: "about"
  }, {
    path: "/blog",
    component: _420a6bee,
    name: "blog"
  }, {
    path: "/cart",
    component: _6c5200d7,
    name: "cart"
  }, {
    path: "/checkout",
    component: _2068a87d,
    name: "checkout"
  }, {
    path: "/compare",
    component: _97ea6d04,
    name: "compare"
  }, {
    path: "/contact",
    component: _61e2c98e,
    name: "contact"
  }, {
    path: "/home-book-store",
    component: _77f03978,
    name: "home-book-store"
  }, {
    path: "/home-cosmetics",
    component: _b5ab3fe6,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _2f5cc72e,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _6bc483a2,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _b0d38c7e,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _7faffb16,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _c133225c,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _68098900,
    name: "home-fashion-two"
  }, {
    path: "/home-furniture",
    component: _3a1c050a,
    name: "home-furniture"
  }, {
    path: "/login-register",
    component: _4a6c67fe,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _16b0ab83,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _0d49fa8e,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _575985ad,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _2ece10cf,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _29b549d2,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _4c935234,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _6d6c923e,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _ec7cdf12,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _098c196c,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _10fc8216,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _90ca8d08,
    name: "wishlist"
  }, {
    path: "/admin/blogs",
    component: _9d6c9d6e,
    name: "admin-blogs"
  }, {
    path: "/admin/product",
    component: _2951eeab,
    name: "admin-product"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _178f91ce,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _24d7d645,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _83dfb4d2,
    name: "product-product-affiliate"
  }, {
    path: "/",
    component: _388bb9aa,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _4577ae7e,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _13b0c5b2,
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
