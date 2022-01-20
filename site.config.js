module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '9f1e0dfab0a74c14955a2078f2e638eb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: "314abc8e-e898-452b-9171-fe6d70d9bab1",

  // basic site info (required)
  name: 'FQ-JUN-Blog',
  domain: 'fqjun.xyz',
  author: 'feiqiujun',

  // open graph metadata (optional)
  description: 'Personal site of Feiqiujun',
  socialImageTitle: 'Feiqiujun',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: '',
  github: 'fqjun',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: "fqjun/fqjun.xyz",

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/Manifold': 'f9714b72771c4949832733ba4e18c0f2',
    '/Course': '386008a2c14d462d9ea9c317d23531af',
    '/Conversion': 'bbc7b36ea94f4cdaa6eb0a1bfcd5aab7',
    '/Knowledge-Base': 'a3f96f2aeb214d62b2df323351d66d15d23531af',
    '/Method': '0a134da6916f4e46979d2c675f9acdb9',
    '/Collection-Of-Resources': 'a05f5fa1f9fa45398e5ca6661311d273',
    '/LaTeX': '1945754d78dc40de849c8d95a8c6e64b',
    '/English': '08583c12feee46d8ab870906ce9e9a7a',
    '/ToF': '362e9f5ae89c4ffab64e6bf6fbea53b1',
    '/Camera': 'f826d34212224407ad268bdcfdd886ca',
    '/Hard-Operation-manual-of-NUC-voltage-regulation': 'd9a16f93ff06466fa9488ed82c59ef18',

  }
  // pageUrlOverrides: null
}
