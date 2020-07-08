<template>
  <div class="collection container mt-5">
    
    <!-- Loading -->
    <loader v-if="isLoadingCollection" />

    <!-- Errors -->
    <error-hero :errors="collectionErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Collection -->
    <template v-if="collectionDocument">
      
      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">{{ collection.getAttribute('title') }}</span>
        </li>
      </ol>

      <!-- Heading -->
      <h1 class="mt-6 text-center">{{ collection.getAttribute('title') }}</h1>
      <p class="text-muted text-center">{{ collection.getAttribute('description') }}</p>

      <!-- Is loading products -->
      <loader v-if="isLoadingCollectionProducts" />

      <!-- Errors -->
      <error-hero title="No products" :errors="collectionProductsErrors" action-text="Go to home" :action="$linkTo('home')" />

      <!-- Products -->
      <div v-if="collectionProductsDocument" class="row">
        <div v-for="product in products" class="col-lg-3 col-6">
          <product-box :product="product" />
        </div>
      </div>

    </template>

  </div>
</template>

<script type="text/javascript">
export default {

  created() {

    // Active collection mixin
    this.useCollectionMixin(true);
  },

  computed: {

    collection: function() {
      return this.collectionDocument.getData();
    },

    products: function() {
      return this.collectionProductsDocument.getData();
    }
  }
}
</script>