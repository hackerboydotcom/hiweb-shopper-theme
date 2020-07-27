<template>
  <div>
    Test component: {{ component.getConfigValue('test') }}
  </div>
</template>

<script type="text/javascript">
export default {

  props: ['component']

}
</script>