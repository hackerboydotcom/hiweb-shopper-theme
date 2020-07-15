<template>
  <div class="posts container mt-6">

    <!-- Errors -->
    <error-hero v-if="!posts.length" :errors="postsErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Posts -->
    <template v-if="posts && posts.length">

      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-6 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">Blog</span>
        </li>
      </ol>

      <h1 class="text-center mb-6 pb-6">Our blog.</h1>
      
      <div class="row">
        <div v-for="post, index in posts" class="col-12 col-md-6">

          <!-- Card -->
          <div class="card mb-7">

            <!-- Badge -->
            <div class="badge badge-white card-badge">
              <time class="text-uppercase">{{ $time.moment(post.getAttribute('updated_at')).format('MMM d') }}</time>
            </div>

            <!-- Image -->
            <img class="card-img-top" :src="$image.url(post.getRelationshipData('image'))" alt="...">

            <!-- Body -->
            <div class="card-body px-0">

              <!-- Heading -->
              <h5>{{ post.getAttribute('title') }}</h5>

              <!-- Text -->
              <p class="mb-0 text-gray-500">
                {{ post.getAttribute('description') }}
              </p>

              <!-- Button -->
              <router-link class="btn btn-link stretched-link px-0 text-reset" :to="$linkTo('post', post)">
                Read More <i class="fe fe-arrow-right ml-2"></i>
              </router-link>

            </div>

          </div>

        </div>
      </div>

      <!-- Pagination -->
      <pagination :callback="paginator" />

    </template>

    <!-- Loading -->
    <loader v-if="isLoadingPosts" />

  </div>
</template>

<script type="text/javascript">
export default {

  data() {
    return {
      posts: []
    };
  },

  created() {

    // Active mixin
    this.usePostsMixin(true);
  },

  methods: {

    paginator() {

      // Ignore if nothing loaded
      if (!this.postsDocument) {
        return;
      }

      // Ignore if is loading
      if (this.isLoadingPosts) {
        return;
      }

      // Ignore if ended
      if (this.postsDocument && this.postsDocument.getMeta() && this.postsDocument.getMeta().count < this.limit) {
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

    postsDocument: function(postsDocument) {

      if (!postsDocument || !postsDocument.getData()) {
        return;
      }

      postsDocument.getData().forEach(post => {        
        if (this.posts.indexOf(post) === -1) {
          this.posts.push(post);
        }
      });
    }
  }
}
</script>