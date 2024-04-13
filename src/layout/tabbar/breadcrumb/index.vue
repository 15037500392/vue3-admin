<template>
  <el-icon size="24" class="tabbar_left_icon" v-if="layOutSettingStore.fold" @click="changeIcon">
  <Expand />
  </el-icon>
  <el-icon size="24" class="tabbar_left_icon" v-else @click="changeIcon">
    <Fold />
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" :to="item.path
" v-show="item.meta.title">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin: 0 5px;">{{item.meta.title}}</span>
    </el-breadcrumb-item>  
  </el-breadcrumb>
</template>
<script lang="ts">
export default {
  name: 'breadcrumb',
}
</script>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting.ts'
const $route = useRoute()
let layOutSettingStore = useLayOutSettingStore()
console.log($route.matched,'$route.matched')
const changeIcon = () => {
  layOutSettingStore.fold = !layOutSettingStore.fold
}

</script>

<style lang="scss" scoped>
.tabbar_left_icon {
  margin-right: 10px;
}
</style>
