<template>
  <div style="width:100%">
    <menuTop></menuTop>
    <menusLeft></menusLeft>
    <menusRight></menusRight>
    <bandeja></bandeja>
  </div>
</template>

<script>
import menuTop from '@/components/menus/menu_topComponent.vue'
import menusLeft from '@/components/menus/menu_leftComponent.vue'
import menusRight from '@/components/menus/menu_rightComponent.vue'
import bandeja from '@/components/bandejas/bandejaComponent.vue'
export default {
  name: 'Bandeja',
  components: {
    menuTop,
    menusLeft,
    menusRight,
    bandeja
  },
  data: () => ({
    //
  })
}
</script>
