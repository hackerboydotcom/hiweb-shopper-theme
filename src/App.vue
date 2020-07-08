<template>
  <div id="app">

    <!-- Navbar -->
    <Navbar />

    <div v-if="$themeConfig.getConfigValue('promotion-text')" class="py-3 bg-dark bg-pattern @@classList">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Text -->
            <div class="text-center text-white">
              <span class="heading-xxs letter-spacing-xl">
                {{ $themeConfig.getConfigValue('promotion-text') }}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>

    <router-view/>

    <!-- Footer -->
    <Footer />

    <!-- Cart modal -->
    <CartModal />

  </div>
</template>

<script type="text/javascript">
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';

export default {

  components: { Navbar, Footer, CartModal }
}
</script>