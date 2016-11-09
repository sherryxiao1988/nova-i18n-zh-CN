Package.describe({
  name: 'sherryxiao1988:nova-i18n-zh-cn',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Telescope i18n package (zh-CN)",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sherryxiao1988/nova-i18n-zh-CN',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");
  api.use([
    'nova:core'
  ]);

  api.addFiles([
    'lib/zh_CN.js'
  ], ["client", "server"]);
});
