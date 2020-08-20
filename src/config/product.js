import themeConfig from 'hiweb-theme-sdk/config';

themeConfig.section('Product page', 'product', section => {

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

  // Register a block
  section.block('product-before-add-to-cart', 'Before add to cart', block => {

    // Register a component
    block.register('custom-html', 'Custom HTML', component => {

      // Html code
      component.config('custom-html__code').setLabel('HTML Code').setDriver('textarea-input');

    });

  });

});