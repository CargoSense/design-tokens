module.exports = {
  source: ['tokens/**/*.json'], // Includes all .json files inside /tokens/ and its subdirectories
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    }
  }
};