module.exports = {
  source: ['tokens/**/*.json'],
  "log": {
    "verbosity": "default"
  },
  "preprocessors": [
    "tokens-studio"
  ],
  "platforms": {
    "css": {
      "transforms": [
        "name/kebab"
      ],
      "buildPath": "build/css/",
      "files": [
        {
          "destination": "_variables.css",
          "format": "css/variables"
        }
      ]
    },
  }
};