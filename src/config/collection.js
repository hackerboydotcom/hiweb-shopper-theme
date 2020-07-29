import themeConfig from 'hiweb-theme-sdk/config';

themeConfig.section('Collections', 'collections', section => {

  // Heading text
  section.config('collections-heading-text').setLabel('Heading text').setDriver('text-input').default('Our collections');

  // Description
  section.config('collections-description').setLabel('Description').setDriver('text-input').default('...');

});