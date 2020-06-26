/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.DecisionTreeResultVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DecisionTreeResultVO model module.
   * @module model/DecisionTreeResultVO
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>DecisionTreeResultVO</code>.
   * @alias module:model/DecisionTreeResultVO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DecisionTreeResultVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecisionTreeResultVO} obj Optional instance to populate.
   * @return {module:model/DecisionTreeResultVO} The populated <code>DecisionTreeResultVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entity_id')) {
        obj['entity_id'] = ApiClient.convertToType(data['entity_id'], ['String']);
      }
      if (data.hasOwnProperty('entity_type')) {
        obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} entity_id
   */
  exports.prototype['entity_id'] = undefined;
  /**
   * @member {String} entity_type
   */
  exports.prototype['entity_type'] = undefined;



  return exports;
}));

