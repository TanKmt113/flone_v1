import Vue from 'vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css'; // Thay đổi theme nếu cần
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.use(PrimeVue);
Vue.use(ToastService);
Vue.component('Button', Button); // Đăng ký các component cần thiết
