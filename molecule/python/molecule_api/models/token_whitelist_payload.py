# coding: utf-8

"""
    Hydrogen Molecule API

    The Hydrogen Molecule API  # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class TokenWhitelistPayload(object):
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
        'token_id': 'str',
        'wallet_id': 'str'
    }

    attribute_map = {
        'token_id': 'token_id',
        'wallet_id': 'wallet_id'
    }

    def __init__(self, token_id=None, wallet_id=None):  # noqa: E501
        """TokenWhitelistPayload - a model defined in Swagger"""  # noqa: E501

        self._token_id = None
        self._wallet_id = None
        self.discriminator = None

        self.token_id = token_id
        self.wallet_id = wallet_id

    @property
    def token_id(self):
        """Gets the token_id of this TokenWhitelistPayload.  # noqa: E501

        The uuid of the specified token.  # noqa: E501

        :return: The token_id of this TokenWhitelistPayload.  # noqa: E501
        :rtype: str
        """
        return self._token_id

    @token_id.setter
    def token_id(self, token_id):
        """Sets the token_id of this TokenWhitelistPayload.

        The uuid of the specified token.  # noqa: E501

        :param token_id: The token_id of this TokenWhitelistPayload.  # noqa: E501
        :type: str
        """
        if token_id is None:
            raise ValueError("Invalid value for `token_id`, must not be `None`")  # noqa: E501

        self._token_id = token_id

    @property
    def wallet_id(self):
        """Gets the wallet_id of this TokenWhitelistPayload.  # noqa: E501

        The uuid of wallet to be whitelisted.  # noqa: E501

        :return: The wallet_id of this TokenWhitelistPayload.  # noqa: E501
        :rtype: str
        """
        return self._wallet_id

    @wallet_id.setter
    def wallet_id(self, wallet_id):
        """Sets the wallet_id of this TokenWhitelistPayload.

        The uuid of wallet to be whitelisted.  # noqa: E501

        :param wallet_id: The wallet_id of this TokenWhitelistPayload.  # noqa: E501
        :type: str
        """
        if wallet_id is None:
            raise ValueError("Invalid value for `wallet_id`, must not be `None`")  # noqa: E501

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
        if issubclass(TokenWhitelistPayload, dict):
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
        if not isinstance(other, TokenWhitelistPayload):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
