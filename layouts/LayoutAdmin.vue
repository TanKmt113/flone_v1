<template>
  <div>
    <Header containerClass="container-fluid" />
    <div class="bg-body">
      <div class="row w-100">
        <div class="col-2">
          <MenuAdmin></MenuAdmin>
        </div>
        <div class="col-10">
          <div class="mt-4">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout-admin",
  components: {
    Header: () => import("@/components/admin/Header"),
    MenuAdmin: () => import("@/components/admin/MenuAdmin"),
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll >= 500) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    });
  },
};
</script>
