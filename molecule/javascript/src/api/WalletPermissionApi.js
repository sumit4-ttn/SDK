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
    define(['ApiClient', 'model/ErrorResponse', 'model/PageWalletPermissionResponse', 'model/WalletPermissionResponse', 'model/WalletPermissionUpdateParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/PageWalletPermissionResponse'), require('../model/WalletPermissionResponse'), require('../model/WalletPermissionUpdateParams'));
  } else {
    // Browser globals (root is window)
    if (!root.MoleculeApiDocumentation) {
      root.MoleculeApiDocumentation = {};
    }
    root.MoleculeApiDocumentation.WalletPermissionApi = factory(root.MoleculeApiDocumentation.ApiClient, root.MoleculeApiDocumentation.ErrorResponse, root.MoleculeApiDocumentation.PageWalletPermissionResponse, root.MoleculeApiDocumentation.WalletPermissionResponse, root.MoleculeApiDocumentation.WalletPermissionUpdateParams);
  }
}(this, function(ApiClient, ErrorResponse, PageWalletPermissionResponse, WalletPermissionResponse, WalletPermissionUpdateParams) {
  'use strict';

  /**
   * WalletPermission service.
   * @module api/WalletPermissionApi
   * @version 1.3.0
   */

  /**
   * Constructs a new WalletPermissionApi. 
   * @alias module:api/WalletPermissionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getWalletPermissionAllUsingGet operation.
     * @callback module:api/WalletPermissionApi~getWalletPermissionAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWalletPermissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Wallet list with client's permissions
     * @param {Object} opts Optional parameters
     * @param {String} opts.nucleusClientId To filter response wallet list by client's ID
     * @param {Boolean} opts.isActive To filter response for active wallets
     * @param {Number} opts.page To filter response wallet list page number
     * @param {Number} opts.size Number of records per page
     * @param {String} opts.orderBy Field to sort record list
     * @param {Boolean} opts.ascending Sorting order
     * @param {Boolean} opts.getLatest To fetch latest (one) record
     * @param {module:api/WalletPermissionApi~getWalletPermissionAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageWalletPermissionResponse}
     */
    this.getWalletPermissionAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'nucleus_client_id': opts['nucleusClientId'],
        'is_active': opts['isActive'],
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
      var returnType = PageWalletPermissionResponse;

      return this.apiClient.callApi(
        '/wallet_permission', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletPermissionUsingGet operation.
     * @callback module:api/WalletPermissionApi~getWalletPermissionUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletPermissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Wallet's client permissions details
     * @param {String} walletId Wallet ID
     * @param {module:api/WalletPermissionApi~getWalletPermissionUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletPermissionResponse}
     */
    this.getWalletPermissionUsingGet = function(walletId, callback) {
      var postBody = null;

      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling getWalletPermissionUsingGet");
      }


      var pathParams = {
        'wallet_id': walletId
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
      var returnType = WalletPermissionResponse;

      return this.apiClient.callApi(
        '/wallet_permission/{wallet_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWalletPermissionUsingPut operation.
     * @callback module:api/WalletPermissionApi~updateWalletPermissionUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletPermissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update client's permission for provided Wallet
     * @param {String} walletId Wallet ID
     * @param {module:model/WalletPermissionUpdateParams} clientPermissions Client's permission to be updated
     * @param {module:api/WalletPermissionApi~updateWalletPermissionUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletPermissionResponse}
     */
    this.updateWalletPermissionUsingPut = function(walletId, clientPermissions, callback) {
      var postBody = clientPermissions;

      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling updateWalletPermissionUsingPut");
      }

      // verify the required parameter 'clientPermissions' is set
      if (clientPermissions === undefined || clientPermissions === null) {
        throw new Error("Missing the required parameter 'clientPermissions' when calling updateWalletPermissionUsingPut");
      }


      var pathParams = {
        'wallet_id': walletId
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
      var returnType = WalletPermissionResponse;

      return this.apiClient.callApi(
        '/wallet_permission/{wallet_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));