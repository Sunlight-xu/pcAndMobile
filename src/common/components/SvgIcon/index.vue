<!-- svg-icon组件 -->
<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#'+ name" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    name: {
      type: String,
      default: 'icon-chenggong',
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: center;
  fill: currentColor;
  overflow: hidden;
}
</style>
