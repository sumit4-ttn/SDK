# NucleusApi::CardApi

All URIs are relative to *https://sandbox.hydrogenplatform.com/nucleus/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_card_program_using_post**](CardApi.md#create_card_program_using_post) | **POST** /card_program | Create a cardProgram request
[**create_card_using_post**](CardApi.md#create_card_using_post) | **POST** /card | Create a card request
[**delete_card_program_using_delete**](CardApi.md#delete_card_program_using_delete) | **DELETE** /card_program/{card_program_id} | Delete an cardProgram
[**delete_card_using_delete**](CardApi.md#delete_card_using_delete) | **DELETE** /card/{card_id} | Delete a card request
[**get_card_all_using_get**](CardApi.md#get_card_all_using_get) | **GET** /card | List all card requests
[**get_card_program_all_using_get**](CardApi.md#get_card_program_all_using_get) | **GET** /card_program | List all cardProgram
[**get_card_program_using_get**](CardApi.md#get_card_program_using_get) | **GET** /card_program/{card_program_id} | Retrieve an cardProgram
[**get_card_using_get**](CardApi.md#get_card_using_get) | **GET** /card/{card_id} | Retrieve a card request
[**update_card_program_using_put**](CardApi.md#update_card_program_using_put) | **PUT** /card_program/{card_program_id} | Update an cardProgram
[**update_card_using_put**](CardApi.md#update_card_using_put) | **PUT** /card/{card_id} | Update a card request


# **create_card_program_using_post**
> CardProgram create_card_program_using_post(card_program_request)

Create a cardProgram request

Create a new cardProgram request.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card_program_request = NucleusApi::CardProgram.new # CardProgram | cardProgramRequest


begin
  #Create a cardProgram request
  result = api_instance.create_card_program_using_post(card_program_request)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->create_card_program_using_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_program_request** | [**CardProgram**](CardProgram.md)| cardProgramRequest | 

### Return type

[**CardProgram**](CardProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*



# **create_card_using_post**
> Card create_card_using_post(card_request, opts)

Create a card request

Create a new card request.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card_request = NucleusApi::Card.new # Card | cardRequest

opts = { 
  authorization: 'authorization_example' # String | Authorization
}

begin
  #Create a card request
  result = api_instance.create_card_using_post(card_request, opts)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->create_card_using_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_request** | [**Card**](Card.md)| cardRequest | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**Card**](Card.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*



# **delete_card_program_using_delete**
> delete_card_program_using_delete(card_program_id)

Delete an cardProgram

Permanently delete an cardProgram.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card_program_id = 'card_program_id_example' # String | UUID card_program_id


begin
  #Delete an cardProgram
  api_instance.delete_card_program_using_delete(card_program_id)
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->delete_card_program_using_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_program_id** | [**String**](.md)| UUID card_program_id | 

### Return type

nil (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*



# **delete_card_using_delete**
> delete_card_using_delete(card_id)

Delete a card request

Permanently delete a card request.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card_id = 'card_id_example' # String | UUID card_id


begin
  #Delete a card request
  api_instance.delete_card_using_delete(card_id)
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->delete_card_using_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | [**String**](.md)| UUID card_id | 

### Return type

nil (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*



# **get_card_all_using_get**
> PageCard get_card_all_using_get(opts)

List all card requests

Get the information for all card requests.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

opts = { 
  ascending: false, # BOOLEAN | ascending
  filter: 'filter_example', # String | filter
  order_by: 'update_date', # String | order_by
  page: 0, # Integer | page
  size: 25 # Integer | size
}

begin
  #List all card requests
  result = api_instance.get_card_all_using_get(opts)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->get_card_all_using_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | **BOOLEAN**| ascending | [optional] [default to false]
 **filter** | **String**| filter | [optional] 
 **order_by** | **String**| order_by | [optional] [default to update_date]
 **page** | **Integer**| page | [optional] [default to 0]
 **size** | **Integer**| size | [optional] [default to 25]

### Return type

[**PageCard**](PageCard.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*



# **get_card_program_all_using_get**
> PageCardProgram get_card_program_all_using_get(opts)

List all cardProgram

Get information for all cardProgram.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

opts = { 
  ascending: false, # BOOLEAN | ascending
  filter: 'filter_example', # String | filter
  order_by: 'update_date', # String | order_by
  page: 0, # Integer | page
  size: 25 # Integer | size
}

begin
  #List all cardProgram
  result = api_instance.get_card_program_all_using_get(opts)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->get_card_program_all_using_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | **BOOLEAN**| ascending | [optional] [default to false]
 **filter** | **String**| filter | [optional] 
 **order_by** | **String**| order_by | [optional] [default to update_date]
 **page** | **Integer**| page | [optional] [default to 0]
 **size** | **Integer**| size | [optional] [default to 25]

### Return type

[**PageCardProgram**](PageCardProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*



# **get_card_program_using_get**
> CardProgram get_card_program_using_get(card_program_id)

Retrieve an cardProgram

Retrieve the information for a specific cardProgram.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card_program_id = 'card_program_id_example' # String | UUID card_program_id


begin
  #Retrieve an cardProgram
  result = api_instance.get_card_program_using_get(card_program_id)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->get_card_program_using_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_program_id** | [**String**](.md)| UUID card_program_id | 

### Return type

[**CardProgram**](CardProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*



# **get_card_using_get**
> Card get_card_using_get(card_id)

Retrieve a card request

Retrieve the information for a card request.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card_id = 'card_id_example' # String | UUID card_id


begin
  #Retrieve a card request
  result = api_instance.get_card_using_get(card_id)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->get_card_using_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | [**String**](.md)| UUID card_id | 

### Return type

[**Card**](Card.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*



# **update_card_program_using_put**
> CardProgram update_card_program_using_put(card_program, card_program_id)

Update an cardProgram

Update the information for an cardProgram.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card_program = NucleusApi::CardProgram.new # CardProgram | card_program

card_program_id = 'card_program_id_example' # String | UUID card_program_id


begin
  #Update an cardProgram
  result = api_instance.update_card_program_using_put(card_program, card_program_id)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->update_card_program_using_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_program** | [**CardProgram**](CardProgram.md)| card_program | 
 **card_program_id** | [**String**](.md)| UUID card_program_id | 

### Return type

[**CardProgram**](CardProgram.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*



# **update_card_using_put**
> Card update_card_using_put(card, card_id)

Update a card request

Update the information for a card request.

### Example
```ruby
# load the gem
require 'nucleus_api'
# Setup authorization
NucleusApi.configure do |config|
# Use one of the below method to generate oauth token        
# Creating a token for grant_type=client_credentials
 config.create_client_credential("CLIENT_ID", "CLIENT_SECRET");
# Creating a token for grant_type=password
 config.create_password_credential("CLIENT_ID", "CLIENT_SECRET", "USERNAME", "PASSWORD");
end


api_instance = NucleusApi::CardApi.new

card = NucleusApi::Card.new # Card | card

card_id = 'card_id_example' # String | UUID card_id


begin
  #Update a card request
  result = api_instance.update_card_using_put(card, card_id)
  p result
rescue NucleusApi::ApiError => e
  puts "Exception when calling CardApi->update_card_using_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card** | [**Card**](Card.md)| card | 
 **card_id** | [**String**](.md)| UUID card_id | 

### Return type

[**Card**](Card.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*



