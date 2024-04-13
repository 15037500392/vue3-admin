<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div
      class="layout_slider"
      :class="
        layOutSettingStore.fold ? 'layout_slider_fold' : 'layout_slider_open'
      "
    >
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          router
          unique-opened
          :collapse="layOutSettingStore.fold"
          :default-active="$router.fullPath"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="white"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div
      class="layout_tabbar"
      :class="
        layOutSettingStore.fold ? 'layout_tabbar_fold' : 'layout_tabbar_open'
      "
    >
      <Tabbar></Tabbar>
    </div>
    <div
      class="layout_main"
      :class="layOutSettingStore.fold ? 'layout_main_fold' : 'layout_main_open'"
    >
      <Main></Main>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useLayOutSettingStore from '@/store/modules/setting.ts'
import useUserStore from '@/store/modules/user.ts'
import { useRoute } from 'vue-router'
const layOutSettingStore = useLayOutSettingStore()
const $router = useRoute()
console.log($router.fullPath, 'router')
const userStore = useUserStore()
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    color: #fff;
    transform: all 0.3s;
    background: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_slider_open {
    width: $base-menu-width;
  }
  .layout_slider_fold {
    width: $base-menu-fold-width;
  }
  .layout_tabbar {
    position: fixed;
    height: $base-tabbar-height;
    top: 0px;
    transform: all 0.3s;
  }
  .layout_tabbar_fold {
    width: calc(100% - $base-menu-fold-width);
    left: $base-menu-fold-width;
  }
  .layout_tabbar_open {
    width: calc(100% - $base-menu-width);
    left: $base-menu-width;
  }
  .layout_main {
    position: fixed;
    height: calc(100vh - $base-tabbar-height);
    overflow: auto;
    top: $base-tabbar-height;
    padding: 20px;
    transform: all 0.3s;
  }
  .layout_main_fold {
    width: calc(100% - $base-menu-fold-width);
    left: $base-menu-fold-width;
  }
  .layout_main_open {
    width: calc(100% - $base-menu-width);
    left: $base-menu-width;
  }
}
</style>
