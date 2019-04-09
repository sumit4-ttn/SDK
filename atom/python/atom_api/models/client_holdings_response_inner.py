# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class ClientHoldingsResponseInner(object):
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
        '_date': 'date',
        'security_id': 'str',
        'weight': 'float',
        'amount': 'float',
        'shares': 'float'
    }

    attribute_map = {
        '_date': 'date',
        'security_id': 'security_id',
        'weight': 'weight',
        'amount': 'amount',
        'shares': 'shares'
    }

    def __init__(self, _date=None, security_id=None, weight=None, amount=None, shares=None):  # noqa: E501
        """ClientHoldingsResponseInner - a model defined in Swagger"""  # noqa: E501

        self.__date = None
        self._security_id = None
        self._weight = None
        self._amount = None
        self._shares = None
        self.discriminator = None

        if _date is not None:
            self._date = _date
        if security_id is not None:
            self.security_id = security_id
        if weight is not None:
            self.weight = weight
        if amount is not None:
            self.amount = amount
        if shares is not None:
            self.shares = shares

    @property
    def _date(self):
        """Gets the _date of this ClientHoldingsResponseInner.  # noqa: E501

        Date for the security holding  # noqa: E501

        :return: The _date of this ClientHoldingsResponseInner.  # noqa: E501
        :rtype: date
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this ClientHoldingsResponseInner.

        Date for the security holding  # noqa: E501

        :param _date: The _date of this ClientHoldingsResponseInner.  # noqa: E501
        :type: date
        """

        self.__date = _date

    @property
    def security_id(self):
        """Gets the security_id of this ClientHoldingsResponseInner.  # noqa: E501

        The ID for the security included in the holding record  # noqa: E501

        :return: The security_id of this ClientHoldingsResponseInner.  # noqa: E501
        :rtype: str
        """
        return self._security_id

    @security_id.setter
    def security_id(self, security_id):
        """Sets the security_id of this ClientHoldingsResponseInner.

        The ID for the security included in the holding record  # noqa: E501

        :param security_id: The security_id of this ClientHoldingsResponseInner.  # noqa: E501
        :type: str
        """

        self._security_id = security_id

    @property
    def weight(self):
        """Gets the weight of this ClientHoldingsResponseInner.  # noqa: E501

        The weight of the security as a percentage of the client’s total monetary value; ex. 20 representing 20%  # noqa: E501

        :return: The weight of this ClientHoldingsResponseInner.  # noqa: E501
        :rtype: float
        """
        return self._weight

    @weight.setter
    def weight(self, weight):
        """Sets the weight of this ClientHoldingsResponseInner.

        The weight of the security as a percentage of the client’s total monetary value; ex. 20 representing 20%  # noqa: E501

        :param weight: The weight of this ClientHoldingsResponseInner.  # noqa: E501
        :type: float
        """

        self._weight = weight

    @property
    def amount(self):
        """Gets the amount of this ClientHoldingsResponseInner.  # noqa: E501

        Monetary value of the shares in the holding record  # noqa: E501

        :return: The amount of this ClientHoldingsResponseInner.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this ClientHoldingsResponseInner.

        Monetary value of the shares in the holding record  # noqa: E501

        :param amount: The amount of this ClientHoldingsResponseInner.  # noqa: E501
        :type: float
        """

        self._amount = amount

    @property
    def shares(self):
        """Gets the shares of this ClientHoldingsResponseInner.  # noqa: E501

        Number of shares in the holding record  # noqa: E501

        :return: The shares of this ClientHoldingsResponseInner.  # noqa: E501
        :rtype: float
        """
        return self._shares

    @shares.setter
    def shares(self, shares):
        """Sets the shares of this ClientHoldingsResponseInner.

        Number of shares in the holding record  # noqa: E501

        :param shares: The shares of this ClientHoldingsResponseInner.  # noqa: E501
        :type: float
        """

        self._shares = shares

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
        if issubclass(ClientHoldingsResponseInner, dict):
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
        if not isinstance(other, ClientHoldingsResponseInner):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other