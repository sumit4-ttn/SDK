# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.2.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class KmsConfig(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'aws_key_id': 'str',
        'create_date': 'datetime',
        'id': 'str',
        'key_name': 'str',
        'key_value': 'str',
        'nucleus_client_id': 'str',
        'product': 'str',
        'secondary_id': 'str',
        'update_date': 'datetime',
        'vendor_id': 'str',
        'vendor_name': 'str',
        'wallet_id': 'str'
    }

    attribute_map = {
        'aws_key_id': 'aws_key_id',
        'create_date': 'create_date',
        'id': 'id',
        'key_name': 'key_name',
        'key_value': 'key_value',
        'nucleus_client_id': 'nucleus_client_id',
        'product': 'product',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date',
        'vendor_id': 'vendor_id',
        'vendor_name': 'vendor_name',
        'wallet_id': 'wallet_id'
    }

    def __init__(self, aws_key_id=None, create_date=None, id=None, key_name=None, key_value=None, nucleus_client_id=None, product=None, secondary_id=None, update_date=None, vendor_id=None, vendor_name=None, wallet_id=None):  # noqa: E501
        """KmsConfig - a model defined in Swagger"""  # noqa: E501

        self._aws_key_id = None
        self._create_date = None
        self._id = None
        self._key_name = None
        self._key_value = None
        self._nucleus_client_id = None
        self._product = None
        self._secondary_id = None
        self._update_date = None
        self._vendor_id = None
        self._vendor_name = None
        self._wallet_id = None
        self.discriminator = None

        if aws_key_id is not None:
            self.aws_key_id = aws_key_id
        if create_date is not None:
            self.create_date = create_date
        if id is not None:
            self.id = id
        self.key_name = key_name
        if key_value is not None:
            self.key_value = key_value
        self.nucleus_client_id = nucleus_client_id
        self.product = product
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date
        if vendor_id is not None:
            self.vendor_id = vendor_id
        self.vendor_name = vendor_name
        if wallet_id is not None:
            self.wallet_id = wallet_id

    @property
    def aws_key_id(self):
        """Gets the aws_key_id of this KmsConfig.  # noqa: E501


        :return: The aws_key_id of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._aws_key_id

    @aws_key_id.setter
    def aws_key_id(self, aws_key_id):
        """Sets the aws_key_id of this KmsConfig.


        :param aws_key_id: The aws_key_id of this KmsConfig.  # noqa: E501
        :type: str
        """

        self._aws_key_id = aws_key_id

    @property
    def create_date(self):
        """Gets the create_date of this KmsConfig.  # noqa: E501


        :return: The create_date of this KmsConfig.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this KmsConfig.


        :param create_date: The create_date of this KmsConfig.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def id(self):
        """Gets the id of this KmsConfig.  # noqa: E501


        :return: The id of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this KmsConfig.


        :param id: The id of this KmsConfig.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def key_name(self):
        """Gets the key_name of this KmsConfig.  # noqa: E501

        keyName  # noqa: E501

        :return: The key_name of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._key_name

    @key_name.setter
    def key_name(self, key_name):
        """Sets the key_name of this KmsConfig.

        keyName  # noqa: E501

        :param key_name: The key_name of this KmsConfig.  # noqa: E501
        :type: str
        """
        if key_name is None:
            raise ValueError("Invalid value for `key_name`, must not be `None`")  # noqa: E501

        self._key_name = key_name

    @property
    def key_value(self):
        """Gets the key_value of this KmsConfig.  # noqa: E501

        keyValue  # noqa: E501

        :return: The key_value of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._key_value

    @key_value.setter
    def key_value(self, key_value):
        """Sets the key_value of this KmsConfig.

        keyValue  # noqa: E501

        :param key_value: The key_value of this KmsConfig.  # noqa: E501
        :type: str
        """

        self._key_value = key_value

    @property
    def nucleus_client_id(self):
        """Gets the nucleus_client_id of this KmsConfig.  # noqa: E501

        nucleusClientId  # noqa: E501

        :return: The nucleus_client_id of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_client_id

    @nucleus_client_id.setter
    def nucleus_client_id(self, nucleus_client_id):
        """Sets the nucleus_client_id of this KmsConfig.

        nucleusClientId  # noqa: E501

        :param nucleus_client_id: The nucleus_client_id of this KmsConfig.  # noqa: E501
        :type: str
        """
        if nucleus_client_id is None:
            raise ValueError("Invalid value for `nucleus_client_id`, must not be `None`")  # noqa: E501

        self._nucleus_client_id = nucleus_client_id

    @property
    def product(self):
        """Gets the product of this KmsConfig.  # noqa: E501

        product  # noqa: E501

        :return: The product of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this KmsConfig.

        product  # noqa: E501

        :param product: The product of this KmsConfig.  # noqa: E501
        :type: str
        """
        if product is None:
            raise ValueError("Invalid value for `product`, must not be `None`")  # noqa: E501

        self._product = product

    @property
    def secondary_id(self):
        """Gets the secondary_id of this KmsConfig.  # noqa: E501


        :return: The secondary_id of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this KmsConfig.


        :param secondary_id: The secondary_id of this KmsConfig.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this KmsConfig.  # noqa: E501


        :return: The update_date of this KmsConfig.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this KmsConfig.


        :param update_date: The update_date of this KmsConfig.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

    @property
    def vendor_id(self):
        """Gets the vendor_id of this KmsConfig.  # noqa: E501


        :return: The vendor_id of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._vendor_id

    @vendor_id.setter
    def vendor_id(self, vendor_id):
        """Sets the vendor_id of this KmsConfig.


        :param vendor_id: The vendor_id of this KmsConfig.  # noqa: E501
        :type: str
        """

        self._vendor_id = vendor_id

    @property
    def vendor_name(self):
        """Gets the vendor_name of this KmsConfig.  # noqa: E501

        vendorName  # noqa: E501

        :return: The vendor_name of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._vendor_name

    @vendor_name.setter
    def vendor_name(self, vendor_name):
        """Sets the vendor_name of this KmsConfig.

        vendorName  # noqa: E501

        :param vendor_name: The vendor_name of this KmsConfig.  # noqa: E501
        :type: str
        """
        if vendor_name is None:
            raise ValueError("Invalid value for `vendor_name`, must not be `None`")  # noqa: E501

        self._vendor_name = vendor_name

    @property
    def wallet_id(self):
        """Gets the wallet_id of this KmsConfig.  # noqa: E501

        walletId  # noqa: E501

        :return: The wallet_id of this KmsConfig.  # noqa: E501
        :rtype: str
        """
        return self._wallet_id

    @wallet_id.setter
    def wallet_id(self, wallet_id):
        """Sets the wallet_id of this KmsConfig.

        walletId  # noqa: E501

        :param wallet_id: The wallet_id of this KmsConfig.  # noqa: E501
        :type: str
        """

        self._wallet_id = wallet_id

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(KmsConfig, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, KmsConfig):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other