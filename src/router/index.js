import Vue from 'vue';
import VueRouter from 'vue-router';
import DemoBasic from '@/components/DemoBasic';
import DemoAdvanced from '@/components/DemoAdvanced';

Vue.use(VueRouter);

const routes = [
    { path: '/bemo_basic', component: DemoBasic },
    { path: '/bemo_advanced', component: DemoAdvanced },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;