module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './'  // Point to the root directory, so @/components resolves correctly
          }
        }
      ]
    ]
  };
};
