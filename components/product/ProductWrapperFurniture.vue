<template>
    <div class="product-area pb-95">
        <div class="container">
            <div class="section-title text-center">
                <h2>DAILY DEALS!</h2>
            </div>
            <ul class="nav product-tab-list-2 pt-30 pb-55 justify-content-center">
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#new-product" role="tab">Hàng mới về</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#best-product" role="tab">Bán chạy nhất</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#sale-product" role="tab">Mặt hàng bán</button>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade" id="new-product" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in newProducts" :key="index">
                            <ProductGridItemTwo :product="product" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show active" id="best-product" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in bestProducts" :key="index">
                            <ProductGridItemTwo :product="product" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="sale-product" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in saleProducts" :key="index">
                            <ProductGridItemTwo :product="product" />
                        </div>
                    </div>
                </div>
                <div class="view-more text-center mt-20 toggle-btn2">
                    <n-link to="/shop" class="loadMore2">XEM THÊM SẢN PHẨM</n-link>
                </div>
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
    export default {
        components: {
            ProductGridItemTwo: () => import('@/components/product/ProductGridItemTwo'),
            QuickView: () => import('@/components/QuickView'),
        },

        computed: {
            newProducts() {
                return this.$store.getters.getNewProducts.filter((item) => item.category.includes("furniture"))
            },
            bestProducts() {
                return this.$store.getters.getBestProducts.filter((item) => item.category.includes("furniture"))
            },
            saleProducts() {
                return this.$store.getters.getSaleProducts.filter((item) => item.category.includes("furniture"))
            },
        },
    };
</script>