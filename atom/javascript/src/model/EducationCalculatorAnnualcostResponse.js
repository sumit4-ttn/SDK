/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EducationCalculatorReturnDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EducationCalculatorReturnDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.EducationCalculatorAnnualcostResponse = factory(root.atom_api.ApiClient, root.atom_api.EducationCalculatorReturnDetail);
  }
}(this, function(ApiClient, EducationCalculatorReturnDetail) {
  'use strict';




  /**
   * The EducationCalculatorAnnualcostResponse model module.
   * @module model/EducationCalculatorAnnualcostResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EducationCalculatorAnnualcostResponse</code>.
   * @alias module:model/EducationCalculatorAnnualcostResponse
   * @class
   * @param totalAnnualCost {Number} The total education cost per year that can be afforded, represented in today’s dollars.
   * @param totalCost {Number} The total cost of education over the decumulation horizon, represented in future dollars.
   * @param returnDetails {Object.<String, module:model/EducationCalculatorReturnDetail>} 
   */
  var exports = function(totalAnnualCost, totalCost, returnDetails) {
    var _this = this;

    _this['total_annual_cost'] = totalAnnualCost;
    _this['total_cost'] = totalCost;
    _this['return_details'] = returnDetails;
  };

  /**
   * Constructs a <code>EducationCalculatorAnnualcostResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EducationCalculatorAnnualcostResponse} obj Optional instance to populate.
   * @return {module:model/EducationCalculatorAnnualcostResponse} The populated <code>EducationCalculatorAnnualcostResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total_annual_cost')) {
        obj['total_annual_cost'] = ApiClient.convertToType(data['total_annual_cost'], 'Number');
      }
      if (data.hasOwnProperty('total_cost')) {
        obj['total_cost'] = ApiClient.convertToType(data['total_cost'], 'Number');
      }
      if (data.hasOwnProperty('return_details')) {
        obj['return_details'] = ApiClient.convertToType(data['return_details'], {'String': EducationCalculatorReturnDetail});
      }
    }
    return obj;
  }

  /**
   * The total education cost per year that can be afforded, represented in today’s dollars.
   * @member {Number} total_annual_cost
   */
  exports.prototype['total_annual_cost'] = undefined;
  /**
   * The total cost of education over the decumulation horizon, represented in future dollars.
   * @member {Number} total_cost
   */
  exports.prototype['total_cost'] = undefined;
  /**
   * @member {Object.<String, module:model/EducationCalculatorReturnDetail>} return_details
   */
  exports.prototype['return_details'] = undefined;



  return exports;
}));

