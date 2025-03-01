import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ea043e8 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _93a322d0 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _6e4ac7ea = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _27b4e5d6 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _36ffe5bb = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _01d02700 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _1a1bbe3b = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _35cae446 = () => interopDefault(import('..\\pages\\home-book-store.vue' /* webpackChunkName: "pages/home-book-store" */))
const _4b3b926a = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _3c638fb0 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _78cb4c24 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _3b68817f = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _464d1a54 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _3338b690 = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _dacf4a84 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _1829d439 = () => interopDefault(import('..\\pages\\home-furniture.vue' /* webpackChunkName: "pages/home-furniture" */))
const _7fa43ebc = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _3724dd7e = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _4281d14c = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _51a5dc2a = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _172d610d = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _58f6a956 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _8f639d94 = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _55cbe27c = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _7220e0b5 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _c5433dac = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _83c2439a = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _639c128c = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _d07f3d6a = () => interopDefault(import('..\\pages\\admin\\blogs\\index.vue' /* webpackChunkName: "pages/admin/blogs/index" */))
const _4cdca62d = () => interopDefault(import('..\\pages\\admin\\product\\index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _004d8f52 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _6784fffa = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _6575cf55 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _766c6a31 = () => interopDefault(import('..\\pages\\admin\\product\\create.vue' /* webpackChunkName: "pages/admin/product/create" */))
const _5e581ead = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4b2604e5 = () => interopDefault(import('..\\pages\\admin\\product\\_slug.vue' /* webpackChunkName: "pages/admin/product/_slug" */))
const _71b80a7a = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _48e89c70 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

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
    component: _3ea043e8,
    name: "about"
  }, {
    path: "/admin",
    component: _93a322d0,
    name: "admin"
  }, {
    path: "/blog",
    component: _6e4ac7ea,
    name: "blog"
  }, {
    path: "/cart",
    component: _27b4e5d6,
    name: "cart"
  }, {
    path: "/checkout",
    component: _36ffe5bb,
    name: "checkout"
  }, {
    path: "/compare",
    component: _01d02700,
    name: "compare"
  }, {
    path: "/contact",
    component: _1a1bbe3b,
    name: "contact"
  }, {
    path: "/home-book-store",
    component: _35cae446,
    name: "home-book-store"
  }, {
    path: "/home-cosmetics",
    component: _4b3b926a,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _3c638fb0,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _78cb4c24,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _3b68817f,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _464d1a54,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _3338b690,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _dacf4a84,
    name: "home-fashion-two"
  }, {
    path: "/home-furniture",
    component: _1829d439,
    name: "home-furniture"
  }, {
    path: "/login-register",
    component: _7fa43ebc,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _3724dd7e,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _4281d14c,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _51a5dc2a,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _172d610d,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _58f6a956,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _8f639d94,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _55cbe27c,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _7220e0b5,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _c5433dac,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _83c2439a,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _639c128c,
    name: "wishlist"
  }, {
    path: "/admin/blogs",
    component: _d07f3d6a,
    name: "admin-blogs"
  }, {
    path: "/admin/product",
    component: _4cdca62d,
    name: "admin-product"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _004d8f52,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _6784fffa,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _6575cf55,
    name: "product-product-affiliate"
  }, {
    path: "/admin/product/create",
    component: _766c6a31,
    name: "admin-product-create"
  }, {
    path: "/",
    component: _5e581ead,
    name: "index"
  }, {
    path: "/admin/product/:slug",
    component: _4b2604e5,
    name: "admin-product-slug"
  }, {
    path: "/blog/:slug",
    component: _71b80a7a,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _48e89c70,
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
