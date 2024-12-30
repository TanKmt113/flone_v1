<template>
  <div>
    <div class="d-flex gap-3 align-items-center mb-4">
      <Title :title="'Bài viết'"></Title>
      <button class="btn btn-outline-primary btn-sm">Thêm bài viết</button>
    </div>
    <div>
      <div style="height: 650px" class="overflow-auto mb-5">
        <table class="table table-hover table-bordered">
          <thead class="sticky-top">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Tác giả</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Thẻ</th>
              <th scope="col">Thời gian</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in 100">
              <th scope="row">{{ index + 1 }}</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Trước</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Sau</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>
