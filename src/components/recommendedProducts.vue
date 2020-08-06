<template>
  <div class="recommended-products">
    <section class="pt-11">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Heading -->
            <h4 class="mb-10 text-center">
              {{component.getConfigValue('recommended-products__heading')}}
            </h4>
            
            <!-- Is loading -->
            <div v-if="isLoading" class="mt-5 pt-5">
              <div class="mt-5 pt-5"></div>
              <loader />
            </div>

            <!-- Products -->
            <div v-if="products" class="row">
              <div v-for="product in products" class="col-lg-3">
                <product-box :key="product.getId()" :product="product" />
              </div>
            </div>

            <div v-else>
                <!-- Errors -->
                <error-hero :errors="errors" />
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {

  props: ['component'],

  data() {
    return {
      products: null,
      errors: [],
      isLoading: true,
    }
  },

  created() {

    let params = {
        limit: 8,
        page: 1,
        'exclude_relationships[products]': 'variants',
    };
    if (this.component.getConfigValue('recommended-products__selector') == 'recentlyViewed') {
        // params['filter[ids]'] = 
        params['sort'] = '-created_at';
    } else if (this.component.getConfigValue('recommended-products__selector') == "related") {
        params['sort'] = '-created_at';
        // params['filter[search]'] = '';
    } else if (this.component.getConfigValue('recommended-products__selector') == "popular") {
        // params['sort'] = '-order_count';
    }

    this.getProducts(params);

  },

  methods: {

    /**
    * get products
    * @param object
    */
    async getProducts(params) {

      this.isLoading = true;

      try {

        let productsDocument = await this.$http.collection('products', { params });
        this.products = productsDocument.getData();

      } catch (error) {
        
        this.errors.push('Resource not found!')

      }

      this.isLoading = false;

    }
  },
}
</script>
