<template>
  <div class="cart container">
    
    <!-- BREADCRUMB -->
    <nav class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Breadcrumb -->
            <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
              <li class="breadcrumb-item">
                <a class="text-gray-400" href="/">Home</a>
              </li>
              <li class="breadcrumb-item active">
                Shopping Cart
              </li>
            </ol>

          </div>
        </div>
      </div>
    </nav>

    <!-- CONTENT -->
    <section class="pt-7 pb-12">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Heading -->
            <h3 v-if="isLoadingCart || (!isLoadingCart && cartItems && cartItems.length)" class="mb-10 text-center">Shopping Cart</h3>

          </div>
        </div>
        <div v-if="isLoadingCart" class="col-12">
          <loader />
        </div>
        <div v-else-if="!cartItems || !cartItems.length">
          <error-hero title="Your cart is empty" :errors="['Lets go back to Shopping']" action-text="Go back" :action="$linkTo('home')" />
        </div>
        <div v-else class="row">
          <div class="col-12 col-md-7">

            <!-- List group -->
            <ul class="list-group list-group-lg list-group-flush-x mb-6">
              
              <!-- Cart items -->
              <li v-for="cartItem in cartItems" class="list-group-item">
                <div class="row align-items-center">
                  <div class="col-3">

                    <!-- Image -->
                    <router-link :to="$linkTo('product', cartItem.getRelationshipData('product'))">
                      <img :src="$image.url(cartItem.getRelationshipData('product').getRelationshipData('image'))" class="img-fluid" />
                    </router-link>

                  </div>
                  <div class="col">

                    <!-- Title -->
                    <div class="d-flex mb-2 font-weight-bold">
                      <router-link :to="$linkTo('product', cartItem.getRelationshipData('product'))" class="text-body">
                        {{ cartItem.getRelationshipData('product').getAttribute('title') }}
                      </router-link> 
                      <span class="ml-auto">{{ $currency.priceFormat(cartItem.getAttribute('total_price')) }}</span>
                    </div>

                    <!-- Text -->
                    <p v-if="cartItem.getRelationshipData('variant').getAttribute('title')" class="mb-7 font-size-sm text-muted">
                      {{ cartItem.getRelationshipData('variant').getAttribute('title') }}
                    </p>

                    <!--Footer -->
                    <div class="d-flex align-items-center">

                      <!-- Select -->
                      <select :value="cartItem.getAttribute('quantity')" @change="changeQuantity(cartItem, $event)" class="custom-select custom-select-xxs w-auto">
                        <option v-for="i in 10" :value="i">{{ i }}</option>
                      </select>

                      <!-- Remove -->
                      <span @click="deleteCartItem(cartItem)" class="font-size-xs text-gray-400 ml-auto cursor-pointer">
                        <i class="fe fe-x"></i> Remove
                      </span>

                    </div>

                  </div>
                </div>
              </li>

            </ul>

          </div>
          <div class="col-12 col-md-5 col-lg-4 offset-lg-1">

            <!-- Total -->
            <div class="card mb-7 bg-light">
              <div class="card-body">
                <ul class="list-group list-group-sm list-group-flush-y list-group-flush-x">
                  <li class="list-group-item d-flex">
                    <span>Subtotal:</span> <span class="ml-auto font-size-sm">{{ $currency.priceFormat(cart.getAttribute('subtotal_price')) }}</span>
                  </li>
                  <li class="list-group-item d-flex">
                    <span>Discount:</span> <span class="ml-auto font-size-sm">{{ $currency.priceFormat(cart.getAttribute('total_discount')) }}</span>
                  </li>
                  <li class="list-group-item d-flex font-size-lg font-weight-bold">
                    <span>Total</span> <span class="ml-auto font-size-sm">{{ $currency.priceFormat(cart.getAttribute('total_price')) }}</span>
                  </li>
                  <li class="list-group-item font-size-sm text-center text-gray-500">
                    Shipping cost calculated at Checkout *
                  </li>
                </ul>
              </div>
            </div>

            <!-- Coupon -->
            <div class="pb-6 mb-md-0">
              <label class="font-size-sm font-weight-bold">
                Coupon code:
              </label>
              <div class="row form-row">
                <div class="col">

                  <!-- Input -->
                  <input v-model="discountCode" v-on:keyup.enter="applyDiscount(discountCode)" class="form-control form-control-sm" type="text" placeholder="Enter coupon code*">

                </div>
                <div class="col-auto">

                  <!-- Button -->
                  <button @click="applyDiscount(discountCode)" class="btn btn-sm btn-light">
                    Apply
                  </button>

                </div>
                <div v-if="cart.getRelationshipData('discount')" class="col-12 mt-3">
                  <div class="alert alert-success">
                    Coupon "{{ cart.getRelationshipData('discount').getAttribute('code') }}" applied. <span @click="removeDiscount" class="cursor-pointer text-muted">(Remove)</span>

                    <template v-if="cart.getRelationshipData('discount').getAttribute('description')">
                      <hr />
                      <p class="mb-0">
                        {{ cart.getRelationshipData('discount').getAttribute('description') }}
                      </p>
                    </template>
                  </div>
                </div>
              </div>
            </div>


            <error-alert :errors="errors" />

            <!-- Button -->
            <a class="btn btn-block btn-dark mb-2" :href="'/checkout/' + cart.getId()">Proceed to Checkout</a>

            <!-- Link -->
            <router-link class="btn btn-link btn-sm px-0 text-body" :to="$linkTo('home')">
              <i class="fe fe-arrow-left mr-2"></i> Continue Shopping
            </router-link>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script type="text/javascript">
export default {

  data() {
    return {
      discountCode: '',
      errors: [],
    };
  },

  created() {
    
    // Discount apply failed
    this.$event.$on('apply-discount-failed', e => {
      this.errors = this.$handleException(e);
    });

    // Cart loaded
    this.$event.$on('cart-loaded', () => {
      this.errors = [];
    });
  },

  methods: {
    changeQuantity(cartItem, event) {
      this.createCartItem(cartItem.getRelationshipData('variant').getId(), event.target.value);
    }
  },

}
</script>