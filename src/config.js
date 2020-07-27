import themeConfig from 'hiweb-theme-sdk/config';

// Global config
themeConfig.section('Global', null, section => {

  // Logo text
  section.config('text-logo').setLabel('Text logo').setDriver('text-input').default('Shopper on Hiweb');

  // Top menu
  section.config('top-menu').setLabel('Top menu').setDriver('menu-selector');

  // Promotion text
  section.config('promotion-text').setLabel('Promotion text').setDriver('text-input').default(' ⚡️ 50% OFF for all products (Coupon: CHANGE-THIS-IN-THEME-SETTING) ⚡️ ');

});

// Home page config
themeConfig.section('Home page', 'home', section => {

  // Heading text
  section.config('home-heading-text').setLabel('Home heading text').setDriver('text-input').default('Hello world');

  // Test wysiwyg
  section.config('home-wysiwyg').setLabel('Test WYSIWYG').setDriver('wysiwyg-input').default('Hello world...');

  // Color
  section.config('home-color').setLabel('Test color').setDriver('color-input').default('red');

  // Register a block
  section.block('home-test', 'Test block', block => {

    // Register a component
    block.register('test', component => {

      // Set a config
      component.config('test').setLabel('Test block config').setDriver('text-input').default('Test block config value');

    });

    // Set default data
    block.setDefaultData([
      {
        component: 'test',
        config: [
          {
            handle: 'test',
            value: 'Test config value'
          }
        ]
      }
    ]);

  });

});

// Collections page config
themeConfig.section('Collections', 'collections', section => {

  // Heading text
  section.config('collections-heading-text').setLabel('Heading text').setDriver('text-input').default('Our collections');

  // Description
  section.config('collections-description').setLabel('Description').setDriver('text-input').default('...');

});

// Product page config
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

});

// Footer config
themeConfig.section('Footer', null, section => {

  // Brand text
  section.config('footer-brand-text').setLabel('Footer brand text').setDriver('text-input').default('Hiweb.');

  // Footer text
  section.config('footer-html').setLabel('Footer HTML').setDriver('textarea-input').default('Edit this text in theme settings');

  // Copyright text
  section.config('footer-copyright-text').setLabel('Footer copyright text').setDriver('text-input').default('© 2020 - Edit this text in theme settings');

  // Footer menu
  section.config('footer-menu').setLabel('Footer menu').setDriver('menu-selector').default([
    {
      text: 'Change',
      url: '/',
      children: [
        {
          text: 'This',
          url: '/',
        },
        {
          text: 'Menu',
          url: '/',
        },
        {
          text: 'In',
          url: '/'
        },
        {
          text: 'Theme settings',
          url: '/'
        }
      ]
    },
    {
      text: 'Support',
      url: '/',
      children: [
        {
          text: 'Contact us',
          url: '/'
        },
        {
          text: 'FAQs',
          url: '/'
        },
        {
          text: 'Size guide',
          url: '/'
        },
        {
          text: 'Shipping & Returns',
          url: '/'
        }
      ]
    },
    {
      text: 'Shop',
      url: '/collections',
      children: [
        {
          text: 'New Arrivals',
          url: '/'
        },
        {
          text: '50% OFF Limited Offer',
          url: '/'
        }
      ]
    }
  ]);

});

// Publish config data
themeConfig.publish();

// Log data
console.log(themeConfig.toJson());