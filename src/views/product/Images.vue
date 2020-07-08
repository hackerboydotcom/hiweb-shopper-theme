<template>
  <div class="product__images">

    <!-- Slider -->
    <div class="product__images__carousel mx-n2 mb-10 mb-md-0">

      <!-- Item -->
      <div v-for="image in images" class="col-12 px-2 carousel-cell">

        <!-- Image -->
        <a :data-fancybox="'product-' + $parent.product.getId()" :href="$image.url(image)">
          <div class="embed-responsive embed-responsive-1by1 bg-cover" :style="'background-image: url(' + $image.url(image) + ');'"></div>
        </a>

      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
import Flickity from 'flickity';

export default {

  mounted() {
    let main = new Flickity(this.$el.querySelector('.product__images__carousel'));
  },

  computed: {

    images: function() {
      return this.$parent.product.getRelationshipData('images') || [];
    }
  }
}
</script>