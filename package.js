/* jshint ignore:start */
Package.describe({
    name: 'silentcicero:ethersim',
    version: '0.0.1',
    summary: 'A module for simulating an Ethereum RPC provider.',
    git: 'https://github.com/SilentCicero/ethersim',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.2');
    
    Npm.depends({
      'ethersim': '0.1.2',
    });

    api.export(['ethersim'], ['client']);
    api.addFiles('package-init.js', ['client', 'server']);
});
