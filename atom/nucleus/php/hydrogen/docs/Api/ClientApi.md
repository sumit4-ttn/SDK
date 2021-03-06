# com\hydrogen\nucleus\ClientApi

All URIs are relative to *https://sandbox.hydrogenplatform.com/nucleus/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClientHydroUsingPost**](ClientApi.md#createClientHydroUsingPost) | **POST** /client_hydro | Create a client-hydro relationship
[**createClientStatusUsingPost**](ClientApi.md#createClientStatusUsingPost) | **POST** /client_status | Create an client status
[**createClientUsingPost**](ClientApi.md#createClientUsingPost) | **POST** /client | Create a client
[**deleteClientHydroUsingDelete**](ClientApi.md#deleteClientHydroUsingDelete) | **DELETE** /client_hydro/{client_hydro_id} | Delete a client-hydro relationship
[**deleteClientStatusUsingDelete**](ClientApi.md#deleteClientStatusUsingDelete) | **DELETE** /client_status/{client_status_id} | Delete an client status
[**deleteClientUsingDelete**](ClientApi.md#deleteClientUsingDelete) | **DELETE** /client/{client_id} | Delete a client
[**getClientAccountOverviewUsingGet**](ClientApi.md#getClientAccountOverviewUsingGet) | **GET** /client/{client_id}/account_overview | List all client Account overview
[**getClientAdvisorOverviewUsingGet**](ClientApi.md#getClientAdvisorOverviewUsingGet) | **GET** /client/{client_id}/advisor_overview | Advisor overview
[**getClientAllUsingGet**](ClientApi.md#getClientAllUsingGet) | **GET** /client | List all clients
[**getClientAssetSizeUsingGet**](ClientApi.md#getClientAssetSizeUsingGet) | **GET** /client/{client_id}/asset_size | List all client asset sizes
[**getClientGoalOverviewUsingGet**](ClientApi.md#getClientGoalOverviewUsingGet) | **GET** /client/{client_id}/goal_overview | Retrieve client&#39;s goal details
[**getClientHoldingUsingGet**](ClientApi.md#getClientHoldingUsingGet) | **GET** /client/{client_id}/holding | List all client holdings
[**getClientHydroAllUsingGet**](ClientApi.md#getClientHydroAllUsingGet) | **GET** /client_hydro | List all client-hydro relationship
[**getClientHydroUsingGet**](ClientApi.md#getClientHydroUsingGet) | **GET** /client_hydro/{client_hydro_id} | Retrieve a client-hydro relationship
[**getClientStatusAllUsingGet**](ClientApi.md#getClientStatusAllUsingGet) | **GET** /client_status | List all client statuses
[**getClientStatusUsingGet**](ClientApi.md#getClientStatusUsingGet) | **GET** /client_status/{client_status_id} | Retrieve an client status
[**getClientTransactionUsingGet**](ClientApi.md#getClientTransactionUsingGet) | **GET** /client/{client_id}/transaction | List all client transactions
[**getClientUsingGet**](ClientApi.md#getClientUsingGet) | **GET** /client/{client_id} | Retrieve a client
[**getTotalClientsUsingGet**](ClientApi.md#getTotalClientsUsingGet) | **GET** /client/total_clients | total clients
[**updateClientHydroUsingPut**](ClientApi.md#updateClientHydroUsingPut) | **PUT** /client_hydro/{client_hydro_id} | Update a client-hydro relationship
[**updateClientStatusUsingPut**](ClientApi.md#updateClientStatusUsingPut) | **PUT** /client_status/{client_status_id} | Update an client status
[**updateClientUsingPut**](ClientApi.md#updateClientUsingPut) | **PUT** /client/{client_id} | Update a client


# **createClientHydroUsingPost**
> \com\hydrogen\nucleus\Model\ClientHydro createClientHydroUsingPost($client_hydro)

Create a client-hydro relationship

Create an client-hydro relationship under a client.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_hydro = new \com\hydrogen\nucleus\Model\ClientHydro(); // \com\hydrogen\nucleus\Model\ClientHydro | clientHydro

try {
    $result = $apiInstance->createClientHydroUsingPost($client_hydro);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->createClientHydroUsingPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_hydro** | [**\com\hydrogen\nucleus\Model\ClientHydro**](../Model/ClientHydro.md)| clientHydro |

### Return type

[**\com\hydrogen\nucleus\Model\ClientHydro**](../Model/ClientHydro.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createClientStatusUsingPost**
> \com\hydrogen\nucleus\Model\ClientStatus createClientStatusUsingPost($client_status_request)

Create an client status

Create an client status record for an client.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_status_request = new \com\hydrogen\nucleus\Model\ClientStatus(); // \com\hydrogen\nucleus\Model\ClientStatus | clientStatusRequest

try {
    $result = $apiInstance->createClientStatusUsingPost($client_status_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->createClientStatusUsingPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_status_request** | [**\com\hydrogen\nucleus\Model\ClientStatus**](../Model/ClientStatus.md)| clientStatusRequest |

### Return type

[**\com\hydrogen\nucleus\Model\ClientStatus**](../Model/ClientStatus.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createClientUsingPost**
> \com\hydrogen\nucleus\Model\Client createClientUsingPost($client_request)

Create a client

Create a new client, or register a new user, with your firm.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_request = new \com\hydrogen\nucleus\Model\Client(); // \com\hydrogen\nucleus\Model\Client | clientRequest

try {
    $result = $apiInstance->createClientUsingPost($client_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->createClientUsingPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_request** | [**\com\hydrogen\nucleus\Model\Client**](../Model/Client.md)| clientRequest |

### Return type

[**\com\hydrogen\nucleus\Model\Client**](../Model/Client.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteClientHydroUsingDelete**
> deleteClientHydroUsingDelete($client_hydro_id)

Delete a client-hydro relationship

Permanently delete a client-hydro relationship for a Hydro ID and a client.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_hydro_id = "client_hydro_id_example"; // string | UUID client_hydro_id

try {
    $apiInstance->deleteClientHydroUsingDelete($client_hydro_id);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->deleteClientHydroUsingDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_hydro_id** | [**string**](../Model/.md)| UUID client_hydro_id |

### Return type

void (empty response body)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteClientStatusUsingDelete**
> deleteClientStatusUsingDelete($client_status_id)

Delete an client status

Permanently delete an client status record from an client’s history.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_status_id = "client_status_id_example"; // string | UUID client_status_id

try {
    $apiInstance->deleteClientStatusUsingDelete($client_status_id);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->deleteClientStatusUsingDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_status_id** | [**string**](../Model/.md)| UUID client_status_id |

### Return type

void (empty response body)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteClientUsingDelete**
> deleteClientUsingDelete($client_id)

Delete a client

Permanently delete a client registered with your firm. Turns the client's is_active  = 0

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id

try {
    $apiInstance->deleteClientUsingDelete($client_id);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->deleteClientUsingDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |

### Return type

void (empty response body)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientAccountOverviewUsingGet**
> \com\hydrogen\nucleus\Model\ClientAccountVO getClientAccountOverviewUsingGet($client_id, $ascending, $order_by)

List all client Account overview

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id
$ascending = false; // bool | ascending
$order_by = "update_date"; // string | order_by

try {
    $result = $apiInstance->getClientAccountOverviewUsingGet($client_id, $ascending, $order_by);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientAccountOverviewUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |
 **ascending** | **bool**| ascending | [optional] [default to false]
 **order_by** | **string**| order_by | [optional] [default to update_date]

### Return type

[**\com\hydrogen\nucleus\Model\ClientAccountVO**](../Model/ClientAccountVO.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientAdvisorOverviewUsingGet**
> \com\hydrogen\nucleus\Model\AdvisorOverviewVO getClientAdvisorOverviewUsingGet($client_id, $show_clients)

Advisor overview

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id
$show_clients = false; // bool | show_clients

try {
    $result = $apiInstance->getClientAdvisorOverviewUsingGet($client_id, $show_clients);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientAdvisorOverviewUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |
 **show_clients** | **bool**| show_clients | [optional] [default to false]

### Return type

[**\com\hydrogen\nucleus\Model\AdvisorOverviewVO**](../Model/AdvisorOverviewVO.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientAllUsingGet**
> \com\hydrogen\nucleus\Model\PageClient_ getClientAllUsingGet($ascending, $filter, $order_by, $page, $size)

List all clients

Get details for all clients registered with your firm.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ascending = false; // bool | ascending
$filter = "filter_example"; // string | filter
$order_by = "update_date"; // string | order_by
$page = 0; // int | page
$size = 25; // int | size

try {
    $result = $apiInstance->getClientAllUsingGet($ascending, $filter, $order_by, $page, $size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientAllUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | **bool**| ascending | [optional] [default to false]
 **filter** | **string**| filter | [optional]
 **order_by** | **string**| order_by | [optional] [default to update_date]
 **page** | **int**| page | [optional] [default to 0]
 **size** | **int**| size | [optional] [default to 25]

### Return type

[**\com\hydrogen\nucleus\Model\PageClient_**](../Model/PageClient_.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientAssetSizeUsingGet**
> \com\hydrogen\nucleus\Model\AvailableDateDoubleVO[] getClientAssetSizeUsingGet($client_id, $end_date, $exclude_subledger, $get_latest, $sort_type, $start_date)

List all client asset sizes

Get a list of asset sizes per date for a client.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id
$end_date = new \DateTime("null"); // \DateTime | end date
$exclude_subledger = false; // bool | exclude_subledger
$get_latest = true; // bool | true or false
$sort_type = "sort_type_example"; // string | Quarter (Q), Monthly (M) , Annually (Y), Daily (D) --caps matter, codes in ()
$start_date = new \DateTime("null"); // \DateTime | start date

try {
    $result = $apiInstance->getClientAssetSizeUsingGet($client_id, $end_date, $exclude_subledger, $get_latest, $sort_type, $start_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientAssetSizeUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |
 **end_date** | **\DateTime**| end date | [optional] [default to null]
 **exclude_subledger** | **bool**| exclude_subledger | [optional] [default to false]
 **get_latest** | **bool**| true or false | [optional]
 **sort_type** | **string**| Quarter (Q), Monthly (M) , Annually (Y), Daily (D) --caps matter, codes in () | [optional]
 **start_date** | **\DateTime**| start date | [optional] [default to null]

### Return type

[**\com\hydrogen\nucleus\Model\AvailableDateDoubleVO[]**](../Model/AvailableDateDoubleVO.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientGoalOverviewUsingGet**
> \com\hydrogen\nucleus\Model\VClientGoalViewData getClientGoalOverviewUsingGet($client_id, $portfolio_goal)

Retrieve client's goal details

Retrieve client's goal details

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id
$portfolio_goal = false; // bool | portfolio_goal

try {
    $result = $apiInstance->getClientGoalOverviewUsingGet($client_id, $portfolio_goal);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientGoalOverviewUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |
 **portfolio_goal** | **bool**| portfolio_goal | [optional] [default to false]

### Return type

[**\com\hydrogen\nucleus\Model\VClientGoalViewData**](../Model/VClientGoalViewData.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientHoldingUsingGet**
> \com\hydrogen\nucleus\Model\PortfolioHoldingAgg[] getClientHoldingUsingGet($client_id, $end_date, $get_latest, $start_date)

List all client holdings

Get the information for all the securities that are currently being held by a client registered with your firm.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id
$end_date = "end_date_example"; // string | end date - yyyy-mm-dd
$get_latest = true; // bool | true or false
$start_date = "start_date_example"; // string | start date - yyyy-mm-dd

try {
    $result = $apiInstance->getClientHoldingUsingGet($client_id, $end_date, $get_latest, $start_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientHoldingUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |
 **end_date** | **string**| end date - yyyy-mm-dd | [optional]
 **get_latest** | **bool**| true or false | [optional]
 **start_date** | **string**| start date - yyyy-mm-dd | [optional]

### Return type

[**\com\hydrogen\nucleus\Model\PortfolioHoldingAgg[]**](../Model/PortfolioHoldingAgg.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientHydroAllUsingGet**
> \com\hydrogen\nucleus\Model\PageClientHydro_ getClientHydroAllUsingGet($ascending, $filter, $order_by, $page, $size)

List all client-hydro relationship

Get information for all client-hydro relationships for all clients defined for your firm.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ascending = false; // bool | ascending
$filter = "filter_example"; // string | filter
$order_by = "update_date"; // string | order_by
$page = 0; // int | page
$size = 25; // int | size

try {
    $result = $apiInstance->getClientHydroAllUsingGet($ascending, $filter, $order_by, $page, $size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientHydroAllUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | **bool**| ascending | [optional] [default to false]
 **filter** | **string**| filter | [optional]
 **order_by** | **string**| order_by | [optional] [default to update_date]
 **page** | **int**| page | [optional] [default to 0]
 **size** | **int**| size | [optional] [default to 25]

### Return type

[**\com\hydrogen\nucleus\Model\PageClientHydro_**](../Model/PageClientHydro_.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientHydroUsingGet**
> \com\hydrogen\nucleus\Model\ClientHydro getClientHydroUsingGet($client_hydro_id)

Retrieve a client-hydro relationship

Retrieve the information for a specific client-hydro relationship.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_hydro_id = "client_hydro_id_example"; // string | UUID client_hydro_id

try {
    $result = $apiInstance->getClientHydroUsingGet($client_hydro_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientHydroUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_hydro_id** | [**string**](../Model/.md)| UUID client_hydro_id |

### Return type

[**\com\hydrogen\nucleus\Model\ClientHydro**](../Model/ClientHydro.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientStatusAllUsingGet**
> \com\hydrogen\nucleus\Model\PageClientStatus_ getClientStatusAllUsingGet($ascending, $filter, $order_by, $page, $size)

List all client statuses

Get the client status history information for all clients.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ascending = false; // bool | ascending
$filter = "filter_example"; // string | filter
$order_by = "update_date"; // string | order_by
$page = 0; // int | page
$size = 25; // int | size

try {
    $result = $apiInstance->getClientStatusAllUsingGet($ascending, $filter, $order_by, $page, $size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientStatusAllUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | **bool**| ascending | [optional] [default to false]
 **filter** | **string**| filter | [optional]
 **order_by** | **string**| order_by | [optional] [default to update_date]
 **page** | **int**| page | [optional] [default to 0]
 **size** | **int**| size | [optional] [default to 25]

### Return type

[**\com\hydrogen\nucleus\Model\PageClientStatus_**](../Model/PageClientStatus_.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientStatusUsingGet**
> \com\hydrogen\nucleus\Model\ClientStatus getClientStatusUsingGet($client_status_id)

Retrieve an client status

Retrieve the information for a specific client status record for an client.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_status_id = "client_status_id_example"; // string | UUID client_status_id

try {
    $result = $apiInstance->getClientStatusUsingGet($client_status_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientStatusUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_status_id** | [**string**](../Model/.md)| UUID client_status_id |

### Return type

[**\com\hydrogen\nucleus\Model\ClientStatus**](../Model/ClientStatus.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientTransactionUsingGet**
> \com\hydrogen\nucleus\Model\PagePortfolioTransaction_ getClientTransactionUsingGet($client_id, $ascending, $end_date, $order_by, $page, $size, $start_date)

List all client transactions

Get the information for all transactions under a client registered with your firm.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id
$ascending = false; // bool | ascending
$end_date = new \DateTime("null"); // \DateTime | end_date
$order_by = "update_date"; // string | order_by
$page = 0; // int | page
$size = 25; // int | size
$start_date = new \DateTime("null"); // \DateTime | start_date

try {
    $result = $apiInstance->getClientTransactionUsingGet($client_id, $ascending, $end_date, $order_by, $page, $size, $start_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientTransactionUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |
 **ascending** | **bool**| ascending | [optional] [default to false]
 **end_date** | **\DateTime**| end_date | [optional] [default to null]
 **order_by** | **string**| order_by | [optional] [default to update_date]
 **page** | **int**| page | [optional] [default to 0]
 **size** | **int**| size | [optional] [default to 25]
 **start_date** | **\DateTime**| start_date | [optional] [default to null]

### Return type

[**\com\hydrogen\nucleus\Model\PagePortfolioTransaction_**](../Model/PagePortfolioTransaction_.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getClientUsingGet**
> \com\hydrogen\nucleus\Model\Client getClientUsingGet($client_id)

Retrieve a client

Retrieve the information for a client registered with your firm.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_id = "client_id_example"; // string | UUID client_id

try {
    $result = $apiInstance->getClientUsingGet($client_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getClientUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | [**string**](../Model/.md)| UUID client_id |

### Return type

[**\com\hydrogen\nucleus\Model\Client**](../Model/Client.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTotalClientsUsingGet**
> \com\hydrogen\nucleus\Model\ClientAnalyticsResponse getTotalClientsUsingGet($as_of_date, $client_id, $end_date, $show_history, $start_date)

total clients

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$as_of_date = new \DateTime("#{new java.util.Date()}"); // \DateTime | as_of_date
$client_id = "client_id_example"; // string | client_id
$end_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | end_date
$show_history = false; // bool | show_history
$start_date = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime | start_date

try {
    $result = $apiInstance->getTotalClientsUsingGet($as_of_date, $client_id, $end_date, $show_history, $start_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->getTotalClientsUsingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **as_of_date** | **\DateTime**| as_of_date | [optional] [default to #{new java.util.Date()}]
 **client_id** | **string**| client_id | [optional]
 **end_date** | **\DateTime**| end_date | [optional]
 **show_history** | **bool**| show_history | [optional] [default to false]
 **start_date** | **\DateTime**| start_date | [optional]

### Return type

[**\com\hydrogen\nucleus\Model\ClientAnalyticsResponse**](../Model/ClientAnalyticsResponse.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateClientHydroUsingPut**
> \com\hydrogen\nucleus\Model\ClientHydro updateClientHydroUsingPut($client_hydro, $client_hydro_id)

Update a client-hydro relationship

Update the information for a client-hydro relationship.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_hydro = new \com\hydrogen\nucleus\Model\ClientHydro(); // \com\hydrogen\nucleus\Model\ClientHydro | client_hydro
$client_hydro_id = "client_hydro_id_example"; // string | UUID client_hydro_id

try {
    $result = $apiInstance->updateClientHydroUsingPut($client_hydro, $client_hydro_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->updateClientHydroUsingPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_hydro** | [**\com\hydrogen\nucleus\Model\ClientHydro**](../Model/ClientHydro.md)| client_hydro |
 **client_hydro_id** | [**string**](../Model/.md)| UUID client_hydro_id |

### Return type

[**\com\hydrogen\nucleus\Model\ClientHydro**](../Model/ClientHydro.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateClientStatusUsingPut**
> \com\hydrogen\nucleus\Model\ClientStatus updateClientStatusUsingPut($client_status, $client_status_id)

Update an client status

Update an client status record for an client.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client_status = new \com\hydrogen\nucleus\Model\ClientStatus(); // \com\hydrogen\nucleus\Model\ClientStatus | client_status
$client_status_id = "client_status_id_example"; // string | UUID client_status_id

try {
    $result = $apiInstance->updateClientStatusUsingPut($client_status, $client_status_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->updateClientStatusUsingPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_status** | [**\com\hydrogen\nucleus\Model\ClientStatus**](../Model/ClientStatus.md)| client_status |
 **client_status_id** | [**string**](../Model/.md)| UUID client_status_id |

### Return type

[**\com\hydrogen\nucleus\Model\ClientStatus**](../Model/ClientStatus.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateClientUsingPut**
> \com\hydrogen\nucleus\Model\Client updateClientUsingPut($client, $client_id)

Update a client

Update the information for a client registered with your firm.

### Example
```php
<?php
require_once('../vendor/autoload.php');
try {
// Use one of the below method to generate oauth token
// 1) Generate Token for client credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::getDefaultConfiguration()
            ->createClientCredential("MYCLIENTID",
             "MYCLIENTSECRET");
// 2) Generate Token for password credentials
$config =
        \com\hydrogen\nucleus\AuthApiClient::
        getDefaultConfiguration()->createPasswordCredential("MYCLIENTID","MYCLIENTSECRET"
                      ,"MYUSERNAME", "MYPASSWORD");
} catch (\com\hydrogen\nucleus\ApiException $e) {
    print_r($e);
}
$apiInstance = new com\hydrogen\nucleus\Api\ClientApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$client = new \com\hydrogen\nucleus\Model\Client(); // \com\hydrogen\nucleus\Model\Client | client
$client_id = "client_id_example"; // string | UUID client_id

try {
    $result = $apiInstance->updateClientUsingPut($client, $client_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ClientApi->updateClientUsingPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | [**\com\hydrogen\nucleus\Model\Client**](../Model/Client.md)| client |
 **client_id** | [**string**](../Model/.md)| UUID client_id |

### Return type

[**\com\hydrogen\nucleus\Model\Client**](../Model/Client.md)

### Authorization

[oauth2](../../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

