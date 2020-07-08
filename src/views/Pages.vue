<template>
  <div class="pages container mt-6">

    <!-- Errors -->
    <error-hero v-if="!pages.length" :errors="pagesErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Pages -->
    <template v-if="pages && pages.length">

      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400 mb-6">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">Pages</span>
        </li>
      </ol>
      
      <div v-for="page, index in pages" class="row">
        <div class="col-auto">
          <img :src="$image.url(page.getRelationshipData('image'))" style="max-width: 150px; border-radius: 8px; overflow: hidden;" />
        </div>
        <div class="col">
          <router-link :to="$linkTo('page', page)"><h3>{{ page.getAttribute('title') }}</h3></router-link>
          <p class="text-muted">{{ page.getAttribute('description') }}</p>
        </div>
        <div v-if="index < pages.length -1" class="col-12"><hr /></div>
      </div>

      <!-- Pagination -->
      <pagination :callback="paginator" />

    </template>

    <!-- Loading -->
    <loader v-if="isLoadingPages" />

  </div>
</template>

<script type="text/javascript">
export default {

  data() {
    return {
      pages: []
    };
  },

  created() {

    // Active mixin
    this.usePagesMixin(true);
  },

  methods: {

    paginator() {

      // Ignore if nothing loaded
      if (!this.pagesDocument) {
        return;
      }

      // Ignore if is loading
      if (this.isLoadingPages) {
        return;
      }

      // Ignore if ended
      if (this.pagesDocument && this.pagesDocument.getMeta() && this.pagesDocument.getMeta().count < this.limit) {
        return;
      }

      // +1 to page
      let query = JSON.parse(JSON.stringify(this.$route.query));
      query.page = parseInt(this.page) + 1;
      this.$router.replace({
        query
      });
    }
  },

  watch: {

    pagesDocument: function(pagesDocument) {

      if (!pagesDocument || !pagesDocument.getData()) {
        return;
      }

      pagesDocument.getData().forEach(page => {        
        if (this.pages.indexOf(page) === -1) {
          this.pages.push(page);
        }
      });
    }
  }
}
</script>