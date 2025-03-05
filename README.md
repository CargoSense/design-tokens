# design-tokens

this repo contains tokens.json exported from [Tokens Studio](https://tokens.studio/). the tokens.json file is automatically pushed and pulled through the Tokens Studio plugin ([docs here](https://docs.tokens.studio/token-storage-and-sync/sync-provider-github)).

this branch (`3-5-25-backup`) contains a fully automated solution using Style Dictionary. Whenever a tokens file is uplaoded through Tokens Studio to the `/tokens/` directory (supporting themes by default), it will run Style Dictionary and transform those tokens into CSS variables.

Inconsisent and frustrating workflows within Figma (specifically translating Figma Variables into Tokens Studio variables) have caused me to pause this solution for a more direct approach for now.
