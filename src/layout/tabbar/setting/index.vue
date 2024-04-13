<template>
  <el-button :icon="Refresh" circle />
  <el-button :icon="FullScreen" circle />
  <el-button :icon="Setting" circle />
  <el-avatar
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    style="margin: 0 10px"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
export default {
  name: 'setting',
}
</script>
<script lang="ts" setup>
import { FullScreen, Refresh, Setting } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>
