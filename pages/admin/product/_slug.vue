<template>
  <div>
    <ProductDetail :product="product"></ProductDetail>
  </div>
</template>
<script>
import { getProductById } from "../../../api/product";
export default {
  layout: "LayoutAdmin",
  components: {
    ProductDetail: () => import("@/components/admin/ProductDetail"),
  },

  // props: ["containerClass"],

  data() {
    return {
      slug: this.$route.params.slug,
      product: Object,
    };
  },

  mounted() {
    this.getProduct();
  },

  methods: {
    async getProduct() {
      const response = await getProductById(this.slug);
      this.product = response.data;
    },
  },
};
</script>
