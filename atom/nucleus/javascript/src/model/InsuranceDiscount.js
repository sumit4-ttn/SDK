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
    define(['ApiClient', 'model/AllocationNodeMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AllocationNodeMap'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.InsuranceDiscount = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.AllocationNodeMap);
  }
}(this, function(ApiClient, AllocationNodeMap) {
  'use strict';




  /**
   * The InsuranceDiscount model module.
   * @module model/InsuranceDiscount
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>InsuranceDiscount</code>.
   * Insurance Discount Object
   * @alias module:model/InsuranceDiscount
   * @class
   * @param name {String} name
   */
  var exports = function(name) {
    var _this = this;










    _this['name'] = name;




  };

  /**
   * Constructs a <code>InsuranceDiscount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsuranceDiscount} obj Optional instance to populate.
   * @return {module:model/InsuranceDiscount} The populated <code>InsuranceDiscount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('discount_amount')) {
        obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
      }
      if (data.hasOwnProperty('discount_percentage')) {
        obj['discount_percentage'] = ApiClient.convertToType(data['discount_percentage'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('node_map')) {
        obj['node_map'] = ApiClient.convertToType(data['node_map'], [AllocationNodeMap]);
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('subcategory')) {
        obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * category
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * currencyCode
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * discountAmount
   * @member {Number} discount_amount
   */
  exports.prototype['discount_amount'] = undefined;
  /**
   * discountPercentage
   * @member {Number} discount_percentage
   */
  exports.prototype['discount_percentage'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * is_active
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/AllocationNodeMap>} node_map
   */
  exports.prototype['node_map'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * subcategory
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));

