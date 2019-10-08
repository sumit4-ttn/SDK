/**
 * Hydrogen Molecule API
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/OfferingSettingsUpdatePayload', 'model/SecondaryId', 'model/TokenRestrictionsPayload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OfferingSettingsUpdatePayload'), require('./SecondaryId'), require('./TokenRestrictionsPayload'));
  } else {
    // Browser globals (root is window)
    if (!root.molecule_api) {
      root.molecule_api = {};
    }
    root.molecule_api.TokenUpdatePayload = factory(root.molecule_api.ApiClient, root.molecule_api.OfferingSettingsUpdatePayload, root.molecule_api.SecondaryId, root.molecule_api.TokenRestrictionsPayload);
  }
}(this, function(ApiClient, OfferingSettingsUpdatePayload, SecondaryId, TokenRestrictionsPayload) {
  'use strict';




  /**
   * The TokenUpdatePayload model module.
   * @module model/TokenUpdatePayload
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TokenUpdatePayload</code>.
   * @alias module:model/TokenUpdatePayload
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>TokenUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenUpdatePayload} obj Optional instance to populate.
   * @return {module:model/TokenUpdatePayload} The populated <code>TokenUpdatePayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nucleus_model_id')) {
        obj['nucleus_model_id'] = ApiClient.convertToType(data['nucleus_model_id'], 'String');
      }
      if (data.hasOwnProperty('owner_wallet_id')) {
        obj['owner_wallet_id'] = ApiClient.convertToType(data['owner_wallet_id'], 'String');
      }
      if (data.hasOwnProperty('total_supply')) {
        obj['total_supply'] = ApiClient.convertToType(data['total_supply'], 'Number');
      }
      if (data.hasOwnProperty('circulating_supply')) {
        obj['circulating_supply'] = ApiClient.convertToType(data['circulating_supply'], 'Number');
      }
      if (data.hasOwnProperty('conract_address')) {
        obj['conract_address'] = ApiClient.convertToType(data['conract_address'], 'String');
      }
      if (data.hasOwnProperty('crowdsale_address')) {
        obj['crowdsale_address'] = ApiClient.convertToType(data['crowdsale_address'], 'String');
      }
      if (data.hasOwnProperty('restrictions')) {
        obj['restrictions'] = TokenRestrictionsPayload.constructFromObject(data['restrictions']);
      }
      if (data.hasOwnProperty('offering_settings')) {
        obj['offering_settings'] = OfferingSettingsUpdatePayload.constructFromObject(data['offering_settings']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = SecondaryId.constructFromObject(data['secondary_id']);
      }
    }
    return obj;
  }

  /**
   * The symbol of the security token. Could be 3 or 4 characters long.
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * Name of the security token.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The id of the associated Nucleus model for this security token
   * @member {String} nucleus_model_id
   */
  exports.prototype['nucleus_model_id'] = undefined;
  /**
   * The wallet id of the token owner. This wallet has the privileges to do on-chain modifications
   * @member {String} owner_wallet_id
   */
  exports.prototype['owner_wallet_id'] = undefined;
  /**
   * The total supply of the security token
   * @member {Number} total_supply
   */
  exports.prototype['total_supply'] = undefined;
  /**
   * The amount of tokens in circulation. Defaults to 0
   * @member {Number} circulating_supply
   */
  exports.prototype['circulating_supply'] = undefined;
  /**
   * The contract address of the security token on the Ethereum blockchain
   * @member {String} conract_address
   */
  exports.prototype['conract_address'] = undefined;
  /**
   * The crowdsale address of the security token on the Ethereum blockchain
   * @member {String} crowdsale_address
   */
  exports.prototype['crowdsale_address'] = undefined;
  /**
   * @member {module:model/TokenRestrictionsPayload} restrictions
   */
  exports.prototype['restrictions'] = undefined;
  /**
   * @member {module:model/OfferingSettingsUpdatePayload} offering_settings
   */
  exports.prototype['offering_settings'] = undefined;
  /**
   * Custom information associated with the account in the format key:value
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/SecondaryId} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;



  return exports;
}));


