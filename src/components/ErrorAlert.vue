<template>
  <div v-if="errors && errors.length" class="alert alert-danger">
    <h6 v-if="title">{{ title }}</h6>
    <p v-for="error in errors" class="mb-1 mt-1">{{ error }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['title', 'errors']
}
</script>