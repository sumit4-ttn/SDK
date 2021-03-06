=begin
#Molecule API Documentation

#The Hydrogen Molecule API

OpenAPI spec version: 1.3.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'spec_helper'
require 'json'

# Unit tests for MoleculeApi::WalletPermissionApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'WalletPermissionApi' do
  before do
    # run before each test
    @instance = MoleculeApi::WalletPermissionApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of WalletPermissionApi' do
    it 'should create an instance of WalletPermissionApi' do
      expect(@instance).to be_instance_of(MoleculeApi::WalletPermissionApi)
    end
  end

  # unit tests for get_wallet_permission_all_using_get
  # Fetch Wallet list with client&#39;s permissions
  # @param [Hash] opts the optional parameters
  # @option opts [String] :nucleus_client_id To filter response wallet list by client&#39;s ID
  # @option opts [BOOLEAN] :is_active To filter response for active wallets
  # @option opts [Integer] :page To filter response wallet list page number
  # @option opts [Integer] :size Number of records per page
  # @option opts [String] :order_by Field to sort record list
  # @option opts [BOOLEAN] :ascending Sorting order
  # @option opts [BOOLEAN] :get_latest To fetch latest (one) record
  # @return [PageWalletPermissionResponse]
  describe 'get_wallet_permission_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_wallet_permission_using_get
  # Fetch Wallet&#39;s client permissions details
  # @param wallet_id Wallet ID
  # @param [Hash] opts the optional parameters
  # @return [WalletPermissionResponse]
  describe 'get_wallet_permission_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_wallet_permission_using_put
  # Update client&#39;s permission for provided Wallet
  # @param wallet_id Wallet ID
  # @param client_permissions Client&#39;s permission to be updated
  # @param [Hash] opts the optional parameters
  # @return [WalletPermissionResponse]
  describe 'update_wallet_permission_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
