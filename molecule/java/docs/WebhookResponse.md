
# WebhookResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**UUID**](UUID.md) |  |  [optional]
**url** | **String** |  |  [optional]
**moleculeService** | [**List&lt;MoleculeServiceEnum&gt;**](#List&lt;MoleculeServiceEnum&gt;) |  |  [optional]
**isActive** | **Boolean** |  |  [optional]
**secret** | **String** |  |  [optional]
**recordStatus** | **String** |  |  [optional]
**createDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**updateDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]


<a name="List<MoleculeServiceEnum>"></a>
## Enum: List&lt;MoleculeServiceEnum&gt;
Name | Value
---- | -----
WHITELIST_ADMIN | &quot;whitelist_admin&quot;
WHITELISTED | &quot;whitelisted&quot;
TOKEN_TRANSFER | &quot;token_transfer&quot;
TOKEN_BALANCE | &quot;token_balance&quot;
TOKEN_SUPPLY_BALANCE | &quot;token_supply_balance&quot;
CURRENCY_TRANSFER | &quot;currency_transfer&quot;
CURRENCY_BALANCE | &quot;currency_balance&quot;
TRANSACTION | &quot;transaction&quot;



