<template>
  <div class="product container mt-5">
    
    <!-- Loader -->
    <div v-if="isLoadingProduct" class="mt-5 pt-5">
      <div class="mt-5 pt-5"></div>
      <loader />
    </div>

    <!-- Errors -->
    <error-hero :errors="productErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Product -->
    <template v-if="productDocument">

      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li v-if="collection" class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('collection', collection)">{{ collection.getAttribute('title') }}</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">{{ product.getAttribute('title') }}</span>
        </li>
      </ol>

      <!-- Product information -->
      <div class="row mt-6">
        <div class="col-12 col-md-6">
          <Images />
        </div>
        <div class="col-12 col-md-6 pl-lg-10">

          <!-- Product detail -->
          <Detail />

        </div>
      </div>

      <!-- Description -->
      <div class="mt-5 pt-5">
        <Description />
      </div>
      
    </template>

  </div>
</template>

<script type="text/javascript">
import Images from '@/views/product/Images';
import Detail from '@/views/product/Detail';
import Description from '@/views/product/Description';

export default {

  components: { Images, Detail, Description },

  created() {

    // Use product mixin
    this.useProductMixin(true);

    // Listen to add to cart event
    this.$event.$on('cart-item-created', cartItemDocument => {
      
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

  computed: {

    product: function() {
      return this.productDocument.getData();
    },

    collection: function() {
      return this.product.getRelationshipData('collection');
    }
  }
}
</script>