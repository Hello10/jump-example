# Jump Example app

## Running the apps locally
1. Install Node 10.16.0 through [NVM](https://github.com/nvm-sh/nvm)

2. Install [Homebrew](https://brew.sh/)
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
3. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/)
```
brew install yarn
```
4. Install dependencies
```
yarn bootstrap
```
5. Add Environment files in /env
6. Start Functions
```
cd ./packages/function
LOGGER="jump*|debug" yarn start
```
7. Setup www/.env* files
```
.env
.env.local
```
8. Start www
```
cd ./packages/www
yarn start
```

## Deployment
### Deploy `functions` and `www`
```
yarn deploy
```

### Deploy only `functions`
```
yarn deploy:functions
```

### Deploy only `www`
```
yarn deploy:www
```
