<template>
  <div class="product__description">

    <!-- Nav -->
    <div class="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
      <span class="nav-link cursor-pointer active" data-toggle="tab" href="#productDescriptionTab">
        Description
      </span>
      <span class="nav-link cursor-pointer" data-toggle="tab" href="#productTab2">
        Size &amp; Fit
      </span>
      <span class="nav-link cursor-pointer" data-toggle="tab" href="#productTab3">
        Shipping &amp; Return
      </span>
    </div>

    <!-- Content -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="productDescriptionTab">
        <div class="row justify-content-center py-9">
          <div class="col-12 col-lg-10 col-xl-8">
            <div class="row">
              <div class="col-12">

                <!-- Text -->
                <article v-html="product.getAttribute('content')"></article>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="productTab2">
        <div class="row justify-content-center py-9">
          <div class="col-12 col-lg-10 col-xl-8">
            <div class="row">
              <div class="col-12 col-md-6">

                <!-- Text -->
                <p class="mb-4">
                  <strong>Fitting information:</strong>
                </p>

                <!-- List -->
                <ul class="mb-md-0 text-gray-500">
                  <li>
                    This is just an example content. You can change this in theme settings.
                  </li>
                  <li>
                    This is just an example content. You can change this in theme settings.
                  </li>
                  <li>
                    This is just an example content. You can change this in theme settings.
                  </li>
                </ul>

              </div>
              <div class="col-12 col-md-6">

                <!-- Text -->
                <p class="mb-4">
                  <strong>Model measurements:</strong>
                </p>

                <!-- List -->
                <ul class="list-unstyled text-gray-500">
                  <li>Height: 1.80 m</li>
                  <li>Bust/Chest: 89 cm</li>
                  <li>Hips: 91 cm</li>
                  <li>Waist: 65 cm</li>
                  <li>Model size: M</li>
                </ul>

                <!-- Size -->
                <p class="mb-0">
                  <img src="@/assets/img/icons/icon-ruler.svg" alt="..." class="img-fluid">
                  <a class="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="productTab3">
        <div class="row justify-content-center py-9">
          <div class="col-12 col-lg-10 col-xl-8">

            <!-- Table -->
            <div class="table-responsive">
              <table class="table table-bordered table-sm table-hover">
                <thead>
                  <tr>
                    <th>Shipping Options</th>
                    <th>Delivery Time</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Standard Shipping</td>
                    <td>Delivery in 5 - 7 working days</td>
                    <td>$8.00</td>
                  </tr>
                  <tr>
                    <td>Express Shipping</td>
                    <td>Delivery in 3 - 5 working days</td>
                    <td>$12.00</td>
                  </tr>
                  <tr>
                    <td>1 - 2 day Shipping</td>
                    <td>Delivery in 1 - 2 working days</td>
                    <td>$12.00</td>
                  </tr>
                  <tr>
                    <td>Free Shipping</td>
                    <td>
                      Living won't the He one every subdue meat replenish
                      face was you morning firmament darkness.
                    </td>
                    <td>$0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Caption -->
            <p class="mb-0 text-gray-500">
              This is just an example content. You can change this in theme settings.
            </p>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
export default {

  computed: {

    product: function() {
      return this.$parent.product;
    }
  }
}
</script>