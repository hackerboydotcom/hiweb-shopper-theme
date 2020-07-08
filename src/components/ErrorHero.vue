<template>
  <div v-if="errors && errors.length" class="error-hero">
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

          <!-- Icon -->
          <div class="mb-7 font-size-h1">🙁</div>

          <!-- Heading -->
          <h2 class="mb-5">{{ title || 'Oops..! Something went wrong!' }}</h2>

          <!-- Text -->
          <p v-for="msg in errors" class="mb-7 text-gray-500">
            {{ msg }}
          </p>

          <!-- Button -->
          <button v-if="actionText && action" @click="triggerAction" class="btn btn-dark cursor-pointer">
            {{ actionText }}
          </button>

        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {
  props: {

    errors: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },

    title: {
      type: String,
      required: false
    },

    actionText: {
      type: String,
      required: false
    },

    action: {
      required: false
    }
  },

  methods: {

    triggerAction() {

      if (typeof this.action === 'function') {
        return this.action();
      }

      this.$router.push(this.action);

    }
  }
}
</script>