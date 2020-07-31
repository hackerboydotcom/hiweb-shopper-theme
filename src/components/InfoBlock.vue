<template>
  <section class="bg-light">
    <div class="container">
      <div class="row no-gutters justify-content-between">
        <div v-if="component.getConfigValue('info-block__layout') === 'left'" class="col-12 col-md-6 mt-12 mb-n12 bg-cover" :style="'background-image: url(' + $image.url(component.getConfigValue('info-block__image')[0]) + ');'"></div>
        <div class="col-12 col-md-5 py-12">

          <!-- Heading -->
          <h3 class="mb-7">{{ component.getConfigValue('info-block__heading') }}</h3>

          <!-- Text -->
          <p class="mb-7 text-muted">
            {{ component.getConfigValue('info-block__subtitle') }}
          </p>

          <!-- Button -->
          <a :href="component.getConfigValue('info-block__button-link')" class="btn btn-primary">
            {{ component.getConfigValue('info-block__button-text') }}
          </a>

        </div>
        <div v-if="component.getConfigValue('info-block__layout') !== 'left'" class="col-12 col-md-6 mt-12 mb-n12 bg-cover" :style="'background-image: url(' + $image.url(component.getConfigValue('info-block__image')[0]) + ');'"></div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
export default {
  props: ['component']
}
</script>

<style type="text/css" lang="scss" scoped>
section {
  margin-bottom: 100px;
}
</style>