<template>
  <div class="home">

    <!-- Home block -->
    <hiweb-theme-block block="home" />

  </div>
</template>

<script type="text/javascript">
export default {

  data() {
    return {
      // Latest products
      isLoadingProducts: false,
      productsDocument: null,
    };
  },

  created() {

    // Get products
    this.getProducts();
  },

  methods: {

    async getProducts() {

      this.isLoadingProducts = true;
      this.productsDocument = await this.$http.collection('products');
      this.isLoadingProducts = false;
    }
  }
}
</script>