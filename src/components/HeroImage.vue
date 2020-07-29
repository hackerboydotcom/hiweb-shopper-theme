<template>
  <div class="hero-image">
    <section class="py-14" style="background: url(https://i.ytimg.com/vi/LRVsxe5OJVY/maxresdefault.jpg) no-repeat center center fixed;-webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 col-lg-5 text-white">

            <!-- Heading -->
            <h1 class="display-4">
              {{ component.getConfigValue('hero-image__heading') }}
            </h1>

            <!-- Text -->
            <p class="mb-8 font-size-lg">
              *Starts from $29.99
            </p>

            <!-- Button -->
            <a href="#!" class="btn btn-primary">
              Get Sample Pack
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
