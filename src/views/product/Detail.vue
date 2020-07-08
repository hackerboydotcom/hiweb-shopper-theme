<template>
  <div class="product__detail">
    
    <!-- Heading -->
    <h3 class="mb-2">{{ product.getAttribute('title') }}</h3>

    <!-- Price -->
    <div class="mb-7">
      <span class="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">
        {{ $currency.priceFormat((selectedVariant ? selectedVariant.getAttribute('compare_at_price') : product.getAttribute('compare_at_price')) * $parent.productQuantity) }}
      </span>
      <span class="ml-1 font-size-h5 font-weight-bolder text-primary">
        {{ $currency.priceFormat((selectedVariant ? selectedVariant.getAttribute('price') : product.getAttribute('price')) * $parent.productQuantity) }}
      </span>
    </div>

    <!-- Options -->
    <Options />

    <!-- Add to cart -->
    <div class="form-row mb-7">
      <div class="col-12 col-lg-auto">

        <!-- Quantity -->
        <select v-model="$parent.productQuantity" class="custom-select mb-2">
          <option v-for="i in 10" :value="i">{{ i }}</option>
        </select>

      </div>
      <div class="col-12 col-lg">

        <!-- Submit -->
        <button @click="addToCart" :disabled="!selectedVariant || $parent.isCreatingCartItem" type="submit" class="btn btn-block btn-dark mb-2">
          Add to Cart <i class="fe fe-shopping-cart ml-2"></i>
        </button>

      </div>
    </div>

    <!-- Text -->
    <p v-if="product.getAttribute('description')">
      <span class="text-gray-500">{{ product.getAttribute('description') }}</span>
    </p>

    <!-- Add to cart errors -->
    <error-alert title="Failed to add item to cart" :errors="$parent.createCartItemErrors" />

  </div>
</template>

<script type="text/javascript">
import Options from './Options';

export default {

  components: { Options },

  methods: {

    addToCart() {
      return this.$parent.addToCart();
    }
  },

  computed: {

    product: function() {
      return this.$parent.product;
    },

    selectedVariant: function() {
      return this.$parent.selectedVariant;
    }
  }
}
</script>