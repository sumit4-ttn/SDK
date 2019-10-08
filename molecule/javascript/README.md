# hydrogen-molecule-api

molecule_api - JavaScript client for hydrogen-molecule-api

The Hydrogen Molecule API

Full documentation: [Nucleus](https://www.hydrogenplatform.com/docs/nucleus/v1/) | [Electron](https://www.hydrogenplatform.com/docs/electron/v1/) | [Proton](https://www.hydrogenplatform.com/docs/proton/v1/)

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
- For more information, please visit [https://www.hydrogenplatform.com/contact](https://www.hydrogenplatform.com/contact)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install hydrogen-molecule-api --save
```

Optionally, install `client-oauth2` for easier authentication (see Method 1 in Getting Started):

```shell
npm install --save client-oauth2
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your hydrogen-molecule-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('hydrogen-molecule-api')` in javascript files from the directory you ran the last
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Full usage documentation is available: [Nucleus](https://www.hydrogenplatform.com/docs/nucleus/v1/) | [Electron](https://www.hydrogenplatform.com/docs/electron/v1/) | [Proton](https://www.hydrogenplatform.com/docs/proton/v1/)

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
var molecule_api = require('hydrogen-molecule-api');

var defaultClient = molecule_api.ApiClient.instance;

// (Optional) Set the Molecule environment you wish to use (defaults to sandbox)
// This changes the URL for requests to [environment].hydrogenplatform.com
defaultClient.basePath = "https://sandbox.hydrogenplatform.com";


// Configure OAuth2 access token for authorization: oauth
// Ensure the token is from the same environment as the defaultClient.basePath above
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = "YOUR ACCESS TOKEN";

var api = new molecule_api.MoleculeApi();

var tokenId = "tokenId_example"; // {String} UUID of a token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteToken(tokenId, callback);

```

## Documentation for API Endpoints

Full usage documentation is available: [Nucleus](https://www.hydrogenplatform.com/docs/nucleus/v1/) | [Electron](https://www.hydrogenplatform.com/docs/electron/v1/) | [Proton](https://www.hydrogenplatform.com/docs/proton/v1/)

All URIs are relative to *https://api.hydrogenplatform.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*molecule_api.MoleculeApi* | [**deleteToken**](docs/MoleculeApi.md#deleteToken) | **DELETE** /molecule/v1/token/{token_id}/ | Delete a token
*molecule_api.MoleculeApi* | [**getCurrencyBalance**](docs/MoleculeApi.md#getCurrencyBalance) | **GET** /molecule/v1/currency_balance/{currency_balance_id} | Retrieve a currency balance
*molecule_api.MoleculeApi* | [**getCurrencyBalances**](docs/MoleculeApi.md#getCurrencyBalances) | **GET** /molecule/v1/currency_balance | Get information for all currency balances defined for your application.
*molecule_api.MoleculeApi* | [**getToken**](docs/MoleculeApi.md#getToken) | **GET** /molecule/v1/token/{token_id}/ | Retrieve a token
*molecule_api.MoleculeApi* | [**getTokenBalance**](docs/MoleculeApi.md#getTokenBalance) | **GET** /molecule/v1/token_balance/{token_balance_id} | Retrieve a token balance
*molecule_api.MoleculeApi* | [**getTokenBalances**](docs/MoleculeApi.md#getTokenBalances) | **GET** /molecule/v1/token_balance | Get information for all token balances defined for your application.
*molecule_api.MoleculeApi* | [**getTokenSupplies**](docs/MoleculeApi.md#getTokenSupplies) | **GET** /molecule/v1/token_supply | Get information for all token supplies defined for your application.
*molecule_api.MoleculeApi* | [**getTokenSupply**](docs/MoleculeApi.md#getTokenSupply) | **GET** /molecule/v1/token_supply/{token_supply_id} | Retrieve a token supply
*molecule_api.MoleculeApi* | [**getTokens**](docs/MoleculeApi.md#getTokens) | **GET** /molecule/v1/token | Get information for all tokens defined for your firm
*molecule_api.MoleculeApi* | [**getWallet**](docs/MoleculeApi.md#getWallet) | **GET** /molecule/v1/wallet/{wallet_id}/ | Retrieve a wallet
*molecule_api.MoleculeApi* | [**getWalletKey**](docs/MoleculeApi.md#getWalletKey) | **GET** /molecule/v1/wallet_key/{wallet_key_id}/ | Retrieve a wallet key
*molecule_api.MoleculeApi* | [**getWalletKeys**](docs/MoleculeApi.md#getWalletKeys) | **GET** /molecule/v1/wallet_key | Get all wallet keys associated with wallets defined for your firm.
*molecule_api.MoleculeApi* | [**getWallets**](docs/MoleculeApi.md#getWallets) | **GET** /molecule/v1/wallet | Get information for all wallets defined for your firm
*molecule_api.MoleculeApi* | [**postToken**](docs/MoleculeApi.md#postToken) | **POST** /molecule/v1/token | Create a token under your firm.
*molecule_api.MoleculeApi* | [**postTokenCrowdsale**](docs/MoleculeApi.md#postTokenCrowdsale) | **POST** /molecule/v1/token/crowdsale | Transfer tokens to a token&#39;s crowdsale address.
*molecule_api.MoleculeApi* | [**postTokenDeploy**](docs/MoleculeApi.md#postTokenDeploy) | **POST** /molecule/v1/token/deploy | Deploy a secuirty token contract and its crowdsale contract to blockchain.
*molecule_api.MoleculeApi* | [**postTokenPurchase**](docs/MoleculeApi.md#postTokenPurchase) | **POST** /molecule/v1/token/purchase | Participate in a token&#39;s crowdsale and purchase tokens.
*molecule_api.MoleculeApi* | [**postTokenWhitelist**](docs/MoleculeApi.md#postTokenWhitelist) | **POST** /molecule/v1/token/whitelist | Add an investor to a token&#39;s whitelist
*molecule_api.MoleculeApi* | [**postWallet**](docs/MoleculeApi.md#postWallet) | **POST** /molecule/v1/wallet | Create a wallet under your firm.
*molecule_api.MoleculeApi* | [**postWalletKey**](docs/MoleculeApi.md#postWalletKey) | **POST** /molecule/v1/wallet_key | Associate an existing key pair with a wallet defined for your firm.
*molecule_api.MoleculeApi* | [**postWalletKeyGenerator**](docs/MoleculeApi.md#postWalletKeyGenerator) | **POST** /molecule/v1/wallet_key/generator | Generate a wallet key using the Key Service and associate with a wallet defined for your firm.
*molecule_api.MoleculeApi* | [**updateToken**](docs/MoleculeApi.md#updateToken) | **PUT** /molecule/v1/token/{token_id}/ | Update a token
*molecule_api.MoleculeApi* | [**updateWallet**](docs/MoleculeApi.md#updateWallet) | **PUT** /molecule/v1/wallet/{wallet_id}/ | Update a wallet


## Documentation for Models

 - [molecule_api.CurrencyBalanceSpecificResponse](docs/CurrencyBalanceSpecificResponse.md)
 - [molecule_api.OfferingSettingsCreatePayload](docs/OfferingSettingsCreatePayload.md)
 - [molecule_api.OfferingSettingsUpdatePayload](docs/OfferingSettingsUpdatePayload.md)
 - [molecule_api.Pagination](docs/Pagination.md)
 - [molecule_api.PaginationSort](docs/PaginationSort.md)
 - [molecule_api.SecondaryId](docs/SecondaryId.md)
 - [molecule_api.TokenBalanceSpecificResponse](docs/TokenBalanceSpecificResponse.md)
 - [molecule_api.TokenCreatePayload](docs/TokenCreatePayload.md)
 - [molecule_api.TokenCrowdsalePayload](docs/TokenCrowdsalePayload.md)
 - [molecule_api.TokenDeployPayload](docs/TokenDeployPayload.md)
 - [molecule_api.TokenPurchasePayload](docs/TokenPurchasePayload.md)
 - [molecule_api.TokenRestrictionsPayload](docs/TokenRestrictionsPayload.md)
 - [molecule_api.TokenSupplySpecificResponse](docs/TokenSupplySpecificResponse.md)
 - [molecule_api.TokenUpdatePayload](docs/TokenUpdatePayload.md)
 - [molecule_api.TokenWhitelistPayload](docs/TokenWhitelistPayload.md)
 - [molecule_api.WalletCreateClient](docs/WalletCreateClient.md)
 - [molecule_api.WalletCreatePayload](docs/WalletCreatePayload.md)
 - [molecule_api.WalletCreateWhitelist](docs/WalletCreateWhitelist.md)
 - [molecule_api.WalletKeyCreatePayload](docs/WalletKeyCreatePayload.md)
 - [molecule_api.WalletKeyCreateResponse](docs/WalletKeyCreateResponse.md)
 - [molecule_api.WalletKeyGeneratorPayload](docs/WalletKeyGeneratorPayload.md)
 - [molecule_api.WalletUpdatePayload](docs/WalletUpdatePayload.md)
 - [molecule_api.CurrencyBalanceGetResponse](docs/CurrencyBalanceGetResponse.md)
 - [molecule_api.TokenBalanceGetResponse](docs/TokenBalanceGetResponse.md)
 - [molecule_api.TokenCreateResponse](docs/TokenCreateResponse.md)
 - [molecule_api.TokenGetResponse](docs/TokenGetResponse.md)
 - [molecule_api.TokenSupplyGetResponse](docs/TokenSupplyGetResponse.md)
 - [molecule_api.WalletCreateResponse](docs/WalletCreateResponse.md)
 - [molecule_api.WalletGetResponse](docs/WalletGetResponse.md)
 - [molecule_api.WalletKeyGetResponse](docs/WalletKeyGetResponse.md)
 - [molecule_api.WalletKeySpecificResponse](docs/WalletKeySpecificResponse.md)
 - [molecule_api.TokenSpecificResponse](docs/TokenSpecificResponse.md)
 - [molecule_api.WalletSpecificResponse](docs/WalletSpecificResponse.md)


## Documentation for Authorization

Please see [this page](https://www.hydrogenplatform.com/docs/nucleus/v1/#Authentication) for additional authorization information.


### oauth

- **Type**: OAuth
- **Flow**: application
- **Token URL**: https://api.hydrogenplatform.com/authorization/v1/oauth/token?grant_type=client_credentials


## Author

[https://www.hydrogenplatform.com/](https://www.hydrogenplatform.com/)