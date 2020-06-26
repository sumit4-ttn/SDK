/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
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
    define(['ApiClient', 'model/SensitivityFactor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SensitivityFactor'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.ScenarioAnalysisRequest = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.SensitivityFactor);
  }
}(this, function(ApiClient, SensitivityFactor) {
  'use strict';

  /**
   * The ScenarioAnalysisRequest model module.
   * @module model/ScenarioAnalysisRequest
   * @version 1.7.18
   */

  /**
   * Constructs a new <code>ScenarioAnalysisRequest</code>.
   * @alias module:model/ScenarioAnalysisRequest
   * @class
   * @param frequencyInterval {module:model/ScenarioAnalysisRequest.FrequencyIntervalEnum} 
   * @param scenario {Array.<module:model/SensitivityFactor>} 
   */
  var exports = function(frequencyInterval, scenario) {
    this.frequencyInterval = frequencyInterval;
    this.scenario = scenario;
  };

  /**
   * Constructs a <code>ScenarioAnalysisRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScenarioAnalysisRequest} obj Optional instance to populate.
   * @return {module:model/ScenarioAnalysisRequest} The populated <code>ScenarioAnalysisRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('use_proxy_data'))
        obj.useProxyData = ApiClient.convertToType(data['use_proxy_data'], 'Boolean');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('portfolio_tickers'))
        obj.portfolioTickers = ApiClient.convertToType(data['portfolio_tickers'], ['String']);
      if (data.hasOwnProperty('trading_days_per_year'))
        obj.tradingDaysPerYear = ApiClient.convertToType(data['trading_days_per_year'], 'Number');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('model_id'))
        obj.modelId = ApiClient.convertToType(data['model_id'], 'String');
      if (data.hasOwnProperty('allocation_id'))
        obj.allocationId = ApiClient.convertToType(data['allocation_id'], 'String');
      if (data.hasOwnProperty('account_id'))
        obj.accountId = ApiClient.convertToType(data['account_id'], 'String');
      if (data.hasOwnProperty('portfolio_id'))
        obj.portfolioId = ApiClient.convertToType(data['portfolio_id'], 'String');
      if (data.hasOwnProperty('portfolio_weights'))
        obj.portfolioWeights = ApiClient.convertToType(data['portfolio_weights'], ['Number']);
      if (data.hasOwnProperty('frequency_interval'))
        obj.frequencyInterval = ApiClient.convertToType(data['frequency_interval'], 'String');
      if (data.hasOwnProperty('scenario'))
        obj.scenario = ApiClient.convertToType(data['scenario'], [SensitivityFactor]);
      if (data.hasOwnProperty('aggregation_account_id'))
        obj.aggregationAccountId = ApiClient.convertToType(data['aggregation_account_id'], 'String');
      if (data.hasOwnProperty('market_data_source'))
        obj.marketDataSource = ApiClient.convertToType(data['market_data_source'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} useProxyData
   * @default false
   */
  exports.prototype.useProxyData = false;

  /**
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {Array.<String>} portfolioTickers
   */
  exports.prototype.portfolioTickers = undefined;

  /**
   * @member {Number} tradingDaysPerYear
   * @default 252
   */
  exports.prototype.tradingDaysPerYear = 252;

  /**
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * @member {String} modelId
   */
  exports.prototype.modelId = undefined;

  /**
   * @member {String} allocationId
   */
  exports.prototype.allocationId = undefined;

  /**
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * @member {String} portfolioId
   */
  exports.prototype.portfolioId = undefined;

  /**
   * @member {Array.<Number>} portfolioWeights
   */
  exports.prototype.portfolioWeights = undefined;

  /**
   * @member {module:model/ScenarioAnalysisRequest.FrequencyIntervalEnum} frequencyInterval
   */
  exports.prototype.frequencyInterval = undefined;

  /**
   * @member {Array.<module:model/SensitivityFactor>} scenario
   */
  exports.prototype.scenario = undefined;

  /**
   * @member {String} aggregationAccountId
   */
  exports.prototype.aggregationAccountId = undefined;

  /**
   * @member {module:model/ScenarioAnalysisRequest.MarketDataSourceEnum} marketDataSource
   * @default 'nucleus'
   */
  exports.prototype.marketDataSource = 'nucleus';


  /**
   * Allowed values for the <code>frequencyInterval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyIntervalEnum = {
    /**
     * value: "year"
     * @const
     */
    year: "year",

    /**
     * value: "quarter"
     * @const
     */
    quarter: "quarter",

    /**
     * value: "month"
     * @const
     */
    month: "month",

    /**
     * value: "week"
     * @const
     */
    week: "week",

    /**
     * value: "day"
     * @const
     */
    day: "day"
  };


  /**
   * Allowed values for the <code>marketDataSource</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MarketDataSourceEnum = {
    /**
     * value: "nucleus"
     * @const
     */
    nucleus: "nucleus",

    /**
     * value: "integration"
     * @const
     */
    integration: "integration"
  };

  return exports;

}));