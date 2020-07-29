import themeConfig from 'hiweb-theme-sdk/config';

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