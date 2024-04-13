<template>
  <div class="logo" v-if="setting.loginHidden">
    <img class="img" :src="setting.logo" alt="logo" />
    <p class="title" v-if="!layOutSettingStore.fold">{{ setting.title }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting.ts'
import setting from '@/setting'
const layOutSettingStore = useLayOutSettingStore()
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  color: #fff;
  align-items: center;
  padding: 20px;
  font-size: $base-logo-title-fontSize;
  height: $base-menu-logo-height;
}
.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
