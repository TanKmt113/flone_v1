<template>
  <ProductDetail :product="{}"></ProductDetail>
</template>

<script>
export default {
  layout: "LayoutAdmin",
  components: {
    ProductDetail: () => import("@/components/admin/ProductDetail"),
  },
  head() {
    return {
      title: "About Us",
    };
  },
};
</script>
