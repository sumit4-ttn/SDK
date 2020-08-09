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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MoleculeApiDocumentation);
  }
}(this, function(expect, MoleculeApiDocumentation) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('WebhookParams', function() {
      beforeEach(function() {
        instance = new MoleculeApiDocumentation.WebhookParams();
      });

      it('should create an instance of WebhookParams', function() {
        // TODO: update the code to test WebhookParams
        expect(instance).to.be.a(MoleculeApiDocumentation.WebhookParams);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property moleculeService (base name: "molecule_service")', function() {
        // TODO: update the code to test the property moleculeService
        expect(instance).to.have.property('moleculeService');
        // expect(instance.moleculeService).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "is_active")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property recordStatus (base name: "record_status")', function() {
        // TODO: update the code to test the property recordStatus
        expect(instance).to.have.property('recordStatus');
        // expect(instance.recordStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));