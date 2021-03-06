# molecule_api_documentation

MoleculeApiDocumentation - JavaScript client for molecule_api_documentation
The Hydrogen Molecule API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.3.0
- Package version: 1.3.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.hydrogenplatform.com/contact](https://www.hydrogenplatform.com/contact)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install molecule_api_documentation --save
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

Finally, switch to the directory you want to use your molecule_api_documentation from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('molecule_api_documentation')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/molecule_api_documentation
then install it via:

```shell
    npm install YOUR_USERNAME/molecule_api_documentation --save
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

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HydrogenMoleculeApi = require('hydrogen_molecule_api');

var defaultClient = HydrogenMoleculeApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];

// Create an instance of the Auth API class
var api = new HydrogenMoleculeApi.AuthApi();

// Callback function definition
var tokenGenerationCallback = function (error, data, response) {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log(response.request.method + ' : ' + response.request.url + '\n' + 'Output: ' + JSON.stringify(data, null, '\t') + '\n');
        oauth2.accessToken = data.access_token;
        createCurrency();
    }
};
//          Use one of the below method to generate oauth token        
// Token Generation for grant_type = client_credentials
api.createUsingPostClientCredentials({
    'grant_type': 'client_credentials',
    'client_id': 'MYCLIENTID',
    'client_secret': 'MYCLIENTSECRET'
}, tokenGenerationCallback);

// Token Generation for grant_type = password
api.createUsingPostPassword({
    'grant_type': 'password',
    'username' : 'MYUSERNAME',
    'password' : 'MYPASSWORD',
    'client_id': 'MYCLIENTID',
    'client_secret': 'MYCLIENTSECRET'
}, tokenGenerationCallback);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
const createCurrency = () => {
    var api = new HydrogenMoleculeApi.CurrencyApi()
    var currencyParams = new HydrogenMoleculeApi.CurrencyParams();
    // {CurrencyParams} It enables a user to create a Currency
    api.createCurrencyUsingPost(currencyParams, callback);
}
```

## Documentation for API Endpoints

All URIs are relative to *https://sandbox.hydrogenplatform.com/molecule/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MoleculeApiDocumentation.CurrencyApi* | [**createCurrencyUsingPost**](docs/CurrencyApi.md#createCurrencyUsingPost) | **POST** /currency | Creates a new Currency
*MoleculeApiDocumentation.CurrencyApi* | [**getCurrencyAllUsingGet**](docs/CurrencyApi.md#getCurrencyAllUsingGet) | **GET** /currency | Fetch Currency list
*MoleculeApiDocumentation.CurrencyApi* | [**getCurrencyUsingGet**](docs/CurrencyApi.md#getCurrencyUsingGet) | **GET** /currency/{currency_id} | Fetch Currency details
*MoleculeApiDocumentation.CurrencyApi* | [**updateCurrencyUsingPut**](docs/CurrencyApi.md#updateCurrencyUsingPut) | **PUT** /currency/{currency_id} | Update Currency details
*MoleculeApiDocumentation.CurrencyBalanceApi* | [**getCurrencyBalanceAllUsingGet**](docs/CurrencyBalanceApi.md#getCurrencyBalanceAllUsingGet) | **GET** /currency_balance | Fetch Currency Balance list
*MoleculeApiDocumentation.CurrencyBalanceApi* | [**getCurrencyBalanceUsingGet**](docs/CurrencyBalanceApi.md#getCurrencyBalanceUsingGet) | **GET** /currency_balance/{currency_balance_id} | Fetch Currency Balance details
*MoleculeApiDocumentation.CurrencyBalanceApi* | [**updateCurrencyBalanceUsingPost**](docs/CurrencyBalanceApi.md#updateCurrencyBalanceUsingPost) | **POST** /currency_balance/update | Update(Fetch) latest Currency Balance
*MoleculeApiDocumentation.CurrencyTransferApi* | [**createCurrencyTransferUsingPost**](docs/CurrencyTransferApi.md#createCurrencyTransferUsingPost) | **POST** /currency_transfer | Creates Currency Transfer record
*MoleculeApiDocumentation.CurrencyTransferApi* | [**getCurrencyTransferAllUsingGet**](docs/CurrencyTransferApi.md#getCurrencyTransferAllUsingGet) | **GET** /currency_transfer | Fetch Currency Transfer record list
*MoleculeApiDocumentation.CurrencyTransferApi* | [**getCurrencyTransferUsingGet**](docs/CurrencyTransferApi.md#getCurrencyTransferUsingGet) | **GET** /currency_transfer/{currency_transfer_id} | Fetch Currency Transfer record details
*MoleculeApiDocumentation.DocumentApi* | [**createDocumentUsingPost**](docs/DocumentApi.md#createDocumentUsingPost) | **POST** /document | Create a new Document
*MoleculeApiDocumentation.DocumentApi* | [**getDocumentUsingGet**](docs/DocumentApi.md#getDocumentUsingGet) | **GET** /document/{document_id} | Retrieve a Document
*MoleculeApiDocumentation.DocumentApi* | [**verifyDocumentUsingPost**](docs/DocumentApi.md#verifyDocumentUsingPost) | **POST** /document/verify | Verify a Document
*MoleculeApiDocumentation.EscrowApi* | [**createEscrowUsingPost**](docs/EscrowApi.md#createEscrowUsingPost) | **POST** /escrow | Create a new Escrow
*MoleculeApiDocumentation.EscrowApi* | [**getEscrowAllUsingGet**](docs/EscrowApi.md#getEscrowAllUsingGet) | **GET** /escrow | List all Escrow
*MoleculeApiDocumentation.EscrowApi* | [**getEscrowUsingGet**](docs/EscrowApi.md#getEscrowUsingGet) | **GET** /escrow/{escrow_id} | Fetch Escrow
*MoleculeApiDocumentation.EscrowTransactionApi* | [**createEscrowTransactionUsingPost**](docs/EscrowTransactionApi.md#createEscrowTransactionUsingPost) | **POST** /escrow_transaction | Create a new Escrow Transaction
*MoleculeApiDocumentation.EscrowTransactionApi* | [**getEscrowTransactionAllUsingGet**](docs/EscrowTransactionApi.md#getEscrowTransactionAllUsingGet) | **GET** /escrow_transaction | List all Escrow Transaction
*MoleculeApiDocumentation.EscrowTransactionApi* | [**getEscrowTransactionUsingGet**](docs/EscrowTransactionApi.md#getEscrowTransactionUsingGet) | **GET** /escrow_transaction/{escrow_transaction_id} | Fetch Escrow Transaction
*MoleculeApiDocumentation.EscrowTransactionApi* | [**updateEscrowTransactionUsingPut**](docs/EscrowTransactionApi.md#updateEscrowTransactionUsingPut) | **PUT** /escrow_transaction/{escrow_transaction_id} | Update Escrow Transaction
*MoleculeApiDocumentation.TokenApi* | [**burnTokenUsingPost**](docs/TokenApi.md#burnTokenUsingPost) | **POST** /token/burn | Burn tokens
*MoleculeApiDocumentation.TokenApi* | [**createTokenUsingPost**](docs/TokenApi.md#createTokenUsingPost) | **POST** /token | Creates a new Token
*MoleculeApiDocumentation.TokenApi* | [**deleteTokenUsingDelete**](docs/TokenApi.md#deleteTokenUsingDelete) | **DELETE** /token/{token_id} | Delete Token
*MoleculeApiDocumentation.TokenApi* | [**deployTokenUsingPost**](docs/TokenApi.md#deployTokenUsingPost) | **POST** /token/deploy | Deploys provided Token to network
*MoleculeApiDocumentation.TokenApi* | [**getTokenAllUsingGet**](docs/TokenApi.md#getTokenAllUsingGet) | **GET** /token | Fetch Token list
*MoleculeApiDocumentation.TokenApi* | [**getTokenUsingGet**](docs/TokenApi.md#getTokenUsingGet) | **GET** /token/{token_id} | Fetch Token details
*MoleculeApiDocumentation.TokenApi* | [**mintTokenUsingPost**](docs/TokenApi.md#mintTokenUsingPost) | **POST** /token/mint | Mint new tokens
*MoleculeApiDocumentation.TokenApi* | [**updateTokenUsingPut**](docs/TokenApi.md#updateTokenUsingPut) | **PUT** /token/{token_id} | Update Token details
*MoleculeApiDocumentation.TokenApi* | [**whitelistTokenUsingPost**](docs/TokenApi.md#whitelistTokenUsingPost) | **POST** /token/whitelist | Whitelist token for provided wallet
*MoleculeApiDocumentation.TokenBalanceApi* | [**getTokenBalanceAllUsingGet**](docs/TokenBalanceApi.md#getTokenBalanceAllUsingGet) | **GET** /token_balance | Fetch Token Balance list
*MoleculeApiDocumentation.TokenBalanceApi* | [**getTokenBalanceUsingGet**](docs/TokenBalanceApi.md#getTokenBalanceUsingGet) | **GET** /token_balance/{token_balance_id} | Fetch Token Balance details
*MoleculeApiDocumentation.TokenCrowdsaleApi* | [**deployCrowdsaleUsingPost**](docs/TokenCrowdsaleApi.md#deployCrowdsaleUsingPost) | **POST** /crowdsale/deploy | Deploy token for Crowdsale
*MoleculeApiDocumentation.TokenCrowdsaleApi* | [**fundCrowdsaleUsingPost**](docs/TokenCrowdsaleApi.md#fundCrowdsaleUsingPost) | **POST** /crowdsale/fund | Fund/add Tokens supply to Crowdsale
*MoleculeApiDocumentation.TokenCrowdsaleApi* | [**purchaseCrowdsaleUsingPost**](docs/TokenCrowdsaleApi.md#purchaseCrowdsaleUsingPost) | **POST** /crowdsale/purchase | Purchase Tokens from Crowdsale
*MoleculeApiDocumentation.TokenSupplyApi* | [**getTokenSupplyAllUsingGet**](docs/TokenSupplyApi.md#getTokenSupplyAllUsingGet) | **GET** /token_supply | Fetch Token Supply record list
*MoleculeApiDocumentation.TokenSupplyApi* | [**getTokenSupplyUsingGet**](docs/TokenSupplyApi.md#getTokenSupplyUsingGet) | **GET** /token_supply/{token_supply_id} | Fetch Token Supply details
*MoleculeApiDocumentation.TokenTransferApi* | [**createTokenTransferUsingPost**](docs/TokenTransferApi.md#createTokenTransferUsingPost) | **POST** /token_transfer | Creates Token Transfer record
*MoleculeApiDocumentation.TokenTransferApi* | [**getTokenTransferAllUsingGet**](docs/TokenTransferApi.md#getTokenTransferAllUsingGet) | **GET** /token_transfer | Fetch Token Transfer record list
*MoleculeApiDocumentation.TokenTransferApi* | [**getTokenTransferUsingGet**](docs/TokenTransferApi.md#getTokenTransferUsingGet) | **GET** /token_transfer/{token_transfer_id} | Fetch Token Transfer record details
*MoleculeApiDocumentation.TransactionStatusApi* | [**getTransactionStatusAllUsingGet**](docs/TransactionStatusApi.md#getTransactionStatusAllUsingGet) | **GET** /transaction_status | Fetch Transaction Status list
*MoleculeApiDocumentation.TransactionStatusApi* | [**getTransactionStatusUsingGet**](docs/TransactionStatusApi.md#getTransactionStatusUsingGet) | **GET** /transaction_status/{transaction_id} | Fetch Transaction record details
*MoleculeApiDocumentation.WalletApi* | [**createWalletUsingPost**](docs/WalletApi.md#createWalletUsingPost) | **POST** /wallet | Creates a new Wallet
*MoleculeApiDocumentation.WalletApi* | [**getWalletAllUsingGet**](docs/WalletApi.md#getWalletAllUsingGet) | **GET** /wallet | Fetch Wallet list
*MoleculeApiDocumentation.WalletApi* | [**getWalletByWalletKeyUsingGet**](docs/WalletApi.md#getWalletByWalletKeyUsingGet) | **GET** /wallet/wallet_key/{wallet_key_id} | Fetch Wallet details by Wallet Key ID
*MoleculeApiDocumentation.WalletApi* | [**getWalletUsingGet**](docs/WalletApi.md#getWalletUsingGet) | **GET** /wallet/{wallet_id} | Fetch Wallet details
*MoleculeApiDocumentation.WalletApi* | [**updateWalletUsingPut**](docs/WalletApi.md#updateWalletUsingPut) | **PUT** /wallet/{wallet_id} | Update Wallet details
*MoleculeApiDocumentation.WalletKeyApi* | [**createWalletKeyUsingPost**](docs/WalletKeyApi.md#createWalletKeyUsingPost) | **POST** /wallet_key | Creates a new Wallet Key for provided Wallet ID
*MoleculeApiDocumentation.WalletKeyApi* | [**generateWalletKeyUsingPost**](docs/WalletKeyApi.md#generateWalletKeyUsingPost) | **POST** /wallet_key/generator | Generates Wallet Key for provided Wallet ID
*MoleculeApiDocumentation.WalletKeyApi* | [**getWalletKeyAllUsingGet**](docs/WalletKeyApi.md#getWalletKeyAllUsingGet) | **GET** /wallet_key | Fetch Wallet Key list
*MoleculeApiDocumentation.WalletKeyApi* | [**getWalletKeyUsingGet**](docs/WalletKeyApi.md#getWalletKeyUsingGet) | **GET** /wallet_key/{wallet_key_id} | Fetch Wallet Key details
*MoleculeApiDocumentation.WalletPermissionApi* | [**getWalletPermissionAllUsingGet**](docs/WalletPermissionApi.md#getWalletPermissionAllUsingGet) | **GET** /wallet_permission | Fetch Wallet list with client's permissions
*MoleculeApiDocumentation.WalletPermissionApi* | [**getWalletPermissionUsingGet**](docs/WalletPermissionApi.md#getWalletPermissionUsingGet) | **GET** /wallet_permission/{wallet_id} | Fetch Wallet's client permissions details
*MoleculeApiDocumentation.WalletPermissionApi* | [**updateWalletPermissionUsingPut**](docs/WalletPermissionApi.md#updateWalletPermissionUsingPut) | **PUT** /wallet_permission/{wallet_id} | Update client's permission for provided Wallet
*MoleculeApiDocumentation.WebhookApi* | [**createWebhookUsingPost**](docs/WebhookApi.md#createWebhookUsingPost) | **POST** /webhook | Creates a new Webhook record
*MoleculeApiDocumentation.WebhookApi* | [**deleteWebhookUsingDelete**](docs/WebhookApi.md#deleteWebhookUsingDelete) | **DELETE** /webhook/{webhook_id} | Delete Webhook
*MoleculeApiDocumentation.WebhookApi* | [**getWebhookAllUsingGet**](docs/WebhookApi.md#getWebhookAllUsingGet) | **GET** /webhook | Fetch Webhook list
*MoleculeApiDocumentation.WebhookApi* | [**getWebhookUsingGet**](docs/WebhookApi.md#getWebhookUsingGet) | **GET** /webhook/{webhook_id} | Fetch Webhook details
*MoleculeApiDocumentation.WebhookApi* | [**updateWebhookUsingPut**](docs/WebhookApi.md#updateWebhookUsingPut) | **PUT** /webhook/{webhook_id} | Update Webhook details


## Documentation for Models

 - [MoleculeApiDocumentation.CrowdsaleDeployParams](docs/CrowdsaleDeployParams.md)
 - [MoleculeApiDocumentation.CrowdsaleFundParams](docs/CrowdsaleFundParams.md)
 - [MoleculeApiDocumentation.CrowdsalePurchaseParams](docs/CrowdsalePurchaseParams.md)
 - [MoleculeApiDocumentation.CurrencyBalanceResponse](docs/CurrencyBalanceResponse.md)
 - [MoleculeApiDocumentation.CurrencyBalanceUpdateParams](docs/CurrencyBalanceUpdateParams.md)
 - [MoleculeApiDocumentation.CurrencyParams](docs/CurrencyParams.md)
 - [MoleculeApiDocumentation.CurrencyResponse](docs/CurrencyResponse.md)
 - [MoleculeApiDocumentation.CurrencyTransferParams](docs/CurrencyTransferParams.md)
 - [MoleculeApiDocumentation.CurrencyTransferResponse](docs/CurrencyTransferResponse.md)
 - [MoleculeApiDocumentation.CurrencyUpdateParams](docs/CurrencyUpdateParams.md)
 - [MoleculeApiDocumentation.Document](docs/Document.md)
 - [MoleculeApiDocumentation.DocumentParams](docs/DocumentParams.md)
 - [MoleculeApiDocumentation.DocumentResponse](docs/DocumentResponse.md)
 - [MoleculeApiDocumentation.DocumentVerifyResponse](docs/DocumentVerifyResponse.md)
 - [MoleculeApiDocumentation.ErrorResponse](docs/ErrorResponse.md)
 - [MoleculeApiDocumentation.EscrowDepositParams](docs/EscrowDepositParams.md)
 - [MoleculeApiDocumentation.EscrowParams](docs/EscrowParams.md)
 - [MoleculeApiDocumentation.EscrowResponse](docs/EscrowResponse.md)
 - [MoleculeApiDocumentation.EscrowTransactionResponse](docs/EscrowTransactionResponse.md)
 - [MoleculeApiDocumentation.PageCurrencyBalanceResponse](docs/PageCurrencyBalanceResponse.md)
 - [MoleculeApiDocumentation.PageCurrencyResponse](docs/PageCurrencyResponse.md)
 - [MoleculeApiDocumentation.PageCurrencyTransferResponse](docs/PageCurrencyTransferResponse.md)
 - [MoleculeApiDocumentation.PageEscrowResponse](docs/PageEscrowResponse.md)
 - [MoleculeApiDocumentation.PageEscrowTransactionResponse](docs/PageEscrowTransactionResponse.md)
 - [MoleculeApiDocumentation.PageTokenBalanceResponse](docs/PageTokenBalanceResponse.md)
 - [MoleculeApiDocumentation.PageTokenResponse](docs/PageTokenResponse.md)
 - [MoleculeApiDocumentation.PageTokenSupplyResponse](docs/PageTokenSupplyResponse.md)
 - [MoleculeApiDocumentation.PageTokenTransferResponse](docs/PageTokenTransferResponse.md)
 - [MoleculeApiDocumentation.PageTransactionSuccessResponse](docs/PageTransactionSuccessResponse.md)
 - [MoleculeApiDocumentation.PageWalletKeyResponse](docs/PageWalletKeyResponse.md)
 - [MoleculeApiDocumentation.PageWalletPermissionResponse](docs/PageWalletPermissionResponse.md)
 - [MoleculeApiDocumentation.PageWalletResponse](docs/PageWalletResponse.md)
 - [MoleculeApiDocumentation.PageWebhookResponse](docs/PageWebhookResponse.md)
 - [MoleculeApiDocumentation.Sort](docs/Sort.md)
 - [MoleculeApiDocumentation.TokenBalanceResponse](docs/TokenBalanceResponse.md)
 - [MoleculeApiDocumentation.TokenBurnParams](docs/TokenBurnParams.md)
 - [MoleculeApiDocumentation.TokenDeployParams](docs/TokenDeployParams.md)
 - [MoleculeApiDocumentation.TokenMintParams](docs/TokenMintParams.md)
 - [MoleculeApiDocumentation.TokenParams](docs/TokenParams.md)
 - [MoleculeApiDocumentation.TokenParamsOfferingSettings](docs/TokenParamsOfferingSettings.md)
 - [MoleculeApiDocumentation.TokenResponse](docs/TokenResponse.md)
 - [MoleculeApiDocumentation.TokenResponseOfferingSettings](docs/TokenResponseOfferingSettings.md)
 - [MoleculeApiDocumentation.TokenSupplyResponse](docs/TokenSupplyResponse.md)
 - [MoleculeApiDocumentation.TokenTransferParams](docs/TokenTransferParams.md)
 - [MoleculeApiDocumentation.TokenTransferResponse](docs/TokenTransferResponse.md)
 - [MoleculeApiDocumentation.TokenUpdateParams](docs/TokenUpdateParams.md)
 - [MoleculeApiDocumentation.TokenWhitelistParams](docs/TokenWhitelistParams.md)
 - [MoleculeApiDocumentation.TokenWhitelists](docs/TokenWhitelists.md)
 - [MoleculeApiDocumentation.TransactionSuccessResponse](docs/TransactionSuccessResponse.md)
 - [MoleculeApiDocumentation.WalletClients](docs/WalletClients.md)
 - [MoleculeApiDocumentation.WalletClientsPermission](docs/WalletClientsPermission.md)
 - [MoleculeApiDocumentation.WalletKeyGenerateParams](docs/WalletKeyGenerateParams.md)
 - [MoleculeApiDocumentation.WalletKeyParams](docs/WalletKeyParams.md)
 - [MoleculeApiDocumentation.WalletKeyResponse](docs/WalletKeyResponse.md)
 - [MoleculeApiDocumentation.WalletParams](docs/WalletParams.md)
 - [MoleculeApiDocumentation.WalletPermissionResponse](docs/WalletPermissionResponse.md)
 - [MoleculeApiDocumentation.WalletPermissionUpdateParams](docs/WalletPermissionUpdateParams.md)
 - [MoleculeApiDocumentation.WalletResponse](docs/WalletResponse.md)
 - [MoleculeApiDocumentation.WebhookParams](docs/WebhookParams.md)
 - [MoleculeApiDocumentation.WebhookResponse](docs/WebhookResponse.md)


## Documentation for Authorization


### oauth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A

