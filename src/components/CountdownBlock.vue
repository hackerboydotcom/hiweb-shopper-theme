<template>
  <section class="countdown-block py-13 bg-cover" :style="'background: url(' + $image.url(component.getConfigValue('countdown-block__background-image')[0]) + ')'">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-12 col-md-8 col-lg-6">

            <!-- Heading -->
            <h3 class="mb-7 countdown-block__heading">
              {{ component.getConfigValue('countdown-block__heading') }}
            </h3>

            <!-- Counter -->
            <div class="d-flex mb-9" data-countdown="" data-date="Jan 5, 2021 15:37:25">
              <div class="text-center">
                <div class="font-size-h1 font-weight-bolder text-primary" data-days="">{{ days }}</div>
                <div class="heading-xxs text-muted">Days</div>
              </div>
              <div class="px-1 px-md-4">
                <div class="font-size-h2 font-weight-bolder text-primary">:</div>
              </div>
              <div class="text-center">
                <div class="font-size-h1 font-weight-bolder text-primary" data-hours="">{{ hours }}</div>
                <div class="heading-xxs text-muted">Hours</div>
              </div>
              <div class="px-1 px-md-4">
                <div class="font-size-h2 font-weight-bolder text-primary">:</div>
              </div>
              <div class="text-center">
                <div class="font-size-h1 font-weight-bolder text-primary" data-minutes="">{{ minutes }}</div>
                <div class="heading-xxs text-muted">Minutes</div>
              </div>
              <div class="px-1 px-md-4">
                <div class="font-size-h2 font-weight-bolder text-primary">:</div>
              </div>
              <div class="text-center">
                <div class="font-size-h1 font-weight-bolder text-primary" data-seconds="">{{ seconds }}</div>
                <div class="heading-xxs text-muted">Seconds</div>
              </div>
            </div>

            <!-- Button -->
            <a class="btn btn-dark" :href="component.getConfigValue('countdown-block__button-link')">
              {{ component.getConfigValue('countdown-block__button-text') }} <i class="fe fe-arrow-right ml-2"></i>
            </a>

          </div>
        </div>
      </div>
    </section>
</template>

<script type="text/javascript">
export default {
  props: ['component'],

  data() {
    return {

      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,

      countdownBlock: null,

    }
  },

  created() {

    if (this.component.getConfigValue('countdown-block__date')) {

      this.countdown();

    }

  },

  methods: {

    countdown() {

      // Set the date we're counting down to
      let date = new Date(this.component.getConfigValue('countdown-block__date')).getTime();

      // Update the count down every 1 second
      this.countdownBlock = setInterval(() => {

        // Get today's date and time
        let now = new Date().getTime();
          
        // Find the distance between now and the count down date
        let distance = date - now;

        if (distance > 0) {

          // Time calculations for days, hours, minutes and seconds
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        } else {
          // If the count down is over
          clearInterval(this.countdownBlock);
        }

      }, 1000);

    }

  },

  watch: {

    'component' : function() {

      // Clear current interval
      clearInterval(this.countdownBlock);
      // Set new interval
      this.countdown();

    }

  }
}
</script>

<style lang="scss">
.countdown-block {

  @media(min-width: 768px) {

    &__heading {
      max-width: 60%;
    }

  }

}
</style>