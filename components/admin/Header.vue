<template>
  <div>
    <header class="header-area bg-dark">
      <div class="header-padding-1 header-res-padding clearfix">
        <div :class="containerClass">
          <div class="row justify-content-between align-items-center py-3">
            <div class="col-lg-2 col-md-6 col-4">
              <div class="logo m-0">
                <n-link to="/">
                  <img src="/img/logo/logo-2.png" alt="flone logo" />
                </n-link>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-8">
              <div class="header-right-wrap m-0">
                <div class="same-style header-search">
                  <button class="search-active" @click="isOpenSearch = !isOpenSearch">
                    <i class="pe-7s-search text-white"></i>
                  </button>
                  <div class="search-content" :class="{ active: isOpenSearch }">
                    <form>
                      <input type="text" placeholder="Search" />
                      <button class="button-search"><i class="pe-7s-search"></i></button>
                    </form>
                  </div>
                </div>
                <div class="same-style account-setting">
                  <button
                    class="account-setting-active"
                    @click="isOpenAccountSettings = !isOpenAccountSettings"
                  >
                    <i class="pe-7s-user-female text-white"></i>
                  </button>
                  <div
                    class="account-dropdown"
                    :class="{ active: isOpenAccountSettings }"
                  >
                    <ul>
                      <li><n-link to="/login-register">Login</n-link></li>
                      <li><n-link to="/login-register">Register</n-link></li>
                      <li><n-link to="/my-account">My account</n-link></li>
                    </ul>
                  </div>
                </div>
                <!-- <div class="same-style header-compare">
                  <n-link to="/compare">
                    <i class="pe-7s-shuffle"></i>
                  </n-link>
                  <span class="count-style">{{ compareItemCount }}</span>
                </div>
                <div class="same-style header-wishlist">
                  <n-link to="/wishlist"><i class="pe-7s-like"></i></n-link>
                  <span class="count-style">{{ wishlistItemCount }}</span>
                </div>
                <div class="same-style cart-wrap">
                  <button class="icon-cart" @click="openCart = !openCart">
                    <i class="pe-7s-shopbag"></i>
                    <span class="count-style">{{ cartItemCount }}</span>
                  </button>
                  <MiniCart
                    :miniCart="{ visible: openCart }"
                    @minicartClose="openCart = !openCart"
                  />
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation"),
    MiniCart: () => import("@/components/MiniCart"),
  },

  props: ["containerClass"],

  //   computed: {
  //     cartItemCount() {
  //       return this.$store.getters.cartItemCount;
  //     },
  //     wishlistItemCount() {
  //       return this.$store.getters.wishlistItemCount;
  //     },
  //     compareItemCount() {
  //       return this.$store.getters.compareItemCount;
  //     },
  //   },

  data() {
    return {
      isSticky: false,
      isOpenSearch: false,
      isOpenAccountSettings: false,
      openCart: false,
      navOpen: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
};
</script>
