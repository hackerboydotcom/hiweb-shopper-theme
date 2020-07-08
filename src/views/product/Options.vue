<template>
  <div v-if="product.getAttribute('options')" class="product__options">
    
    <div v-for="option, index in product.getAttribute('options')" class="product__options__option">
      
      <!-- Label -->
      <p class="mb-5">
        {{ option.name }}: <strong>{{ $parent.$parent['productOption' + (index + 1)] }}</strong>
      </p>

      <!-- Radio -->
      <div class="mb-2">
        <div v-for="value, valueIndex in option.values" class="custom-control custom-control-inline custom-control-size mb-2">
          <input v-model="$parent.$parent['productOption' + (index + 1)]" type="radio" class="custom-control-input" :name="'product-' + product.getId() + '-option-' + index" :id="'product-' + product.getId() + '-option-' + index + '-' + valueIndex" :value="value" data-toggle="form-caption">
          <label class="custom-control-label" :for="'product-' + product.getId() + '-option-' + index + '-' + valueIndex">{{ value }}</label>
        </div>
      </div>

    </div>
      

  </div>
</template>

<script type="text/javascript">
export default {

  methods: {

    checkIsSelected(value, index) {

    }
  },

  computed: {

    product: function() {
      return this.$parent.product;
    }
  }
}
</script>