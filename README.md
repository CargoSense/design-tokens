# design-tokens

This repo contains variables.css, exported through the (CSS Variables Generator)[https://www.figma.com/community/plugin/1271829798610738782/css-variables-generator] plugin for Figma.

A few notes:
- It does not contain the Figma collection or mode as part of the naming convention. This means variables of the same name in different collections could cause conflicts. To avoid issues, please give each variable a unique name. (Note: if a given collection has more than one mode, the mode name is included as a suffix in the following format `--{name}-{mode}`.)
- This is not a true design token, as it lacks the JSON format. It is not as easily transformed into JS or other formats, and skips the use of Style Dictionary entirely.
- There is no way to import these variables 