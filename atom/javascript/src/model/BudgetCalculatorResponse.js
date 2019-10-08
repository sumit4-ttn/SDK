/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BudgetCalculatorResponseBudgetTrack'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BudgetCalculatorResponseBudgetTrack'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.BudgetCalculatorResponse = factory(root.atom_api.ApiClient, root.atom_api.BudgetCalculatorResponseBudgetTrack);
  }
}(this, function(ApiClient, BudgetCalculatorResponseBudgetTrack) {
  'use strict';




  /**
   * The BudgetCalculatorResponse model module.
   * @module model/BudgetCalculatorResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>BudgetCalculatorResponse</code>.
   * @alias module:model/BudgetCalculatorResponse
   * @class
   * @param currencyCode {String} Currency code associated with monetary response values
   * @param budgetTrack {Array.<module:model/BudgetCalculatorResponseBudgetTrack>} Analysis of spending versus budget for each budget period
   */
  var exports = function(currencyCode, budgetTrack) {
    var _this = this;

    _this['currency_code'] = currencyCode;
    _this['budget_track'] = budgetTrack;
  };

  /**
   * Constructs a <code>BudgetCalculatorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BudgetCalculatorResponse} obj Optional instance to populate.
   * @return {module:model/BudgetCalculatorResponse} The populated <code>BudgetCalculatorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('budget_track')) {
        obj['budget_track'] = ApiClient.convertToType(data['budget_track'], [BudgetCalculatorResponseBudgetTrack]);
      }
    }
    return obj;
  }

  /**
   * Currency code associated with monetary response values
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * Analysis of spending versus budget for each budget period
   * @member {Array.<module:model/BudgetCalculatorResponseBudgetTrack>} budget_track
   */
  exports.prototype['budget_track'] = undefined;



  return exports;
}));

