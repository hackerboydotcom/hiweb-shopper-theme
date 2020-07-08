<template>
  <div class="collections container mt-6">
    
    <!-- Loading -->
    <loader v-if="isLoadingCollections" />

    <!-- Errors -->
    <error-hero :errors="collectionErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- Collections -->
    <template v-if="collectionsDocument">
      
      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">Product collections</span>
        </li>
      </ol>

      <h1 class="text-center mt-6">{{ $themeConfig.getConfigValue('collections-heading-text') }}</h1>
      <p class="text-muted text-center">{{ $themeConfig.getConfigValue('collections-description') }}</p>

      <div class="row">
        <div v-for="collection in collectionsDocument.getData()" class="col-lg-4 col-6">
          <div class="card">
            <div class="card-img">
              <router-link :to="$linkTo('collection', collection)">
                <img :src="$image.url(collection.getRelationshipData('image'))" />
              </router-link>
            </div>
            <div class="card-body text-center">
              <router-link :to="$linkTo('collection', collection)">
                <strong>{{ collection.getAttribute('title') }}</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </template>
  </div>
</template>

<script type="text/javascript">
export default {

  created() {
    this.useCollectionsMixin(true);
  }
}
</script>