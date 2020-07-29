import themeConfig from 'hiweb-theme-sdk/config';

themeConfig.section('Home page', 'home', section => {

  // Register a block
  section.block('home', 'Home block', block => {

    // Register a component
    block.register('hero-image', 'Hero image', component => {

      // Heading text
      component.config('hero-image__heading').setLabel('Heading text').setDriver('text-input').default('Welcome to our store!');

      // Sub-title text
      component.config('hero-image__subtitle').setLabel('Subtitle text').setDriver('text-input').default('*Starts from $29.99');

      // Button text
      component.config('hero-image__button-text').setLabel('Button text').setDriver('text-input').default('Shop now');

      // Button link
      component.config('hero-image__button-link').setLabel('Button link').setDriver('text-input').default('/collections');

    });

    // Register featured product block
    block.register('featured-products', 'Featured products', component => {});

    // Set default data
    block.setDefaultData([
      {
        component: 'hero-image'
      },
      {
        component: 'featured-products'
      }
    ]);

  });

});