import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue';
import './assets/global.less';
import components from './components/global';
import Router from './router/index';

const app = createApp(App)

app.use(ElementPlus, {
  zIndex: 3000,
  locale: zhCn
});

// components
for (const i in components) {
  app.component(i, components[i])
}

app.use(Router).mount('#app')
