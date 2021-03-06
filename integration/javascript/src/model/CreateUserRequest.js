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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.CreateUserRequest = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateUserRequest model module.
   * @module model/CreateUserRequest
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>CreateUserRequest</code>.
   * @alias module:model/CreateUserRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserRequest} obj Optional instance to populate.
   * @return {module:model/CreateUserRequest} The populated <code>CreateUserRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('integration_type'))
        obj.integrationType = ApiClient.convertToType(data['integration_type'], 'String');
      if (data.hasOwnProperty('nucleus_client_id'))
        obj.nucleusClientId = ApiClient.convertToType(data['nucleus_client_id'], 'String');
      if (data.hasOwnProperty('product'))
        obj.product = ApiClient.convertToType(data['product'], 'String');
      if (data.hasOwnProperty('tenant_id'))
        obj.tenantId = ApiClient.convertToType(data['tenant_id'], 'String');
      if (data.hasOwnProperty('vendor_name'))
        obj.vendorName = ApiClient.convertToType(data['vendor_name'], 'String');
      if (data.hasOwnProperty('vendor_request'))
        obj.vendorRequest = ApiClient.convertToType(data['vendor_request'], Object);
    }
    return obj;
  }

  /**
   * @member {String} integrationType
   */
  exports.prototype.integrationType = undefined;

  /**
   * @member {String} nucleusClientId
   */
  exports.prototype.nucleusClientId = undefined;

  /**
   * @member {String} product
   */
  exports.prototype.product = undefined;

  /**
   * @member {String} tenantId
   */
  exports.prototype.tenantId = undefined;

  /**
   * @member {String} vendorName
   */
  exports.prototype.vendorName = undefined;

  /**
   * @member {Object} vendorRequest
   */
  exports.prototype.vendorRequest = undefined;

  return exports;

}));
