<template>
  <footer class="bg-dark bg-cover mt-12 @@classList" :style="'background-image: url(' + require('@/assets/img/patterns/pattern-2.svg') + ')'">
    <div class="py-12 border-bottom border-gray-700">
      <div class="container">
        
        <div class="row">
          <div class="col-12 col-md-3">

            <!-- Heading -->
            <h4 class="mb-6 text-white">{{ $themeConfig.getConfigValue('footer-brand-text') }}</h4>
            <div v-html="$themeConfig.getConfigValue('footer-html')" class="text-muted"></div>

            <!-- Social -->
            <ul class="list-unstyled list-inline mb-7 mb-md-0">
              <li class="list-inline-item">
                <a href="#!" class="text-gray-350">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="text-gray-350">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="text-gray-350">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="text-gray-350">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="text-gray-350">
                  <i class="fab fa-medium"></i>
                </a>
              </li>
            </ul>

          </div>

          <div v-for="menuLink in $themeConfig.getConfigValue('footer-menu')" class="col-auto col-sm">

            <!-- Heading -->
            <h6 class="heading-xxs mb-4 text-white">
              <a :href="menuLink.url" :target="menuLink.target || 'self'" class="text-light">{{ menuLink.text }}</a>
            </h6>

            <!-- Links -->
            <ul v-if="menuLink.children" class="list-unstyled mb-0">
              <li v-for="childLink in menuLink.children">
                <a class="text-gray-300" :href="childLink.url" :target="childLink.target || 'self'">{{ childLink.text }}</a>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
    <div class="py-6">
      <div class="container">
        <div class="row">
          <div class="col">

            <!-- Copyright -->
            <p class="mb-3 mb-md-0 font-size-xxs text-muted">
              {{ $themeConfig.getConfigValue('footer-copyright-text') }}
            </p>

          </div>
          <div class="col-auto">

            <!-- Payment methods -->
            <img class="footer-payment" src="@/assets/img/payment/mastercard.svg" alt="...">
            <img class="footer-payment" src="@/assets/img/payment/visa.svg" alt="...">
            <img class="footer-payment" src="@/assets/img/payment/amex.svg" alt="...">
            <img class="footer-payment" src="@/assets/img/payment/paypal.svg" alt="...">
            <img class="footer-payment" src="@/assets/img/payment/maestro.svg" alt="...">
            <img class="footer-payment" src="@/assets/img/payment/klarna.svg" alt="...">

          </div>
        </div>
      </div>
    </div>
  </footer>
</template>