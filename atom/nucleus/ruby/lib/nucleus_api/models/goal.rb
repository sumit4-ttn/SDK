=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.7.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'date'

module NucleusApi
  class Goal
    attr_accessor :accumulation_horizon

    # category
    attr_accessor :category

    attr_accessor :client_id

    attr_accessor :create_date

    attr_accessor :decumulation_horizon

    attr_accessor :goal_amount

    attr_accessor :id

    # image
    attr_accessor :image

    # isActive
    attr_accessor :is_active

    # isDecumulation
    attr_accessor :is_decumulation

    attr_accessor :metadata

    # Goal name
    attr_accessor :name

    # Goal Parent Goal Id
    attr_accessor :parent_goal_id

    # questionnaire_id
    attr_accessor :questionnaire_id

    attr_accessor :secondary_id

    # type
    attr_accessor :type

    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'accumulation_horizon' => :'accumulation_horizon',
        :'category' => :'category',
        :'client_id' => :'client_id',
        :'create_date' => :'create_date',
        :'decumulation_horizon' => :'decumulation_horizon',
        :'goal_amount' => :'goal_amount',
        :'id' => :'id',
        :'image' => :'image',
        :'is_active' => :'is_active',
        :'is_decumulation' => :'is_decumulation',
        :'metadata' => :'metadata',
        :'name' => :'name',
        :'parent_goal_id' => :'parent_goal_id',
        :'questionnaire_id' => :'questionnaire_id',
        :'secondary_id' => :'secondary_id',
        :'type' => :'type',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'accumulation_horizon' => :'Float',
        :'category' => :'String',
        :'client_id' => :'String',
        :'create_date' => :'DateTime',
        :'decumulation_horizon' => :'Float',
        :'goal_amount' => :'Float',
        :'id' => :'String',
        :'image' => :'String',
        :'is_active' => :'BOOLEAN',
        :'is_decumulation' => :'BOOLEAN',
        :'metadata' => :'Hash<String, String>',
        :'name' => :'String',
        :'parent_goal_id' => :'String',
        :'questionnaire_id' => :'String',
        :'secondary_id' => :'String',
        :'type' => :'String',
        :'update_date' => :'DateTime'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'accumulation_horizon')
        self.accumulation_horizon = attributes[:'accumulation_horizon']
      end

      if attributes.has_key?(:'category')
        self.category = attributes[:'category']
      end

      if attributes.has_key?(:'client_id')
        self.client_id = attributes[:'client_id']
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'decumulation_horizon')
        self.decumulation_horizon = attributes[:'decumulation_horizon']
      end

      if attributes.has_key?(:'goal_amount')
        self.goal_amount = attributes[:'goal_amount']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'image')
        self.image = attributes[:'image']
      end

      if attributes.has_key?(:'is_active')
        self.is_active = attributes[:'is_active']
      end

      if attributes.has_key?(:'is_decumulation')
        self.is_decumulation = attributes[:'is_decumulation']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.has_key?(:'parent_goal_id')
        self.parent_goal_id = attributes[:'parent_goal_id']
      end

      if attributes.has_key?(:'questionnaire_id')
        self.questionnaire_id = attributes[:'questionnaire_id']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'type')
        self.type = attributes[:'type']
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @name.nil?
        invalid_properties.push('invalid value for "name", name cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @name.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          accumulation_horizon == o.accumulation_horizon &&
          category == o.category &&
          client_id == o.client_id &&
          create_date == o.create_date &&
          decumulation_horizon == o.decumulation_horizon &&
          goal_amount == o.goal_amount &&
          id == o.id &&
          image == o.image &&
          is_active == o.is_active &&
          is_decumulation == o.is_decumulation &&
          metadata == o.metadata &&
          name == o.name &&
          parent_goal_id == o.parent_goal_id &&
          questionnaire_id == o.questionnaire_id &&
          secondary_id == o.secondary_id &&
          type == o.type &&
          update_date == o.update_date
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [accumulation_horizon, category, client_id, create_date, decumulation_horizon, goal_amount, id, image, is_active, is_decumulation, metadata, name, parent_goal_id, questionnaire_id, secondary_id, type, update_date].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
        def build_from_hash(attributes)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        elsif attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", attributes[self.class.attribute_map[key]])
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end
      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
def _deserialize(type, value)
  case type.to_sym
  when :DateTime
   value
  when :Date
    value
  when :String
    value.to_s
  when :Integer
    value.to_i
  when :Float
    value.to_f
  when :BOOLEAN
    if value.to_s =~ /\A(true|t|yes|y|1)\z/i
      true
    else
      false
    end
  when :Object
    # generic object (usually a Hash), return directly
    value
  when /\AArray<(?<inner_type>.+)>\z/
    inner_type = Regexp.last_match[:inner_type]
    value.map { |v| _deserialize(inner_type, v) }
  when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
    k_type = Regexp.last_match[:k_type]
    v_type = Regexp.last_match[:v_type]
    {}.tap do |hash|
      value.each do |k, v|
        hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
      end
    end
  else # model
    temp_model = NucleusApi.const_get(type).new
    temp_model.build_from_hash(value)
  end
end# Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end
end