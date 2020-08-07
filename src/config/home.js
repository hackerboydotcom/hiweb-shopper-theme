import themeConfig from 'hiweb-theme-sdk/config';

themeConfig.section('Home page', 'home', section => {

  // Register a block
  section.block('home', 'Home block', block => {

    // Register a component
    block.register('hero-image', 'Hero image', component => {

      // Featured image
      component.config('hero-image__image').setLabel('Featured image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'themes/default-ecommerce-theme/assets/img/covers/cover-21.jpg'
      }]);

      // Text color
      component.config('hero-image__text-color').setLabel('Text color').setDriver('color-input').default('#fff');

      // Heading text
      component.config('hero-image__heading').setLabel('Heading text').setDriver('text-input').default('Welcome to our store!');

      // Sub-title text
      component.config('hero-image__subtitle').setLabel('Subtitle text').setDriver('text-input').default('*Starts from $29.99');

      // Button text
      component.config('hero-image__button-text').setLabel('Button text').setDriver('text-input').default('Shop now');

      // Button link
      component.config('hero-image__button-link').setLabel('Button link').setDriver('text-input').default('/collections');

    });

    // Register featured product component
    block.register('featured-products', 'Featured products', component => {

      // Product collection
      component.config('featured-products__collection').setLabel('Product collection').setDriver('collection-selector').setLimit(1);

      // Small text
      component.config('featured-products__small-text').setLabel('Small heading text').setDriver('text-input').default('Our products');

      // Heading text
      component.config('featured-products__heading').setLabel('Heading text').setDriver('text-input').default('This is example of heading');

    });

    // Register info component
    block.register('info-block', 'Info with image', component => {

      // Layout
      component.config('info-block__layout').setLabel('Layout').setDriver('select-input').setOptions({
        left: 'Image on the left',
        right: 'Image on the right'
      }).default('right');

      // Featured image
      component.config('info-block__image').setLabel('Featured image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'themes/default-ecommerce-theme/assets/img/products/product-97.jpg'
      }]);

      // Heading text
      component.config('info-block__heading').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Subtitle text
      component.config('info-block__subtitle').setLabel('Subtitle text').setDriver('text-input').default('Example of subtitle text, you can change this text with theme editor...');

      // Button text
      component.config('info-block__button-text').setLabel('Button text').setDriver('text-input').default('Shop now');

      // Button link
      component.config('info-block__button-link').setLabel('Button link').setDriver('text-input').default('/collections');

    });

    // Register countdown component
    block.register('countdown-block', 'Countdown', component => {

      // Background image
      component.config('countdown-block__background-image').setLabel('Background image').setDriver('image-selector').setLimit(1).default([{
        url: 'https://hiweb-test.s3-ap-southeast-1.amazonaws.com/',
        path: 'themes/default-ecommerce-theme/assets/img/products/product-97.jpg'
      }]);

      // TItle
      component.config('countdown-block__heading').setLabel('Heading text').setDriver('text-input').default('Example of heading text!');

      // Date
      component.config('countdown-block__date').setLabel('Select date').setDriver('datetime-input');

      // Button text
      component.config('countdown-block__button-text').setLabel('Button text').setDriver('text-input').default('Shop now');

      // Button link
      component.config('countdown-block__button-link').setLabel('Button link').setDriver('text-input').default('/collections');

    });

    // Set default data
    block.setDefaultData([
      {
        component: 'hero-image'
      },
      {
        component: 'info-block'
      },
      {
        component: 'featured-products'
      },
      {
        component: 'countdown-block'
      },
    ]);

  });

});