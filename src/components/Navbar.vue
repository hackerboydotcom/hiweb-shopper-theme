<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container">

      <!-- Brand -->
      <router-link class="navbar-brand" :to="$linkTo('home')">
        {{ $themeConfig.getConfigValue('text-logo') }}
      </router-link>

      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="navbarCollapse">

        <!-- Nav -->
        <ul class="navbar-nav mx-auto">
          
          <li v-for="menuLink in $themeConfig.getConfigValue('top-menu')" class="nav-item dropdown">

            <!-- Toggle -->
            <a class="nav-link" data-toggle="dropdown" :href="menuLink.url">{{ menuLink.text }}</a>

            <!-- Menu -->
            <div v-if="menuLink.children" class="dropdown-menu">
              <div class="card card-lg">
                <div class="card-body">
                  <ul class="list-styled font-size-sm">
                    <li v-for="childLink in menuLink.children" class="list-styled-item">
                      <a class="list-styled-link" :href="childLink.url">{{ childLink.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </li>
        </ul>

        <!-- Nav -->
        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <a class="nav-link" data-toggle="modal" href="#modalSearch">
              <i class="fe fe-search"></i>
            </a>
          </li>
          <li class="nav-item ml-lg-n4">
            <span class="nav-link cursor-pointer" data-toggle="modal" href="#modalShoppingCart">
              <span :data-cart-items="cart.getAttribute('item_count') || 0">
                <i class="fe fe-shopping-cart"></i>
              </span>
            </span>
          </li>
        </ul>

      </div>

    </div>
  </nav>
</template>

<script type="text/javascript">
export default {
}
</script>

<style type="text/css" lang="scss">
</style>