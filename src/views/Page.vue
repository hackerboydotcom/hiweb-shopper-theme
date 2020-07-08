<template>
  <div class="page container pt-5">
    
    <!-- Loading -->
    <loader v-if="isLoadingPage" />

    <!-- Errors -->
    <error-hero :errors="pageErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Page -->
    <template v-if="pageDocument">
      
      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('pages')">Pages</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">{{ page.getAttribute('title') }}</span>
        </li>
      </ol>

      <!-- Heading -->
      <h1 class="mt-6 text-center">{{ page.getAttribute('title') }}</h1>
      <p class="text-muted text-center">{{ page.getAttribute('description') }}</p>
      <hr />

      <!-- Content -->
      <article v-html="page.getAttribute('content')"></article>

      <!-- If contact -->
      <template v-if="page.getAttribute('layout') === 'contact'">
        <hr />
        Contact form
      </template>

    </template>

  </div>
</template>

<script type="text/javascript">
export default {

  created() {

    // Active page mixin
    this.usePageMixin(true);
  },

  computed: {

    page: function() {
      return this.pageDocument.getData();
    }
  }
}
</script>