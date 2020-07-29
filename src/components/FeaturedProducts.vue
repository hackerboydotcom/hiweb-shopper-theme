<template>
  <section class="pt-12 pb-10 featured-products">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">

          <!-- Preheading -->
          <h6 class="heading-xxs mb-3 text-gray-400">
            Our products
          </h6>

          <!-- Heading -->
          <h2 class="mb-10">Get your Perfect Lenses</h2>

          <!-- Slider -->
          <div class="flickity-buttons-lg px-lg-12 mt-n3">

            <!-- Item -->
            <div v-for="i in 6" class="col-12 col-md-4 pt-3 pb-7">
              <div class="card card-lg shadow-hover">

                <!-- Circle -->
                <div class="card-circle card-circle-right">
                  <strong class="font-size-xs">save</strong>
                  <span class="h6 mb-0">30%</span>
                </div>

                <!-- Image -->
                <img src="https://i.ytimg.com/vi/LRVsxe5OJVY/maxresdefault.jpg" alt="..." class="card-img-top">

                <!-- Body -->
                <div class="card-body mt-n6 text-center">

                  <!-- Heading -->
                  <p class="mb-3 font-weight-bold">
                    Blue contact Lenses <br>
                    <span class="font-size-xs text-gray-350 text-decoration-line-through">$40.00</span> <span class="text-primary">$28.00</span>
                  </p>

                  <!-- Text -->
                  <p class="text-muted">
                    Good male give subdue set one, image that his beginning.
                  </p>

                  <!-- Button -->
                  <a href="#!" class="btn btn-sm btn-outline-primary">
                    Add to Cart
                  </a>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import Flickity from 'flickity';

export default {

  mounted() {
    
    let flky = new Flickity(this.$el.querySelector('.flickity-buttons-lg'), {
      cellAlign: 'left'
    });

  }
}
</script>

<style type="text/css" lang="scss">
.featured-products .flickity-page-dots {
  display: none;
}
</style>