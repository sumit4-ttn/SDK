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
    describe('DocumentParams', function() {
      beforeEach(function() {
        instance = new MoleculeApiDocumentation.DocumentParams();
      });

      it('should create an instance of DocumentParams', function() {
        // TODO: update the code to test DocumentParams
        expect(instance).to.be.a(MoleculeApiDocumentation.DocumentParams);
      });

      it('should have the property documentId (base name: "document_id")', function() {
        // TODO: update the code to test the property documentId
        expect(instance).to.have.property('documentId');
        // expect(instance.documentId).to.be(expectedValueLiteral);
      });

      it('should have the property walletId (base name: "wallet_id")', function() {
        // TODO: update the code to test the property walletId
        expect(instance).to.have.property('walletId');
        // expect(instance.walletId).to.be(expectedValueLiteral);
      });

    });
  });

}));
