<template>
  <div class="home container mt-8">
    
    <loader v-if="isLoadingProducts" />
    <div v-else class="row">
      <div v-for="product in productsDocument.getData()" class="col-lg-3">
        <product-box :key="product.getId()" :product="product" />
      </div>
    </div>

    <div v-html="$themeConfig.getConfigValue('home-wysiwyg')" :style="'color: ' + $themeConfig.getConfigValue('home-color')"></div>

    <hiweb-theme-block block="home-test" />

    <h2>Example images:</h2>
    <template v-for="image in $themeConfig.getConfigValue('home-images')">
      <img :src="$image.url(image)" />
    </template>

    <h2>Example products:</h2>
    {{ $themeConfig.getConfigValue('home-products') }}

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