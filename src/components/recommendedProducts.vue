<template>
  <section class="pt-5 pb-0 featured-products">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">

          <!-- Heading -->
          <h2 v-if="component.getConfigValue('recommended-products__heading')" class="mb-10">{{ component.getConfigValue('recommended-products__heading') }}</h2>

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
      products: null,
      productsDocument:null,
      errors: [],
      isLoading: true,
    }
  },

  created() {

    this.getProducts();

  },

  methods: {

    /**
    * get products
    * @param object
    */
    async getProducts() {

      this.isLoading = true;
      
      let options = {};

      options.params = {
        limit: 8,
        page: this.page,
        'exclude_relationships[products]': 'variants',
      }

      if (this.recommenedType == 'recentlyViewed') {
          // options.params['filter[ids]'] = 
          options.sort = '-created_at';
      } else if (this.recommenedType == "related") {
          options.sort = '-created_at';
          options.params['filter[search]'] = 'test-1';
      } else if (this.recommenedType == "popular") {
          options.sort = '-order_count';
      }
      
      try {

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

      } catch (error) {
        
        this.errors.push('Resource not found!')

      }

      this.isLoading = false;

    }
  },

  computed: {
    recommenedType: function() {
      return this.component.getConfigValue('recommended-products__selector') || 'related';
    }
  },

  watch: {
    recommenedType: function() {
      this.getProducts()
    }
  },
}
</script>

