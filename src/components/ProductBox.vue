<template>
  <div class="product-box">
    <div class="card mb-7">

      <!-- Badge -->
      <div v-if="product.getAttribute('compare_at_price')" class="badge badge-dark card-badge card-badge-left text-uppercase">
        Sale
      </div>

      <!-- Image -->
      <div class="card-img" style="overflow: hidden;">

        <div style="position: absolute; top: 0px; left: 0px; width: 100%">
          <!-- Image -->
          <router-link :class="(product.getRelationshipData('images') && product.getRelationshipData('images').length > 1) ? 'card-img-hover' : 'card-img'" :to="$linkTo('product', product)">
            <img class="card-img-top card-img-back" :src="$image.url(product.getRelationshipData('image'))" alt="...">
            <img v-if="product.getRelationshipData('images') && product.getRelationshipData('images').length > 1" class="card-img-top card-img-front" :src="$image.url(product.getRelationshipData('images')[1])" alt="...">
          </router-link>

          <!-- Actions -->
          <div v-if="quickView" class="card-actions">
            <span class="card-action">
              <router-link :to="$linkTo('product', product)" class="btn btn-xs btn-circle btn-white-primary">
                <i class="fe fe-eye"></i>
              </router-link>
            </span>
            <span class="card-action">
              <button @click="showModal" class="btn btn-xs btn-circle btn-white-primary">
                <i class="fe fe-shopping-cart"></i>
              </button>
            </span>
          </div>
        </div>

      </div>

      <!-- Body -->
      <div class="card-body px-0">

        <!-- Category -->
        <div v-if="product.getRelationshipData('collection')" class="font-size-xs">
          <router-link class="text-muted" :to="$linkTo('collection', product.getRelationshipData('collection'))">
            {{ product.getRelationshipData('collection').getAttribute('title') }}
          </router-link>
        </div>

        <!-- Title -->
        <div class="font-weight-bold">
          <router-link class="text-body" :to="$linkTo('product', product)">
            {{ product.getAttribute('title') }}
          </router-link>
        </div>

        <!-- Price -->
        <div class="font-weight-bold">
          <small v-if="product.getAttribute('compare_at_price')" class="font-size-xs text-gray-350 text-decoration-line-through mr-3">
            {{ $currency.priceFormat(product.getAttribute('compare_at_price')) }}
          </small>
          <span class="text-primary">{{ $currency.priceFormat(product.getAttribute('price')) }}</span>
        </div>

      </div>

    </div>

    <!-- Quick view modal -->
    <div v-if="quickView" class="modal fade" :id="id">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          
          <!-- Close -->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Content -->
          <div class="container-fluid px-xl-0">
            <div v-if="isLoadingProduct" class="p-6 mt-6"><loader /></div>
            <div v-else class="row mx-xl-0">
              <div class="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">

                <!-- Image -->
                <ProductImages />

                <!-- Detail Button -->
                <button @click="viewProduct" class="btn btn-sm btn-block btn-primary" style="position: absolute; bottom: 0px;">
                  More Product Info <i class="fe fe-info ml-2"></i>
                </button>

              </div>
              <div class="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                  
                <!-- Product detail -->
                <ProductDetail />

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import $ from 'jquery';

import ProductImages from '@/views/product/Images';
import ProductDetail from '@/views/product/Detail';

export default {
  
  props: {
    product: {
      type: Object
    },
    quickView: {
      type: Boolean,
      default: true
    }
  },

  components: { ProductImages, ProductDetail },

  data() {
    return {
      id: 'product-modal-' + this.product.getId() + (new Date).getTime()
    };
  },

  created() {

    // Listen to add to cart event
    this.$event.$on('cart-item-created', cartItemDocument => {

      // Hide modal
      $(this.$el.querySelector('#' + this.id)).modal('hide');
      
      // Show cart modal
      let action = this.$themeConfig.getConfigValue('add-to-cart-action');
      if (action === 'modal') {
        this.$event.$emit('_show-cart-modal');
      } else if (action === 'cart') {
        this.$router.push(this.$linkTo('cart'));
      } else {
        this.$router.push(this.$linkTo('checkout'));
      }

    });

  },

  methods: {

    /**
    * Show quick view modal
    */
    async showModal() {

      // Use product mixin event listeners
      if (!this.usingProductMixin) {
        this.useProductMixin(true); 
        this.useProductMixin(false); 
      }

      // Show modal
      $(this.$el.querySelector('#' + this.id)).modal('show');

      // Get product from api
      this.productDocument = null;
      this.isLoadingProduct = true;
      this.productErrors = [];

      // Try to get from api
      try {

        // Get
        this.productDocument = await this.$http.find('products', this.product.getAttribute('handle'));

        // Emit event
        this.$event.$emit('view-product', this.productDocument);

        // Set default option value
        let options = this.productDocument.getData().getAttribute('options');
        if (options && options.length) {
          options.forEach((option, index) => {
            
            // If no values
            let values = option.values;
            if (!values || !values.length) {
              return;
            }

            this['productOption' + (index + 1)] = values[0];

          });
        }

      } catch (e) {
        this.productErrors = this.$handleException(e);
      }

      // Turn off loading state
      this.isLoadingProduct = false;

    },

    /**
    * View product
    */
    viewProduct() {

      // Hide modal
      $(this.$el.querySelector('#' + this.id)).modal('hide');

      // Push to product view
      this.$router.push(this.$linkTo('product', this.product));
    }
  },

  watch: {

    '$route': function() {
      $(this.$el.querySelector('#' + this.id)).modal('hide');
    }
  }
}
</script>

<style type="text/css" lang="scss">
.product-box {

  .card-img {
    position: relative;
    padding-top: 100%;
  }

  .flickity-viewport {
    min-height: 300px !important;
  }

  .flickity-page-dots {
    display: none;
  }
}
</style>