<template>
  <div class="pagination"></div>
</template>

<script type="text/javascript">
export default {

  props: ['callback'],

  created() {
    window.addEventListener('scroll', this.scrollCallback, true);
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollCallback, true);
  },

  methods: {

    scrollCallback() {

      let bottomY = window.scrollY + window.innerHeight;
      let paginationY = this.$el.offsetTop;

      if (bottomY < paginationY) {
        return;
      }

      if (typeof this.callback !== 'function') {
        return;
      }

      this.callback();
    }
  }
}
</script>