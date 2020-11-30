<template>
  <keep-alive>
    <component :is="dynamicIcon"/>
  </keep-alive>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicIcon () {
      return () => import(
          /* webpackChunkName: "icons" */
          /* webpackMode: "lazy-once" */
          `~/assets/icons/${this.icon}.svg`
      )
    }
  }
}
</script>

<style scoped>

</style>
