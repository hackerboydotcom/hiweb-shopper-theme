<template>
  <div class="recommended-products">
    <section class="pt-11">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Heading -->
            <h4 class="mb-10 text-center">
              {{component.getConfigValue('recommended-products__heading')}}
            </h4>

            <!-- Items -->
            <div v-if="component.getConfigValue('recommended-products__products')" class="row">

              <div v-for="product in component.getConfigValue('recommended-products__products')" class="col-6 col-sm-6 col-md-4 col-lg-3">

                <!-- Card -->
                <div class="card mb-7">

                  <!-- Badge -->
                  <div class="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                  </div>

                  <!-- Image -->
                  <div class="card-img">

                    <!-- Image -->
                    <a class="card-img-hover" href="product.html">
                      <img class="card-img-top card-img-back" :src="$image.url(product.image)" alt="...">
                      <img class="card-img-top card-img-front" :src="$image.url(product.image)" alt="...">
                    </a>

                    <!-- Actions -->
                    <div class="card-actions">
                      <span class="card-action">
                        <button class="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                          <i class="fe fe-eye"></i>
                        </button>
                      </span>
                      <span class="card-action">
                        <button class="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                          <i class="fe fe-shopping-cart"></i>
                        </button>
                      </span>
                      <span class="card-action">
                        <button class="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                          <i class="fe fe-heart"></i>
                        </button>
                      </span>
                    </div>

                  </div>

                  <!-- Body -->
                  <div class="card-body px-0">

                    <!-- Category -->
                    <div class="font-size-xs" v-if="product.collection">
                      <router-link class="text-muted" :to="$linkTo('collection', product.collection)">
                        {{ product.collection.title }}
                      </router-link>
                    </div>

                    <!-- Title -->
                    <div class="font-weight-bold">
                      <router-link class="text-body" :to="$linkTo('product', product)">
                        {{product.title}}
                      </router-link>
                    </div>

                    <!-- Price -->
                    <div class="font-weight-bold text-muted">
                      ${{product.price}}
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {

  props: ['component'],

  created() {
    
  },
}
</script>
