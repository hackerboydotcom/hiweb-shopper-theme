<template>
  <div class="hero-image">
    <section class="py-14" :style="'background: url(' + $image.url(component.getConfigValue('hero-image__image')[0]) + ') no-repeat center center fixed; background-size: cover;'">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 col-lg-5 text-white">

            <!-- Heading -->
            <h1 class="display-4" :style="'color: ' + component.getConfigValue('hero-image__text-color')">
              {{ component.getConfigValue('hero-image__heading') }}
            </h1>

            <!-- Text -->
            <p class="mb-8 font-size-lg" :style="'color: ' + component.getConfigValue('hero-image__text-color')">
              {{ component.getConfigValue('hero-image__subtitle') }}
            </p>

            <!-- Button -->
            <a :href="component.getConfigValue('hero-image__button-link')" class="btn btn-primary">
              {{ component.getConfigValue('hero-image__button-text') }}
            </a>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {

  props: ['component']

}
</script>
