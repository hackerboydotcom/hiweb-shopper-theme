<template>
  <div v-html="component.getConfigValue('custom-html__code')"></div>
</template>

<script type="text/javascript">
export default {
  props: ['component']
}
</script>