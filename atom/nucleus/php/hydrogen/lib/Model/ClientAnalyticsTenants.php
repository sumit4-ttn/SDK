<?php
/**
 * ClientAnalyticsTenants
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Atom API
 *
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.14
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\nucleus\Model;

use \ArrayAccess;
use \com\hydrogen\nucleus\ObjectSerializer;

/**
 * ClientAnalyticsTenants Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class ClientAnalyticsTenants implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'ClientAnalyticsTenants';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'client_id' => 'string',
        'total_nucleus_clients' => 'int',
        'total_nucleus_clients_active' => 'int',
        'total_nucleus_clients_inactive' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'client_id' => null,
        'total_nucleus_clients' => 'int64',
        'total_nucleus_clients_active' => 'int64',
        'total_nucleus_clients_inactive' => 'int64'
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
        'client_id' => 'client_id',
        'total_nucleus_clients' => 'total_nucleus_clients',
        'total_nucleus_clients_active' => 'total_nucleus_clients_active',
        'total_nucleus_clients_inactive' => 'total_nucleus_clients_inactive'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'client_id' => 'setClientId',
        'total_nucleus_clients' => 'setTotalNucleusClients',
        'total_nucleus_clients_active' => 'setTotalNucleusClientsActive',
        'total_nucleus_clients_inactive' => 'setTotalNucleusClientsInactive'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'client_id' => 'getClientId',
        'total_nucleus_clients' => 'getTotalNucleusClients',
        'total_nucleus_clients_active' => 'getTotalNucleusClientsActive',
        'total_nucleus_clients_inactive' => 'getTotalNucleusClientsInactive'
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
        $this->container['client_id'] = isset($data['client_id']) ? $data['client_id'] : null;
        $this->container['total_nucleus_clients'] = isset($data['total_nucleus_clients']) ? $data['total_nucleus_clients'] : null;
        $this->container['total_nucleus_clients_active'] = isset($data['total_nucleus_clients_active']) ? $data['total_nucleus_clients_active'] : null;
        $this->container['total_nucleus_clients_inactive'] = isset($data['total_nucleus_clients_inactive']) ? $data['total_nucleus_clients_inactive'] : null;
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
     * Gets client_id
     *
     * @return string
     */
    public function getClientId()
    {
        return $this->container['client_id'];
    }

    /**
     * Sets client_id
     *
     * @param string $client_id client_id
     *
     * @return $this
     */
    public function setClientId($client_id)
    {
        $this->container['client_id'] = $client_id;

        return $this;
    }

    /**
     * Gets total_nucleus_clients
     *
     * @return int
     */
    public function getTotalNucleusClients()
    {
        return $this->container['total_nucleus_clients'];
    }

    /**
     * Sets total_nucleus_clients
     *
     * @param int $total_nucleus_clients total_nucleus_clients
     *
     * @return $this
     */
    public function setTotalNucleusClients($total_nucleus_clients)
    {
        $this->container['total_nucleus_clients'] = $total_nucleus_clients;

        return $this;
    }

    /**
     * Gets total_nucleus_clients_active
     *
     * @return int
     */
    public function getTotalNucleusClientsActive()
    {
        return $this->container['total_nucleus_clients_active'];
    }

    /**
     * Sets total_nucleus_clients_active
     *
     * @param int $total_nucleus_clients_active total_nucleus_clients_active
     *
     * @return $this
     */
    public function setTotalNucleusClientsActive($total_nucleus_clients_active)
    {
        $this->container['total_nucleus_clients_active'] = $total_nucleus_clients_active;

        return $this;
    }

    /**
     * Gets total_nucleus_clients_inactive
     *
     * @return int
     */
    public function getTotalNucleusClientsInactive()
    {
        return $this->container['total_nucleus_clients_inactive'];
    }

    /**
     * Sets total_nucleus_clients_inactive
     *
     * @param int $total_nucleus_clients_inactive total_nucleus_clients_inactive
     *
     * @return $this
     */
    public function setTotalNucleusClientsInactive($total_nucleus_clients_inactive)
    {
        $this->container['total_nucleus_clients_inactive'] = $total_nucleus_clients_inactive;

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


