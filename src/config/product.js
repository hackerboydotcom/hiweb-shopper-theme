import themeConfig from 'hiweb-theme-sdk/config';

themeConfig.section('Product page', 'product', section => {

  // Register block
  section.block('product', 'Product block', block => {

    // Register a component
    block.register('recommended-products', 'Recommended Products ', component => {

      // Heading text
      component.config('recommended-products__heading').setLabel('Heading text').setDriver('text-input').default('You might also like');

      // Recommended products
      component.config('recommended-products__products').setLabel('Recommended').setDriver('recommended-products-selector').default([

      ]);

    });

  });

  // Layout
  section.config('product-layout').setLabel('Layout').setDriver('select-input').setOptions({
    layout1: 'Layout 1',
    layout2: 'Layout 2'
  }).default('layout1');

  // Option mode
  section.config('product-option-mode').setLabel('Option mode').setDriver('select-input').setOptions({
    select: 'Select dropdown',
    flat: 'Flat buttons'
  }).default('flat');

  // Add to cart action
  section.config('add-to-cart-action').setLabel('Add to cart action').setDriver('select-input').setOptions({
    modal: 'Show cart popup modal',
    cart: 'Redirect to cart page',
    checkout: 'Redirect to checkout page'
  }).default('modal');

});