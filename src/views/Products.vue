<template>
  <div class="products container mt-5">
    
    <!-- Is loading -->
    <div v-if="isLoadingProducts" class="mt-5 pt-5">
      <div class="mt-5 pt-5"></div>
      <loader />
    </div>

    <!-- Errors -->
    <error-hero :errors="productsErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Products -->
    <div v-if="productsDocument" class="row">
      <div v-for="product in productsDocument.getData()" class="col-lg-3">
        <product-box :key="product.getId()" :product="product" />
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {

  created() {

    // Active mixin
    this.useProductsMixin(true);
  }
}
</script>