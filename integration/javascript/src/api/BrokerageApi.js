/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
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
    define(['ApiClient', 'model/BrokerageAccountCO', 'model/BrokerageAccountVO', 'model/BrokerageBankLinkCO', 'model/BrokerageBankLinkVO', 'model/BrokerageClientCO', 'model/BrokerageCreateClientVO', 'model/BrokerageStatementVO', 'model/BrokerageUpdateClientVO', 'model/CreateOrderResponse', 'model/GetOrderResponse', 'model/ResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BrokerageAccountCO'), require('../model/BrokerageAccountVO'), require('../model/BrokerageBankLinkCO'), require('../model/BrokerageBankLinkVO'), require('../model/BrokerageClientCO'), require('../model/BrokerageCreateClientVO'), require('../model/BrokerageStatementVO'), require('../model/BrokerageUpdateClientVO'), require('../model/CreateOrderResponse'), require('../model/GetOrderResponse'), require('../model/ResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.BrokerageApi = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.BrokerageAccountCO, root.HydrogenIntegrationApi.BrokerageAccountVO, root.HydrogenIntegrationApi.BrokerageBankLinkCO, root.HydrogenIntegrationApi.BrokerageBankLinkVO, root.HydrogenIntegrationApi.BrokerageClientCO, root.HydrogenIntegrationApi.BrokerageCreateClientVO, root.HydrogenIntegrationApi.BrokerageStatementVO, root.HydrogenIntegrationApi.BrokerageUpdateClientVO, root.HydrogenIntegrationApi.CreateOrderResponse, root.HydrogenIntegrationApi.GetOrderResponse, root.HydrogenIntegrationApi.ResponseEntity);
  }
}(this, function(ApiClient, BrokerageAccountCO, BrokerageAccountVO, BrokerageBankLinkCO, BrokerageBankLinkVO, BrokerageClientCO, BrokerageCreateClientVO, BrokerageStatementVO, BrokerageUpdateClientVO, CreateOrderResponse, GetOrderResponse, ResponseEntity) {
  'use strict';

  /**
   * Brokerage service.
   * @module api/BrokerageApi
   * @version 1.2.1
   */

  /**
   * Constructs a new BrokerageApi. 
   * @alias module:api/BrokerageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBankLinkUsingPost operation.
     * @callback module:api/BrokerageApi~createBankLinkUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrokerageBankLinkVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a Bank Link
     * @param {module:model/BrokerageBankLinkCO} brokerageBankLinkCO brokerageBankLinkCO
     * @param {module:api/BrokerageApi~createBankLinkUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrokerageBankLinkVO}
     */
    this.createBankLinkUsingPost = function(brokerageBankLinkCO, callback) {
      var postBody = brokerageBankLinkCO;

      // verify the required parameter 'brokerageBankLinkCO' is set
      if (brokerageBankLinkCO === undefined || brokerageBankLinkCO === null) {
        throw new Error("Missing the required parameter 'brokerageBankLinkCO' when calling createBankLinkUsingPost");
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
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BrokerageBankLinkVO;

      return this.apiClient.callApi(
        '/brokerage/bank_link', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createBrokerageAccountUsingPost operation.
     * @callback module:api/BrokerageApi~createBrokerageAccountUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrokerageAccountVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a Brokerage account
     * @param {module:model/BrokerageAccountCO} brokerageAccountCO brokerageAccountCO
     * @param {module:api/BrokerageApi~createBrokerageAccountUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrokerageAccountVO}
     */
    this.createBrokerageAccountUsingPost = function(brokerageAccountCO, callback) {
      var postBody = brokerageAccountCO;

      // verify the required parameter 'brokerageAccountCO' is set
      if (brokerageAccountCO === undefined || brokerageAccountCO === null) {
        throw new Error("Missing the required parameter 'brokerageAccountCO' when calling createBrokerageAccountUsingPost");
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
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BrokerageAccountVO;

      return this.apiClient.callApi(
        '/brokerage/account', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createBrokerageClientUsingPost operation.
     * @callback module:api/BrokerageApi~createBrokerageClientUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrokerageCreateClientVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Brokerage Client
     * @param {module:model/BrokerageClientCO} clientCO clientCO
     * @param {module:api/BrokerageApi~createBrokerageClientUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrokerageCreateClientVO}
     */
    this.createBrokerageClientUsingPost = function(clientCO, callback) {
      var postBody = clientCO;

      // verify the required parameter 'clientCO' is set
      if (clientCO === undefined || clientCO === null) {
        throw new Error("Missing the required parameter 'clientCO' when calling createBrokerageClientUsingPost");
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
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BrokerageCreateClientVO;

      return this.apiClient.callApi(
        '/brokerage/client', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createOrderUsingPost operation.
     * @callback module:api/BrokerageApi~createOrderUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Order
     * @param {String} nucleusOrderId nucleus_order_id
     * @param {module:api/BrokerageApi~createOrderUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateOrderResponse}
     */
    this.createOrderUsingPost = function(nucleusOrderId, callback) {
      var postBody = null;

      // verify the required parameter 'nucleusOrderId' is set
      if (nucleusOrderId === undefined || nucleusOrderId === null) {
        throw new Error("Missing the required parameter 'nucleusOrderId' when calling createOrderUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
        'nucleus_order_id': nucleusOrderId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CreateOrderResponse;

      return this.apiClient.callApi(
        '/brokerage/order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBankLinkUsingDelete operation.
     * @callback module:api/BrokerageApi~deleteBankLinkUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Bank Link
     * @param {String} nucleusBankLinkId nucleus_bank_link_id
     * @param {module:api/BrokerageApi~deleteBankLinkUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.deleteBankLinkUsingDelete = function(nucleusBankLinkId, callback) {
      var postBody = null;

      // verify the required parameter 'nucleusBankLinkId' is set
      if (nucleusBankLinkId === undefined || nucleusBankLinkId === null) {
        throw new Error("Missing the required parameter 'nucleusBankLinkId' when calling deleteBankLinkUsingDelete");
      }


      var pathParams = {
        'nucleus_bank_link_id': nucleusBankLinkId
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
      var accepts = ['*/*'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/brokerage/bank_link/{nucleus_bank_link_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrderUsingDelete operation.
     * @callback module:api/BrokerageApi~deleteOrderUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Order
     * @param {String} nucleusOrderId nucleus_order_id
     * @param {module:api/BrokerageApi~deleteOrderUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrderUsingDelete = function(nucleusOrderId, callback) {
      var postBody = null;

      // verify the required parameter 'nucleusOrderId' is set
      if (nucleusOrderId === undefined || nucleusOrderId === null) {
        throw new Error("Missing the required parameter 'nucleusOrderId' when calling deleteOrderUsingDelete");
      }


      var pathParams = {
      };
      var queryParams = {
        'nucleus_order_id': nucleusOrderId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/brokerage/order', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBankLinkUsingGet operation.
     * @callback module:api/BrokerageApi~getBankLinkUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrokerageBankLinkVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Bank Link
     * @param {String} nucleusBankLinkId nucleus_bank_link_id
     * @param {module:api/BrokerageApi~getBankLinkUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrokerageBankLinkVO}
     */
    this.getBankLinkUsingGet = function(nucleusBankLinkId, callback) {
      var postBody = null;

      // verify the required parameter 'nucleusBankLinkId' is set
      if (nucleusBankLinkId === undefined || nucleusBankLinkId === null) {
        throw new Error("Missing the required parameter 'nucleusBankLinkId' when calling getBankLinkUsingGet");
      }


      var pathParams = {
        'nucleus_bank_link_id': nucleusBankLinkId
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
      var accepts = ['*/*'];
      var returnType = BrokerageBankLinkVO;

      return this.apiClient.callApi(
        '/brokerage/bank_link/{nucleus_bank_link_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBrokerageAccountStatementUsingGet operation.
     * @callback module:api/BrokerageApi~getBrokerageAccountStatementUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrokerageStatementVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Brokerage account statement
     * @param {Date} endDate end_date
     * @param {String} nucleusAccountId nucleus_account_id
     * @param {Date} startDate start_date
     * @param {String} statementType statement_type
     * @param {module:api/BrokerageApi~getBrokerageAccountStatementUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrokerageStatementVO}
     */
    this.getBrokerageAccountStatementUsingGet = function(endDate, nucleusAccountId, startDate, statementType, callback) {
      var postBody = null;

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getBrokerageAccountStatementUsingGet");
      }

      // verify the required parameter 'nucleusAccountId' is set
      if (nucleusAccountId === undefined || nucleusAccountId === null) {
        throw new Error("Missing the required parameter 'nucleusAccountId' when calling getBrokerageAccountStatementUsingGet");
      }

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getBrokerageAccountStatementUsingGet");
      }

      // verify the required parameter 'statementType' is set
      if (statementType === undefined || statementType === null) {
        throw new Error("Missing the required parameter 'statementType' when calling getBrokerageAccountStatementUsingGet");
      }


      var pathParams = {
        'nucleus_account_id': nucleusAccountId
      };
      var queryParams = {
        'end_date': endDate,
        'start_date': startDate,
        'statement_type': statementType,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = BrokerageStatementVO;

      return this.apiClient.callApi(
        '/brokerage/{nucleus_account_id}/statement', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderUsingGet operation.
     * @callback module:api/BrokerageApi~getOrderUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an Order
     * @param {String} nucleusOrderId nucleus_order_id
     * @param {module:api/BrokerageApi~getOrderUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOrderResponse}
     */
    this.getOrderUsingGet = function(nucleusOrderId, callback) {
      var postBody = null;

      // verify the required parameter 'nucleusOrderId' is set
      if (nucleusOrderId === undefined || nucleusOrderId === null) {
        throw new Error("Missing the required parameter 'nucleusOrderId' when calling getOrderUsingGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'nucleus_order_id': nucleusOrderId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = GetOrderResponse;

      return this.apiClient.callApi(
        '/brokerage/order', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBankLinkUsingPut operation.
     * @callback module:api/BrokerageApi~updateBankLinkUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrokerageBankLinkVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Bank Link
     * @param {String} nucleusBankLinkId nucleus_bank_link_id
     * @param {module:api/BrokerageApi~updateBankLinkUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrokerageBankLinkVO}
     */
    this.updateBankLinkUsingPut = function(nucleusBankLinkId, callback) {
      var postBody = null;

      // verify the required parameter 'nucleusBankLinkId' is set
      if (nucleusBankLinkId === undefined || nucleusBankLinkId === null) {
        throw new Error("Missing the required parameter 'nucleusBankLinkId' when calling updateBankLinkUsingPut");
      }


      var pathParams = {
        'nucleus_bank_link_id': nucleusBankLinkId
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
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BrokerageBankLinkVO;

      return this.apiClient.callApi(
        '/brokerage/bank_link/{nucleus_bank_link_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBrokerageClientUsingPut operation.
     * @callback module:api/BrokerageApi~updateBrokerageClientUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BrokerageUpdateClientVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Brokerage client
     * @param {module:model/BrokerageClientCO} clientCO clientCO
     * @param {module:api/BrokerageApi~updateBrokerageClientUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BrokerageUpdateClientVO}
     */
    this.updateBrokerageClientUsingPut = function(clientCO, callback) {
      var postBody = clientCO;

      // verify the required parameter 'clientCO' is set
      if (clientCO === undefined || clientCO === null) {
        throw new Error("Missing the required parameter 'clientCO' when calling updateBrokerageClientUsingPut");
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
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BrokerageUpdateClientVO;

      return this.apiClient.callApi(
        '/brokerage/client', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
