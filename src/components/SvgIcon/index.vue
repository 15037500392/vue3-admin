<template>
  <svg :style="{ width: width, height: height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script lang="ts">
export default {
  name: 'SvgIcon',
}
</script>
<script setup lang="ts">
//接收父组件传递过来的参数
defineProps({
  // xlink:href属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的图标名字
  name: String,
  // 接受父组件传递过来的颜色
  color: {
    type: String,
    default: '',
  },
  // 接受父组件传递过来的图标的宽高
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<style></style>
