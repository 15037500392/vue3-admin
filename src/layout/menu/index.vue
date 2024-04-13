<template>
  <template v-for="(item, index) in menuList" :key="index">
    <template v-if="!item.meta.hidden">
      <el-menu-item :index="item.path" v-if="!item.children">
        <el-icon><component :is="item.meta.icon"></component></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item :index="item.path" v-if="!item.children[0].meta.hidden">
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>
      </template>
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </template>
</template>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Menu',
}
</script>
<script setup lang="ts">
defineProps(['menuList'])
</script>
<style></style>
