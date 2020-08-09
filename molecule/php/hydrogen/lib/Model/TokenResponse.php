<?php
/**
 * TokenResponse
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\molecule
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Molecule API Documentation
 *
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.14
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\molecule\Model;

use \ArrayAccess;
use \com\hydrogen\molecule\ObjectSerializer;

/**
 * TokenResponse Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\molecule
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class TokenResponse implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'TokenResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'id' => 'string',
        'name' => 'string',
        'symbol' => 'string',
        'nucleus_model_id' => 'string',
        'owner_wallet_id' => 'string',
        'is_mintable' => 'bool',
        'is_burnable' => 'bool',
        'total_supply' => 'double',
        'circulating_supply' => 'double',
        'whitelist_address' => 'string',
        'contract_address' => 'string',
        'crowdsale_address' => 'string',
        'is_active' => 'bool',
        'secondary_id' => 'string',
        'record_status' => 'string',
        'offering_settings' => '\com\hydrogen\molecule\Model\TokenResponseOfferingSettings',
        'metadata' => 'object',
        'restrictions' => 'object',
        'create_date' => '\DateTime',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'id' => 'uuid',
        'name' => null,
        'symbol' => null,
        'nucleus_model_id' => 'uuid',
        'owner_wallet_id' => 'uuid',
        'is_mintable' => null,
        'is_burnable' => null,
        'total_supply' => 'double',
        'circulating_supply' => 'double',
        'whitelist_address' => null,
        'contract_address' => null,
        'crowdsale_address' => null,
        'is_active' => null,
        'secondary_id' => null,
        'record_status' => null,
        'offering_settings' => null,
        'metadata' => null,
        'restrictions' => null,
        'create_date' => 'date-time',
        'update_date' => 'date-time'
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'id' => 'id',
        'name' => 'name',
        'symbol' => 'symbol',
        'nucleus_model_id' => 'nucleus_model_id',
        'owner_wallet_id' => 'owner_wallet_id',
        'is_mintable' => 'is_mintable',
        'is_burnable' => 'is_burnable',
        'total_supply' => 'total_supply',
        'circulating_supply' => 'circulating_supply',
        'whitelist_address' => 'whitelist_address',
        'contract_address' => 'contract_address',
        'crowdsale_address' => 'crowdsale_address',
        'is_active' => 'is_active',
        'secondary_id' => 'secondary_id',
        'record_status' => 'record_status',
        'offering_settings' => 'offering_settings',
        'metadata' => 'metadata',
        'restrictions' => 'restrictions',
        'create_date' => 'create_date',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'name' => 'setName',
        'symbol' => 'setSymbol',
        'nucleus_model_id' => 'setNucleusModelId',
        'owner_wallet_id' => 'setOwnerWalletId',
        'is_mintable' => 'setIsMintable',
        'is_burnable' => 'setIsBurnable',
        'total_supply' => 'setTotalSupply',
        'circulating_supply' => 'setCirculatingSupply',
        'whitelist_address' => 'setWhitelistAddress',
        'contract_address' => 'setContractAddress',
        'crowdsale_address' => 'setCrowdsaleAddress',
        'is_active' => 'setIsActive',
        'secondary_id' => 'setSecondaryId',
        'record_status' => 'setRecordStatus',
        'offering_settings' => 'setOfferingSettings',
        'metadata' => 'setMetadata',
        'restrictions' => 'setRestrictions',
        'create_date' => 'setCreateDate',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'name' => 'getName',
        'symbol' => 'getSymbol',
        'nucleus_model_id' => 'getNucleusModelId',
        'owner_wallet_id' => 'getOwnerWalletId',
        'is_mintable' => 'getIsMintable',
        'is_burnable' => 'getIsBurnable',
        'total_supply' => 'getTotalSupply',
        'circulating_supply' => 'getCirculatingSupply',
        'whitelist_address' => 'getWhitelistAddress',
        'contract_address' => 'getContractAddress',
        'crowdsale_address' => 'getCrowdsaleAddress',
        'is_active' => 'getIsActive',
        'secondary_id' => 'getSecondaryId',
        'record_status' => 'getRecordStatus',
        'offering_settings' => 'getOfferingSettings',
        'metadata' => 'getMetadata',
        'restrictions' => 'getRestrictions',
        'create_date' => 'getCreateDate',
        'update_date' => 'getUpdateDate'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['name'] = isset($data['name']) ? $data['name'] : null;
        $this->container['symbol'] = isset($data['symbol']) ? $data['symbol'] : null;
        $this->container['nucleus_model_id'] = isset($data['nucleus_model_id']) ? $data['nucleus_model_id'] : null;
        $this->container['owner_wallet_id'] = isset($data['owner_wallet_id']) ? $data['owner_wallet_id'] : null;
        $this->container['is_mintable'] = isset($data['is_mintable']) ? $data['is_mintable'] : null;
        $this->container['is_burnable'] = isset($data['is_burnable']) ? $data['is_burnable'] : null;
        $this->container['total_supply'] = isset($data['total_supply']) ? $data['total_supply'] : null;
        $this->container['circulating_supply'] = isset($data['circulating_supply']) ? $data['circulating_supply'] : null;
        $this->container['whitelist_address'] = isset($data['whitelist_address']) ? $data['whitelist_address'] : null;
        $this->container['contract_address'] = isset($data['contract_address']) ? $data['contract_address'] : null;
        $this->container['crowdsale_address'] = isset($data['crowdsale_address']) ? $data['crowdsale_address'] : null;
        $this->container['is_active'] = isset($data['is_active']) ? $data['is_active'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['record_status'] = isset($data['record_status']) ? $data['record_status'] : null;
        $this->container['offering_settings'] = isset($data['offering_settings']) ? $data['offering_settings'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['restrictions'] = isset($data['restrictions']) ? $data['restrictions'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['update_date'] = isset($data['update_date']) ? $data['update_date'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets id
     *
     * @return string
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets symbol
     *
     * @return string
     */
    public function getSymbol()
    {
        return $this->container['symbol'];
    }

    /**
     * Sets symbol
     *
     * @param string $symbol symbol
     *
     * @return $this
     */
    public function setSymbol($symbol)
    {
        $this->container['symbol'] = $symbol;

        return $this;
    }

    /**
     * Gets nucleus_model_id
     *
     * @return string
     */
    public function getNucleusModelId()
    {
        return $this->container['nucleus_model_id'];
    }

    /**
     * Sets nucleus_model_id
     *
     * @param string $nucleus_model_id nucleus_model_id
     *
     * @return $this
     */
    public function setNucleusModelId($nucleus_model_id)
    {
        $this->container['nucleus_model_id'] = $nucleus_model_id;

        return $this;
    }

    /**
     * Gets owner_wallet_id
     *
     * @return string
     */
    public function getOwnerWalletId()
    {
        return $this->container['owner_wallet_id'];
    }

    /**
     * Sets owner_wallet_id
     *
     * @param string $owner_wallet_id owner_wallet_id
     *
     * @return $this
     */
    public function setOwnerWalletId($owner_wallet_id)
    {
        $this->container['owner_wallet_id'] = $owner_wallet_id;

        return $this;
    }

    /**
     * Gets is_mintable
     *
     * @return bool
     */
    public function getIsMintable()
    {
        return $this->container['is_mintable'];
    }

    /**
     * Sets is_mintable
     *
     * @param bool $is_mintable is_mintable
     *
     * @return $this
     */
    public function setIsMintable($is_mintable)
    {
        $this->container['is_mintable'] = $is_mintable;

        return $this;
    }

    /**
     * Gets is_burnable
     *
     * @return bool
     */
    public function getIsBurnable()
    {
        return $this->container['is_burnable'];
    }

    /**
     * Sets is_burnable
     *
     * @param bool $is_burnable is_burnable
     *
     * @return $this
     */
    public function setIsBurnable($is_burnable)
    {
        $this->container['is_burnable'] = $is_burnable;

        return $this;
    }

    /**
     * Gets total_supply
     *
     * @return double
     */
    public function getTotalSupply()
    {
        return $this->container['total_supply'];
    }

    /**
     * Sets total_supply
     *
     * @param double $total_supply total_supply
     *
     * @return $this
     */
    public function setTotalSupply($total_supply)
    {
        $this->container['total_supply'] = $total_supply;

        return $this;
    }

    /**
     * Gets circulating_supply
     *
     * @return double
     */
    public function getCirculatingSupply()
    {
        return $this->container['circulating_supply'];
    }

    /**
     * Sets circulating_supply
     *
     * @param double $circulating_supply circulating_supply
     *
     * @return $this
     */
    public function setCirculatingSupply($circulating_supply)
    {
        $this->container['circulating_supply'] = $circulating_supply;

        return $this;
    }


    /**
     * Gets whitelist_address
     *
     * @return string
     */
    public function getWhitelistAddress()
    {
        return $this->container['whitelist_address'];
    }

    /**
     * Sets whitelist_address
     *
     * @param string $whitelist_address whitelist_address
     *
     * @return $this
     */
    public function setWhitelistAddress($whitelist_address)
    {
        $this->container['whitelist_address'] = $whitelist_address;

        return $this;
    }

    /**
     * Gets contract_address
     *
     * @return string
     */
    public function getContractAddress()
    {
        return $this->container['contract_address'];
    }

    /**
     * Sets contract_address
     *
     * @param string $contract_address contract_address
     *
     * @return $this
     */
    public function setContractAddress($contract_address)
    {
        $this->container['contract_address'] = $contract_address;

        return $this;
    }

    /**
     * Gets crowdsale_address
     *
     * @return string
     */
    public function getCrowdsaleAddress()
    {
        return $this->container['crowdsale_address'];
    }

    /**
     * Sets crowdsale_address
     *
     * @param string $crowdsale_address crowdsale_address
     *
     * @return $this
     */
    public function setCrowdsaleAddress($crowdsale_address)
    {
        $this->container['crowdsale_address'] = $crowdsale_address;

        return $this;
    }

    /**
     * Gets is_active
     *
     * @return bool
     */
    public function getIsActive()
    {
        return $this->container['is_active'];
    }

    /**
     * Sets is_active
     *
     * @param bool $is_active is_active
     *
     * @return $this
     */
    public function setIsActive($is_active)
    {
        $this->container['is_active'] = $is_active;

        return $this;
    }

    /**
     * Gets secondary_id
     *
     * @return string
     */
    public function getSecondaryId()
    {
        return $this->container['secondary_id'];
    }

    /**
     * Sets secondary_id
     *
     * @param string $secondary_id secondary_id
     *
     * @return $this
     */
    public function setSecondaryId($secondary_id)
    {
        $this->container['secondary_id'] = $secondary_id;

        return $this;
    }

    /**
     * Gets record_status
     *
     * @return string
     */
    public function getRecordStatus()
    {
        return $this->container['record_status'];
    }

    /**
     * Sets record_status
     *
     * @param string $record_status record_status
     *
     * @return $this
     */
    public function setRecordStatus($record_status)
    {
        $this->container['record_status'] = $record_status;

        return $this;
    }

    /**
     * Gets offering_settings
     *
     * @return \com\hydrogen\molecule\Model\TokenResponseOfferingSettings
     */
    public function getOfferingSettings()
    {
        return $this->container['offering_settings'];
    }

    /**
     * Sets offering_settings
     *
     * @param \com\hydrogen\molecule\Model\TokenResponseOfferingSettings $offering_settings offering_settings
     *
     * @return $this
     */
    public function setOfferingSettings($offering_settings)
    {
        $this->container['offering_settings'] = $offering_settings;

        return $this;
    }

    /**
     * Gets metadata
     *
     * @return object
     */
    public function getMetadata()
    {
        return $this->container['metadata'];
    }

    /**
     * Sets metadata
     *
     * @param object $metadata metadata
     *
     * @return $this
     */
    public function setMetadata($metadata)
    {
        $this->container['metadata'] = $metadata;

        return $this;
    }

    /**
     * Gets restrictions
     *
     * @return object
     */
    public function getRestrictions()
    {
        return $this->container['restrictions'];
    }

    /**
     * Sets restrictions
     *
     * @param object $restrictions restrictions
     *
     * @return $this
     */
    public function setRestrictions($restrictions)
    {
        $this->container['restrictions'] = $restrictions;

        return $this;
    }

    /**
     * Gets create_date
     *
     * @return \DateTime
     */
    public function getCreateDate()
    {
        return $this->container['create_date'];
    }

    /**
     * Sets create_date
     *
     * @param \DateTime $create_date create_date
     *
     * @return $this
     */
    public function setCreateDate($create_date)
    {
        $this->container['create_date'] = $create_date;

        return $this;
    }

    /**
     * Gets update_date
     *
     * @return \DateTime
     */
    public function getUpdateDate()
    {
        return $this->container['update_date'];
    }

    /**
     * Sets update_date
     *
     * @param \DateTime $update_date update_date
     *
     * @return $this
     */
    public function setUpdateDate($update_date)
    {
        $this->container['update_date'] = $update_date;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}

