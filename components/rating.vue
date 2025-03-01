<template>
  <div>
    <div class="product-rating" v-if="Math.floor(rating) == 5">
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
    </div>
    <div class="product-rating" v-if="Math.floor(rating) == 4">
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o"></i>
    </div>
    <div class="product-rating" v-if="Math.floor(rating) == 3">
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
    </div>
    <div class="product-rating" v-if="Math.floor(rating) == 2">
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
    </div>
    <div class="product-rating" v-if="Math.floor(rating) == 1">
      <i class="fa fa-star-o text-warning"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rating: {
      type: Intl,
      required: true,
    },
  },
};
</script>
