<template>
  <div class="cart-modal">
    <div class="modal fixed-right fade" id="modalShoppingCart" tabindex="-1" role="dialog" aria-hidden="true">

      <!-- Loading -->
      <div v-if="isLoadingCart" class="modal-dialog modal-dialog-vertical">
        <div class="modal-content pt-10">
          <loader />
        </div>
      </div>

      <!-- Loaded -->
      <div v-else-if="cart" class="modal-dialog modal-dialog-vertical" role="document">

        <!-- Full cart (add `.d-none` to disable it) -->
        <div v-if="cart.getAttribute('item_count')" class="modal-content">

          <!-- Close -->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Header-->
          <div class="modal-header line-height-fixed font-size-lg">
            <strong class="mx-auto">Your Cart ({{ cart.getAttribute('item_count') }})</strong>
          </div>

          <!-- List group -->
          <ul v-if="cart.getRelationshipData('cart_items')" class="list-group list-group-lg list-group-flush">
            <li v-for="cartItem in cart.getRelationshipData('cart_items')" class="list-group-item">
              <div class="row align-items-center">
                <div class="col-4">

                  <!-- Image -->
                  <router-link :to="$linkTo('product', cartItem.getRelationshipData('product'))">
                    <img class="img-fluid" :src="$image.url(cartItem.getRelationshipData('product').getRelationshipData('image'))" />
                  </router-link>

                </div>
                <div class="col-8">

                  <!-- Title -->
                  <p class="font-size-sm font-weight-bold mb-1">
                    <router-link :to="$linkTo('product', cartItem.getRelationshipData('product'))">
                      {{ cartItem.getRelationshipData('product').getAttribute('title') }}
                    </router-link>
                  </p>

                  <small v-if="cartItem.getRelationshipData('variant').getAttribute('title')" class="mb-0 d-block">{{ cartItem.getRelationshipData('variant').getAttribute('title') }}</small>
                  <small class="text-muted d-block mb-2">{{ $currency.priceFormat(cartItem.getAttribute('price') * cartItem.getAttribute('quantity')) }}</small>

                  <!--Footer -->
                  <div class="d-flex align-items-center">

                    <!-- Select -->
                    <select @change="changeQuantity(cartItem, $event)" :value="cartItem.getAttribute('quantity')" class="custom-select custom-select-xxs w-auto">
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

          <!-- Footer -->
          <div class="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>Subtotal</strong> <strong class="ml-auto">{{ $currency.priceFormat(cart.getAttribute('total_price')) }}</strong>
          </div>

          <!-- Buttons -->
          <div class="modal-body">
            <a class="btn btn-block btn-dark" :href="'/checkout/' + cart.getId()">Continue to Checkout</a>
            <router-link :to="$linkTo('cart')" class="btn btn-block btn-outline-dark">View Cart</router-link>
          </div>

        </div>

        <!-- Empty cart (remove `.d-none` to enable it) -->
        <div v-else class="modal-content">

          <!-- Close -->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="fe fe-x" aria-hidden="true"></i>
          </button>

          <!-- Header-->
          <div class="modal-header line-height-fixed font-size-lg">
            <strong class="mx-auto">Your Cart (0)</strong>
          </div>

          <!-- Body -->
          <div class="modal-body flex-grow-0 my-auto">

            <!-- Heading -->
            <h6 class="mb-7 text-center">Your cart is empty 😞</h6>

            <!-- Button -->
            <button class="btn btn-block btn-outline-dark" @click="hideModal()">
              Continue Shopping
            </button>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import $ from 'jquery';

export default {

  methods: {

    hideModal() {
      $(this.$el.querySelector('.modal')).modal('hide');
    },

    changeQuantity(cartItem, event) {
      this.createCartItem(cartItem.getRelationshipData('variant').getId(), event.target.value);
    }
  },

  mounted() {

    // Listen to event
    this.$event.$on('_show-cart-modal', () => {
      $(this.$el.querySelector('.modal')).modal('show');
    });
  },

  watch: {

    '$route': function() {
      this.hideModal();
    }
  }
}
</script>