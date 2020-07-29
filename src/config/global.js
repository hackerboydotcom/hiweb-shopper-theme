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