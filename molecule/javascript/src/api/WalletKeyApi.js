/*
 * Molecule API Documentation
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/PageWalletKeyResponse', 'model/WalletKeyGenerateParams', 'model/WalletKeyParams', 'model/WalletKeyResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/PageWalletKeyResponse'), require('../model/WalletKeyGenerateParams'), require('../model/WalletKeyParams'), require('../model/WalletKeyResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.MoleculeApiDocumentation) {
      root.MoleculeApiDocumentation = {};
    }
    root.MoleculeApiDocumentation.WalletKeyApi = factory(root.MoleculeApiDocumentation.ApiClient, root.MoleculeApiDocumentation.ErrorResponse, root.MoleculeApiDocumentation.PageWalletKeyResponse, root.MoleculeApiDocumentation.WalletKeyGenerateParams, root.MoleculeApiDocumentation.WalletKeyParams, root.MoleculeApiDocumentation.WalletKeyResponse);
  }
}(this, function(ApiClient, ErrorResponse, PageWalletKeyResponse, WalletKeyGenerateParams, WalletKeyParams, WalletKeyResponse) {
  'use strict';

  /**
   * WalletKey service.
   * @module api/WalletKeyApi
   * @version 1.3.0
   */

  /**
   * Constructs a new WalletKeyApi. 
   * @alias module:api/WalletKeyApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createWalletKeyUsingPost operation.
     * @callback module:api/WalletKeyApi~createWalletKeyUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Wallet Key for provided Wallet ID
     * @param {module:model/WalletKeyParams} walletKeyParams It enables a user to create a Wallet Key record
     * @param {module:api/WalletKeyApi~createWalletKeyUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletKeyResponse}
     */
    this.createWalletKeyUsingPost = function(walletKeyParams, callback) {
      var postBody = walletKeyParams;

      // verify the required parameter 'walletKeyParams' is set
      if (walletKeyParams === undefined || walletKeyParams === null) {
        throw new Error("Missing the required parameter 'walletKeyParams' when calling createWalletKeyUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WalletKeyResponse;

      return this.apiClient.callApi(
        '/wallet_key', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateWalletKeyUsingPost operation.
     * @callback module:api/WalletKeyApi~generateWalletKeyUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates Wallet Key for provided Wallet ID
     * @param {module:model/WalletKeyGenerateParams} walletKeyGenerateParams It enables a user to generate a Wallet Key record
     * @param {module:api/WalletKeyApi~generateWalletKeyUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletKeyResponse}
     */
    this.generateWalletKeyUsingPost = function(walletKeyGenerateParams, callback) {
      var postBody = walletKeyGenerateParams;

      // verify the required parameter 'walletKeyGenerateParams' is set
      if (walletKeyGenerateParams === undefined || walletKeyGenerateParams === null) {
        throw new Error("Missing the required parameter 'walletKeyGenerateParams' when calling generateWalletKeyUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WalletKeyResponse;

      return this.apiClient.callApi(
        '/wallet_key/generator', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletKeyAllUsingGet operation.
     * @callback module:api/WalletKeyApi~getWalletKeyAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWalletKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Wallet Key list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page To filter response wallet list page number
     * @param {Number} opts.size Number of records per page
     * @param {String} opts.orderBy Field to sort record list
     * @param {Boolean} opts.ascending Sorting order
     * @param {Boolean} opts.getLatest To fetch latest (one) record
     * @param {module:api/WalletKeyApi~getWalletKeyAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageWalletKeyResponse}
     */
    this.getWalletKeyAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'order_by': opts['orderBy'],
        'ascending': opts['ascending'],
        'get_latest': opts['getLatest'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageWalletKeyResponse;

      return this.apiClient.callApi(
        '/wallet_key', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletKeyUsingGet operation.
     * @callback module:api/WalletKeyApi~getWalletKeyUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Wallet Key details
     * @param {String} walletKeyId Wallet Key ID
     * @param {module:api/WalletKeyApi~getWalletKeyUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletKeyResponse}
     */
    this.getWalletKeyUsingGet = function(walletKeyId, callback) {
      var postBody = null;

      // verify the required parameter 'walletKeyId' is set
      if (walletKeyId === undefined || walletKeyId === null) {
        throw new Error("Missing the required parameter 'walletKeyId' when calling getWalletKeyUsingGet");
      }


      var pathParams = {
        'wallet_key_id': walletKeyId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WalletKeyResponse;

      return this.apiClient.callApi(
        '/wallet_key/{wallet_key_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
