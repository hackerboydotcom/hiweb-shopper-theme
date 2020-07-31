<template>
  <section class="pt-12 pb-0 featured-products">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">

          <!-- Preheading -->
          <h6 v-if="component.getConfigValue('featured-products__small-text')" class="heading-xxs mb-3 text-gray-400">
            {{ component.getConfigValue('featured-products__small-text') }}
          </h6>

          <!-- Heading -->
          <h2 v-if="component.getConfigValue('featured-products__heading')" class="mb-10">{{ component.getConfigValue('featured-products__heading') }}</h2>

          <div v-if="isLoading" class="text-center">
            <loader />
          </div>

          <!-- Slider -->
          <div v-if="productsDocument" class="flickity-buttons-lg px-lg-12 mt-n3">

            <!-- Item -->
            <div v-for="product in productsDocument.getData()" class="col-12 col-md-4 pt-3 pb-7">
              <product-box :product="product" :quick-view="false" />
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import Flickity from 'flickity';

export default {

  props: ['component'],

  data() {
    return {
      isLoading: false,
      productsDocument: null
    };
  },

  created() {
    this.getProducts();
  },

  methods: {

    /**
    * Get products
    */
    async getProducts() {

      this.isLoading = true;

      try {

        let options = {};

        // If collection id set
        if (this.collectionId) {
          options.params = {
            'filter[collection_id]': this.collectionId
          };
        }

        this.productsDocument = await this.$http.collection('products', options);

        // Init slider
        let waiting = setInterval(() => {

          let dom = this.$el.querySelector('.flickity-buttons-lg');
          if (!dom) {
            return;
          }

          clearInterval(waiting);

          let flky = new Flickity(dom, {
            cellAlign: 'left'
          });

        }, 100);

      } catch (e) {

      }

      this.isLoading = false;

    }

  },

  computed: {

    collectionId: function() {
      let c = this.component.getConfigValue('featured-products__collection');
      if (c && Array.isArray(c) && c[0]) {
        return c[0];
      }
      return null;
    }
  },

  watch: {

    collectionId: function() {
      this.getProducts();
    }

  }
}
</script>

<style type="text/css" lang="scss">
.featured-products .flickity-page-dots {
  display: none;
}
</style>