import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '@/components/Top';
import DemoBasic from '@/components/DemoBasic';
import DemoAdvanced from '@/components/DemoAdvanced';

Vue.use(VueRouter);

const routes = [
    { path: '/vue-image-tiling/demo_basic', component: DemoBasic },
    // { path: '/demo_advanced', component: DemoAdvanced },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;