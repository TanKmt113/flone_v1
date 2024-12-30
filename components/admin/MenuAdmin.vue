<template>
  <div>
    <div class="mobile-menu-inner bg-light vh-100">
      <div class="mobile-menu-inner-wrapper">
        <div class="offcanvas-body-inner">
          <div class="menu-navigation">
            <ResponsiveMobileMenu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ResponsiveMobileMenu: () => import("@/components/ResponsiveMobileMenu"),
  },
};
</script>
