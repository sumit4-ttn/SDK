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
require 'date'

# Unit tests for MoleculeApi::DocumentVerifyResponse
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'DocumentVerifyResponse' do
  before do
    # run before each test
    @instance = MoleculeApi::DocumentVerifyResponse.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of DocumentVerifyResponse' do
    it 'should create an instance of DocumentVerifyResponse' do
      expect(@instance).to be_instance_of(MoleculeApi::DocumentVerifyResponse)
    end
  end
  describe 'test attribute "status"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "doc_file_hash"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end