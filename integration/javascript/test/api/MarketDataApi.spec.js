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
    instance = new HydrogenIntegrationApi.MarketDataApi();
  });

  describe('(package)', function() {
    describe('MarketDataApi', function() {
      describe('createMarketDataHistoricalUsingPost', function() {
        it('should call createMarketDataHistoricalUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createMarketDataHistoricalUsingPost call and complete the assertions
          /*
          var historyRequest = new HydrogenIntegrationApi.MdHistoryRequestCO();
          historyRequest.endDate = new Date();
          historyRequest.nucleusSecurityId = ["""00000000-0000-0000-0000-000000000000"];
          historyRequest.product = "";
          historyRequest.startDate = new Date();
          historyRequest.ticker = [""];

          instance.createMarketDataHistoricalUsingPost(historyRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.MdHistoryResponseVO);
            {
              let dataCtr = data.content;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(HydrogenIntegrationApi.MdHistoryItemVO);
                expect(data.adjustedPrice).to.be.a('number');
                expect(data.adjustedPrice).to.be(0.0);
                expect(data.currencyCode).to.be.a('string');
                expect(data.currencyCode).to.be("");
                expect(data._date).to.be.a(Date);
                expect(data._date).to.be(new Date());
                expect(data.nucleusSecurityId).to.be.a('string');
                expect(data.nucleusSecurityId).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.price).to.be.a('number');
                expect(data.price).to.be(0.0);
                expect(data.securityPriceId).to.be.a('string');
                expect(data.securityPriceId).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.ticker).to.be.a('string');
                expect(data.ticker).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createMarketDataQuoteUsingPost', function() {
        it('should call createMarketDataQuoteUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for createMarketDataQuoteUsingPost call and complete the assertions
          /*
          var quoteRequest = new HydrogenIntegrationApi.MdQuoteRequestCO();
          quoteRequest.nucleusSecurityId = ["""00000000-0000-0000-0000-000000000000"];
          quoteRequest.product = "";
          quoteRequest.ticker = [""];
          quoteRequest.type = "delayed";

          instance.createMarketDataQuoteUsingPost(quoteRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenIntegrationApi.MdQuoteResponseVO);
            {
              let dataCtr = data.content;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(HydrogenIntegrationApi.MdQuoteItemVO);
                expect(data.ask).to.be.a('number');
                expect(data.ask).to.be(0.0);
                expect(data.bid).to.be.a('number');
                expect(data.bid).to.be(0.0);
                expect(data.change).to.be.a('number');
                expect(data.change).to.be(0.0);
                expect(data.close).to.be.a('number');
                expect(data.close).to.be(0.0);
                expect(data.currencyCode).to.be.a('string');
                expect(data.currencyCode).to.be("");
                expect(data.dayRange).to.be.a('string');
                expect(data.dayRange).to.be("");
                expect(data.exchange).to.be.a('string');
                expect(data.exchange).to.be("");
                expect(data.high).to.be.a('number');
                expect(data.high).to.be(0.0);
                expect(data.lastTrade).to.be.a('number');
                expect(data.lastTrade).to.be(0.0);
                expect(data.lastTradeTimeStamp).to.be.a(Date);
                expect(data.lastTradeTimeStamp).to.be(new Date());
                expect(data.low).to.be.a('number');
                expect(data.low).to.be(0.0);
                expect(data.marketCap).to.be.a('string');
                expect(data.marketCap).to.be("");
                expect(data.nucleusSecurityId).to.be.a('string');
                expect(data.nucleusSecurityId).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data.open).to.be.a('number');
                expect(data.open).to.be(0.0);
                expect(data.prevClose).to.be.a('number');
                expect(data.prevClose).to.be(0.0);
                expect(data.ticker).to.be.a('string');
                expect(data.ticker).to.be("");
                expect(data.volume).to.be.a('number');
                expect(data.volume).to.be("0");
                expect(data.yearRange).to.be.a('string');
                expect(data.yearRange).to.be("");

                      }
            }

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
