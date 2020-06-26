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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HydrogenIntegrationApi);
  }
}(this, function(expect, HydrogenIntegrationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenIntegrationApi.CardApi();
  });

  describe('(package)', function() {
    describe('CardApi', function() {
      describe('createCardActivateUsingPost', function() {
        it('should call createCardActivateUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardActivateUsingPost call and complete the assertions
          /*
          var activateRequest = new HydrogenIntegrationApi.CardBaseRequestCO();
          activateRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          activateRequest.reason = "";
          activateRequest.vendorRequest = {key: ""};

          instance.createCardActivateUsingPost(activateRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardCloseUsingPost', function() {
        it('should call createCardCloseUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardCloseUsingPost call and complete the assertions
          /*
          var closeRequest = new HydrogenIntegrationApi.CardBaseRequestCO();
          closeRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          closeRequest.reason = "";
          closeRequest.vendorRequest = {key: ""};

          instance.createCardCloseUsingPost(closeRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardIssueUsingPost', function() {
        it('should call createCardIssueUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardIssueUsingPost call and complete the assertions
          /*
          var issueRequest = new HydrogenIntegrationApi.CardBaseRequestCO();
          issueRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          issueRequest.reason = "";
          issueRequest.vendorRequest = {key: ""};

          instance.createCardIssueUsingPost(issueRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardPinUsingPost', function() {
        it('should call createCardPinUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardPinUsingPost call and complete the assertions
          /*
          var cardPinRequestCO = new HydrogenIntegrationApi.CardPinRequestCO();
          cardPinRequestCO.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          cardPinRequestCO.pin = "";
          cardPinRequestCO.reason = "";
          cardPinRequestCO.vendorRequest = {key: ""};

          instance.createCardPinUsingPost(cardPinRequestCO, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardReactivateUsingPost', function() {
        it('should call createCardReactivateUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardReactivateUsingPost call and complete the assertions
          /*
          var reactivateRequest = new HydrogenIntegrationApi.CardBaseRequestCO();
          reactivateRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          reactivateRequest.reason = "";
          reactivateRequest.vendorRequest = {key: ""};

          instance.createCardReactivateUsingPost(reactivateRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardReissueUsingPost', function() {
        it('should call createCardReissueUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardReissueUsingPost call and complete the assertions
          /*
          var request = new HydrogenIntegrationApi.CardBaseRequestCO();
          request.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          request.reason = "";
          request.vendorRequest = {key: ""};

          instance.createCardReissueUsingPost(request, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardReloadUsingPost', function() {
        it('should call createCardReloadUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardReloadUsingPost call and complete the assertions
          /*
          var reloadRequest = new HydrogenIntegrationApi.CardReloadRequestCO();
          reloadRequest.amount = 0.0;
          reloadRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          reloadRequest.reason = "";
          reloadRequest.vendorRequest = {key: ""};

          instance.createCardReloadUsingPost(reloadRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.CardReloadUnloadResponseVO);
            expect(data.amount).to.be.a('number');
            expect(data.amount).to.be(0.0);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardSuspendUsingPost', function() {
        it('should call createCardSuspendUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardSuspendUsingPost call and complete the assertions
          /*
          var suspendRequest = new HydrogenIntegrationApi.CardBaseRequestCO();
          suspendRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          suspendRequest.reason = "";
          suspendRequest.vendorRequest = {key: ""};

          instance.createCardSuspendUsingPost(suspendRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardTokenUsingPost', function() {
        it('should call createCardTokenUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardTokenUsingPost call and complete the assertions
          /*
          var tokenizeRequest = new HydrogenIntegrationApi.CardTokenRequestCO();
          tokenizeRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          tokenizeRequest.reason = "";
          tokenizeRequest.vendorRequest = {key: ""};
          tokenizeRequest.wallet = "apple";

          instance.createCardTokenUsingPost(tokenizeRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.CardTokenResponseVO);
            expect(data.applePayload).to.be.a(HydrogenIntegrationApi.ApplePayload);
                  expect(data.applePayload.activationData).to.be.a('string');
              expect(data.applePayload.activationData).to.be("");
              expect(data.applePayload.encryptedPassData).to.be.a('string');
              expect(data.applePayload.encryptedPassData).to.be("");
              expect(data.applePayload.ephemeralPublicKey).to.be.a('string');
              expect(data.applePayload.ephemeralPublicKey).to.be("");
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.googlePayload).to.be.a(HydrogenIntegrationApi.GooglePayload);
                  expect(data.googlePayload.issuerPayload).to.be.a('string');
              expect(data.googlePayload.issuerPayload).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.samsungPayload).to.be.a(HydrogenIntegrationApi.SamsungPayload);
                  expect(data.samsungPayload.issuerPayload).to.be.a('string');
              expect(data.samsungPayload.issuerPayload).to.be("");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();
            expect(data.wallet).to.be.a('string');
            expect(data.wallet).to.be("apple");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardTransferUsingPost', function() {
        it('should call createCardTransferUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardTransferUsingPost call and complete the assertions
          /*
          var transferRequest = new HydrogenIntegrationApi.CardTransferRequestCO();
          transferRequest.nucleusCardIdFrom = """00000000-0000-0000-0000-000000000000";
          transferRequest.nucleusCardIdTo = """00000000-0000-0000-0000-000000000000";
          transferRequest.reason = "";

          instance.createCardTransferUsingPost(transferRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.CardTransferResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.nucleusCardIdFrom).to.be.a('string');
            expect(data.nucleusCardIdFrom).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.nucleusCardIdTo).to.be.a('string');
            expect(data.nucleusCardIdTo).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createCardUnloadUsingPost', function() {
        it('should call createCardUnloadUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createCardUnloadUsingPost call and complete the assertions
          /*
          var reloadRequest = new HydrogenIntegrationApi.CardUnloadRequestCO();
          reloadRequest.amount = 0.0;
          reloadRequest.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          reloadRequest.reason = "";
          reloadRequest.vendorRequest = {key: ""};

          instance.createCardUnloadUsingPost(reloadRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.CardReloadUnloadResponseVO);
            expect(data.amount).to.be.a('number');
            expect(data.amount).to.be(0.0);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createClientCardUsingPost', function() {
        it('should call createClientCardUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createClientCardUsingPost call and complete the assertions
          /*
          var cardClientRequestCO = new HydrogenIntegrationApi.CardClientRequestCO();
          cardClientRequestCO.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          cardClientRequestCO.nucleusClientId = """00000000-0000-0000-0000-000000000000";
          cardClientRequestCO.vendorRequest = {key: ""};

          instance.createClientCardUsingPost(cardClientRequestCO, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.CardClientResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.nucleusClientId).to.be.a('string');
            expect(data.nucleusClientId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCardBalanceUsingGet', function() {
        it('should call getCardBalanceUsingGet successfully', function(done) {
          // TODO: uncomment, update parameter values for getCardBalanceUsingGet call and complete the assertions
          /*
          var id = "id_example";
          var opts = {};
          opts.endDate = new Date("2013-10-20");
          opts.startDate = new Date("2013-10-20");

          instance.getCardBalanceUsingGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.CardBalanceResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            {
              let dataCtr = data.nucleusAssetSizesPosted;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            {
              let dataCtr = data.nucleusAssetSizesUpdated;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCardTokenUsingToken', function() {
        it('should call getCardTokenUsingToken successfully', function(done) {
          // TODO: uncomment, update parameter values for getCardTokenUsingToken call and complete the assertions
          /*
          var id = "id_example";

          instance.getCardTokenUsingToken(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.GetCardTokenResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.token).to.be.a('string');
            expect(data.token).to.be("");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();
            expect(data.wallet).to.be.a('string');
            expect(data.wallet).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCardTransactionUsingGet', function() {
        it('should call getCardTransactionUsingGet successfully', function(done) {
          // TODO: uncomment, update parameter values for getCardTransactionUsingGet call and complete the assertions
          /*
          var id = "id_example";
          var opts = {};
          opts.endDate = new Date("2013-10-20");
          opts.startDate = new Date("2013-10-20");

          instance.getCardTransactionUsingGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.CardTransactionResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            {
              let dataCtr = data.nucleusTransactionsPosted;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            {
              let dataCtr = data.nucleusTransactionsUpdated;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCardUsingGet', function() {
        it('should call getCardUsingGet successfully', function(done) {
          // TODO: uncomment, update parameter values for getCardUsingGet call and complete the assertions
          /*
          var id = "id_example";

          instance.getCardUsingGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateCardPinUsingPost', function() {
        it('should call updateCardPinUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for updateCardPinUsingPost call and complete the assertions
          /*
          var cardPinRequestCO = new HydrogenIntegrationApi.CardPinRequestCO();
          cardPinRequestCO.nucleusCardId = """00000000-0000-0000-0000-000000000000";
          cardPinRequestCO.pin = "";
          cardPinRequestCO.reason = "";
          cardPinRequestCO.vendorRequest = {key: ""};
          var id = "id_example";

          instance.updateCardPinUsingPost(cardPinRequestCO, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateCardUsingPut', function() {
        it('should call updateCardUsingPut successfully', function(done) {
          // TODO: uncomment, update parameter values for updateCardUsingPut call and complete the assertions
          /*
          var id = "id_example";

          instance.updateCardUsingPut(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.BaseResponseVO);
            expect(data.cardStatus).to.be.a('string');
            expect(data.cardStatus).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusCardId).to.be.a('string');
            expect(data.nucleusCardId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));