<template>
  <div class="post container pt-5">
    
    <!-- Loading -->
    <loader v-if="isLoadingPost" />

    <!-- Errors -->
    <error-hero :errors="postErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Post -->
    <template v-if="postDocument">
      
      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('posts')">Posts</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">{{ post.getAttribute('title') }}</span>
        </li>
      </ol>

      <!-- Heading -->
      <h1 class="mt-6 text-center">{{ post.getAttribute('title') }}</h1>
      <p class="text-muted text-center">{{ post.getAttribute('description') }}</p>
      <hr />

      <!-- Content -->
      <article v-html="post.getAttribute('content')"></article>

    </template>

  </div>
</template>

<script type="text/javascript">
export default {

  created() {

    // Active post mixin
    this.usePostMixin(true);
  },

  computed: {

    post: function() {
      return this.postDocument.getData();
    }
  }
}
</script>