<?php
/**
 * BacktestRequest
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.14
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\proton\Model;

use \ArrayAccess;
use \com\hydrogen\proton\ObjectSerializer;

/**
 * BacktestRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class BacktestRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'backtestRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'start_date' => '\DateTime',
        'end_date' => '\DateTime',
        'model_id' => 'string',
        'asset_size' => 'float',
        'initial_weights' => 'object',
        'settings' => 'object',
        'trades' => 'bool',
        'stats' => 'bool',
        'holdings' => 'bool',
        'asset_sizes' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'start_date' => 'date',
        'end_date' => 'date',
        'model_id' => 'uuid',
        'asset_size' => null,
        'initial_weights' => null,
        'settings' => null,
        'trades' => null,
        'stats' => null,
        'holdings' => null,
        'asset_sizes' => null
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
        'start_date' => 'start_date',
        'end_date' => 'end_date',
        'model_id' => 'model_id',
        'asset_size' => 'asset_size',
        'initial_weights' => 'initial_weights',
        'settings' => 'settings',
        'trades' => 'trades',
        'stats' => 'stats',
        'holdings' => 'holdings',
        'asset_sizes' => 'asset_sizes'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'start_date' => 'setStartDate',
        'end_date' => 'setEndDate',
        'model_id' => 'setModelId',
        'asset_size' => 'setAssetSize',
        'initial_weights' => 'setInitialWeights',
        'settings' => 'setSettings',
        'trades' => 'setTrades',
        'stats' => 'setStats',
        'holdings' => 'setHoldings',
        'asset_sizes' => 'setAssetSizes'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'start_date' => 'getStartDate',
        'end_date' => 'getEndDate',
        'model_id' => 'getModelId',
        'asset_size' => 'getAssetSize',
        'initial_weights' => 'getInitialWeights',
        'settings' => 'getSettings',
        'trades' => 'getTrades',
        'stats' => 'getStats',
        'holdings' => 'getHoldings',
        'asset_sizes' => 'getAssetSizes'
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
        $this->container['start_date'] = isset($data['start_date']) ? $data['start_date'] : null;
        $this->container['end_date'] = isset($data['end_date']) ? $data['end_date'] : null;
        $this->container['model_id'] = isset($data['model_id']) ? $data['model_id'] : null;
        $this->container['asset_size'] = isset($data['asset_size']) ? $data['asset_size'] : null;
        $this->container['initial_weights'] = isset($data['initial_weights']) ? $data['initial_weights'] : null;
        $this->container['settings'] = isset($data['settings']) ? $data['settings'] : null;
        $this->container['trades'] = isset($data['trades']) ? $data['trades'] : true;
        $this->container['stats'] = isset($data['stats']) ? $data['stats'] : true;
        $this->container['holdings'] = isset($data['holdings']) ? $data['holdings'] : true;
        $this->container['asset_sizes'] = isset($data['asset_sizes']) ? $data['asset_sizes'] : true;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['start_date'] === null) {
            $invalidProperties[] = "'start_date' can't be null";
        }
        if ($this->container['end_date'] === null) {
            $invalidProperties[] = "'end_date' can't be null";
        }
        if (!is_null($this->container['asset_size']) && ($this->container['asset_size'] < 0)) {
            $invalidProperties[] = "invalid value for 'asset_size', must be bigger than or equal to 0.";
        }

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
     * Gets start_date
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->container['start_date'];
    }

    /**
     * Sets start_date
     *
     * @param \DateTime $start_date start_date
     *
     * @return $this
     */
    public function setStartDate($start_date)
    {
        $this->container['start_date'] = $start_date;

        return $this;
    }

    /**
     * Gets end_date
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->container['end_date'];
    }

    /**
     * Sets end_date
     *
     * @param \DateTime $end_date end_date
     *
     * @return $this
     */
    public function setEndDate($end_date)
    {
        $this->container['end_date'] = $end_date;

        return $this;
    }

    /**
     * Gets model_id
     *
     * @return string
     */
    public function getModelId()
    {
        return $this->container['model_id'];
    }

    /**
     * Sets model_id
     *
     * @param string $model_id model_id
     *
     * @return $this
     */
    public function setModelId($model_id)
    {
        $this->container['model_id'] = $model_id;

        return $this;
    }

    /**
     * Gets asset_size
     *
     * @return float
     */
    public function getAssetSize()
    {
        return $this->container['asset_size'];
    }

    /**
     * Sets asset_size
     *
     * @param float $asset_size asset_size
     *
     * @return $this
     */
    public function setAssetSize($asset_size)
    {

        if (!is_null($asset_size) && ($asset_size < 0)) {
            throw new \InvalidArgumentException('invalid value for $asset_size when calling BacktestRequest., must be bigger than or equal to 0.');
        }

        $this->container['asset_size'] = $asset_size;

        return $this;
    }

    /**
     * Gets initial_weights
     *
     * @return object
     */
    public function getInitialWeights()
    {
        return $this->container['initial_weights'];
    }

    /**
     * Sets initial_weights
     *
     * @param object $initial_weights initial_weights
     *
     * @return $this
     */
    public function setInitialWeights($initial_weights)
    {
        $this->container['initial_weights'] = $initial_weights;

        return $this;
    }

    /**
     * Gets settings
     *
     * @return object
     */
    public function getSettings()
    {
        return $this->container['settings'];
    }

    /**
     * Sets settings
     *
     * @param object $settings settings
     *
     * @return $this
     */
    public function setSettings($settings)
    {
        $this->container['settings'] = $settings;

        return $this;
    }

    /**
     * Gets trades
     *
     * @return bool
     */
    public function getTrades()
    {
        return $this->container['trades'];
    }

    /**
     * Sets trades
     *
     * @param bool $trades trades
     *
     * @return $this
     */
    public function setTrades($trades)
    {
        $this->container['trades'] = $trades;

        return $this;
    }

    /**
     * Gets stats
     *
     * @return bool
     */
    public function getStats()
    {
        return $this->container['stats'];
    }

    /**
     * Sets stats
     *
     * @param bool $stats stats
     *
     * @return $this
     */
    public function setStats($stats)
    {
        $this->container['stats'] = $stats;

        return $this;
    }

    /**
     * Gets holdings
     *
     * @return bool
     */
    public function getHoldings()
    {
        return $this->container['holdings'];
    }

    /**
     * Sets holdings
     *
     * @param bool $holdings holdings
     *
     * @return $this
     */
    public function setHoldings($holdings)
    {
        $this->container['holdings'] = $holdings;

        return $this;
    }

    /**
     * Gets asset_sizes
     *
     * @return bool
     */
    public function getAssetSizes()
    {
        return $this->container['asset_sizes'];
    }

    /**
     * Sets asset_sizes
     *
     * @param bool $asset_sizes asset_sizes
     *
     * @return $this
     */
    public function setAssetSizes($asset_sizes)
    {
        $this->container['asset_sizes'] = $asset_sizes;

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


