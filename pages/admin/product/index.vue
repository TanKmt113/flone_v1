<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center gap-1">
          <h4 class="card-title flex-grow-1">Danh sách tất cả sản phẩm</h4>
          <a class="btn btn-sm btn-primary"> Thêm sản phẩm </a>
        </div>
        <div>
          <div class="table-responsive">
            <table class="table align-middle mb-0 table-hover table-centered">
              <thead class="bg-light-subtle">
                <tr>
                  <th style="width: 20px">
                    <div class="form-check ms-1">
                      <input type="checkbox" class="form-check-input" id="customCheck1" />
                      <label class="form-check-label" for="customCheck1"></label>
                    </div>
                  </th>
                  <th>Tên sản phẩm & Size</th>
                  <th>Đơn giá</th>
                  <th>Tồn kho</th>
                  <th>Thể loại</th>
                  <th>Đánh giá</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product">
                  <td>
                    <div class="form-check ms-1">
                      <input type="checkbox" class="form-check-input" id="customCheck2" />
                      <label class="form-check-label" for="customCheck2">&nbsp;</label>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                      <div
                        class="rounded bg-light avatar-md d-flex align-items-center justify-content-center"
                      >
                        <img
                          :src="product.thumbnailPath"
                          alt=""
                          class="avatar-md"
                          width="80"
                        />
                      </div>
                      <div>
                        <a href="#!" class="text-dark fw-medium fs-15">{{
                          product.title
                        }}</a>
                        <p class="text-muted mb-0 mt-1 fs-13">
                          <span>Size : </span>S , M
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>${{ product.price }}</td>
                  <td>
                    <p class="mb-1 text-muted">
                      <span class="text-dark fw-medium">{{ product.stock }} Item</span>
                      Left
                    </p>
                    <p class="mb-0 text-muted">443 Sold</p>
                  </td>
                  <td>{{ product.category }}</td>
                  <td>
                    <span class="badge p-1 bg-light text-dark fs-12 me-1"
                      ><rating :rating="product.rating"></rating>
                    </span>
                  </td>
                  <td>
                    <div class="d-flex gap-2">
                      <NuxtLink
                        :to="`/admin/product/${product.id}`"
                        class="btn btn-soft-primary btn-sm"
                        ><i class="align-middle fa fa-eye"></i
                      ></NuxtLink>
                      <a href="#!" class="btn btn-light btn-sm"
                        ><i class="align-middle fa fa-pencil"></i
                      ></a>
                      <a href="#!" class="btn btn-soft-danger btn-sm"
                        ><i class="align-middle fa fa-trash-o"></i
                      ></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end table-responsive -->
        </div>
        <div class="card-footer border-top">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end mb-0">
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">Previous</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:void(0);">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts } from "../../../api/product";
export default {
  layout: "LayoutAdmin",
  components: {
    Title: () => import("@/components/admin/Title"),
  },
  head() {
    return {
      title: "About Us",
    };
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getAll();
  },

  methods: {
    async getAll() {
      const response = await getProducts();
      console.log(response);
      this.products = response.data.products;
      console.log(1);
    },
  },
};
</script>
