<template>
  <div class="login">
    <div class="favicon"></div>
    <div class="username"></div>
    <el-button
      type="primary"
      @click="handleLogin"
    >
      登录
    </el-button>
  </div>
</template>
<script setup>
import { ipc } from '@/utils/ipcRenderer';
const handleLogin = () => {
  console.log('login');
  ipc.invoke('controller/baseInfo/getBaseInfo').then((res) => {
    console.log(res);
  });
};
</script>
<style lang="less" scoped></style>
