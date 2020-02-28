=begin
#Hydrogen Molecule API

#The Hydrogen Molecule API

OpenAPI spec version: 1.0.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.8-SNAPSHOT

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for MoleculeApi::WalletPermissionUpdatePayload
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'WalletPermissionUpdatePayload' do
  before do
    # run before each test
    @instance = MoleculeApi::WalletPermissionUpdatePayload.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of WalletPermissionUpdatePayload' do
    it 'should create an instance of WalletPermissionUpdatePayload' do
      expect(@instance).to be_instance_of(MoleculeApi::WalletPermissionUpdatePayload)
    end
  end
  describe 'test attribute "nucleus_client_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "permission_type"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end