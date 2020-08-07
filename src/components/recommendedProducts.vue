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
          <div v-if="products" class="flickity-buttons-lg px-lg-12 mt-n3">

            <!-- Item -->
            <div v-for="product in products" class="col-12 col-md-4 pt-3 pb-7">
              <product-box :product="product" :quick-view="false" />
            </div>

          </div>

          <div v-if="(!products || products.length == 0) && !isLoading">
            <!-- Errors -->
            <error-hero :errors="['Resource not found']" />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import Flickity from 'flickity';

export default {

  props: ['component',],

  data() {
    return {
      products: null,
      productsDocument:null,
      errors: [],
      productId:null,
      isLoading: true,
      product: null,
    }
  },

  created() {

    // Listen to an event
    this.$event.$on('view-product', eventPayload => {

      this.product = eventPayload.getData();
      this.productId = this.product.data.id;
      this.getProducts();
      
    })

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
          options.params['filter[search]'] = this.searchString;
      } else if (this.recommenedType == "popular") {
          options.sort = '-order_count';
      }
      
      try {

        this.productsDocument = await this.$http.collection('products', options);
        this.products = this.productsDocument.getData();
        this.products = this.products.filter(productData => productData.data.id != this.productId);
        
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
    },

    searchString: function() {

      let search = '';

      // Tag
      search = this.product.getAttribute('title');

      // Collection
      let collectionWords = [];
      let collections = this.product.getRelationshipData('collections');
      
      if (collections) {

          for (let i = 0; i < collections.length; i++) {

              let collectionTitle = collections[i].data.attributes.title.toLowerCase();
              collectionTitle = collectionTitle.replace(',', '');
              collectionTitle = collectionTitle.split(' ');

              for (let k = 0; k < collectionTitle.length; k++) {

                  if (collectionWords.indexOf(collectionTitle[k]) === -1) {
                      collectionWords.push(collectionTitle[k]);
                  }

              }

          }

      }

      search = search.toLowerCase().split(' ');

      for (let i = 0; i < search.length; i++) {

          // Remove collection word
          if (collectionWords.indexOf(search[i]) !== -1) {
              search.splice(i, 1);
              i--;
          }

      }
      
      return search.join(' ');

    },

  },

  watch: {
    recommenedType: function() {
      this.getProducts()
    }
  },
}
</script>

