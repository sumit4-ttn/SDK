# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class WithdrawalAccountVO(object):
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
        'withdrawal_account_id': 'str',
        'withdrawal_account_name': 'str',
        'withdrawal_amount': 'float',
        'withdrawal_date': 'datetime',
        'withdrawal_direction': 'str',
        'withdrawal_id': 'str'
    }

    attribute_map = {
        'withdrawal_account_id': 'withdrawal_account_id',
        'withdrawal_account_name': 'withdrawal_account_name',
        'withdrawal_amount': 'withdrawal_amount',
        'withdrawal_date': 'withdrawal_date',
        'withdrawal_direction': 'withdrawal_direction',
        'withdrawal_id': 'withdrawal_id'
    }

    def __init__(self, withdrawal_account_id=None, withdrawal_account_name=None, withdrawal_amount=None, withdrawal_date=None, withdrawal_direction=None, withdrawal_id=None):  # noqa: E501
        """WithdrawalAccountVO - a model defined in Swagger"""  # noqa: E501

        self._withdrawal_account_id = None
        self._withdrawal_account_name = None
        self._withdrawal_amount = None
        self._withdrawal_date = None
        self._withdrawal_direction = None
        self._withdrawal_id = None
        self.discriminator = None

        if withdrawal_account_id is not None:
            self.withdrawal_account_id = withdrawal_account_id
        if withdrawal_account_name is not None:
            self.withdrawal_account_name = withdrawal_account_name
        if withdrawal_amount is not None:
            self.withdrawal_amount = withdrawal_amount
        if withdrawal_date is not None:
            self.withdrawal_date = withdrawal_date
        if withdrawal_direction is not None:
            self.withdrawal_direction = withdrawal_direction
        if withdrawal_id is not None:
            self.withdrawal_id = withdrawal_id

    @property
    def withdrawal_account_id(self):
        """Gets the withdrawal_account_id of this WithdrawalAccountVO.  # noqa: E501


        :return: The withdrawal_account_id of this WithdrawalAccountVO.  # noqa: E501
        :rtype: str
        """
        return self._withdrawal_account_id

    @withdrawal_account_id.setter
    def withdrawal_account_id(self, withdrawal_account_id):
        """Sets the withdrawal_account_id of this WithdrawalAccountVO.


        :param withdrawal_account_id: The withdrawal_account_id of this WithdrawalAccountVO.  # noqa: E501
        :type: str
        """

        self._withdrawal_account_id = withdrawal_account_id

    @property
    def withdrawal_account_name(self):
        """Gets the withdrawal_account_name of this WithdrawalAccountVO.  # noqa: E501


        :return: The withdrawal_account_name of this WithdrawalAccountVO.  # noqa: E501
        :rtype: str
        """
        return self._withdrawal_account_name

    @withdrawal_account_name.setter
    def withdrawal_account_name(self, withdrawal_account_name):
        """Sets the withdrawal_account_name of this WithdrawalAccountVO.


        :param withdrawal_account_name: The withdrawal_account_name of this WithdrawalAccountVO.  # noqa: E501
        :type: str
        """

        self._withdrawal_account_name = withdrawal_account_name

    @property
    def withdrawal_amount(self):
        """Gets the withdrawal_amount of this WithdrawalAccountVO.  # noqa: E501


        :return: The withdrawal_amount of this WithdrawalAccountVO.  # noqa: E501
        :rtype: float
        """
        return self._withdrawal_amount

    @withdrawal_amount.setter
    def withdrawal_amount(self, withdrawal_amount):
        """Sets the withdrawal_amount of this WithdrawalAccountVO.


        :param withdrawal_amount: The withdrawal_amount of this WithdrawalAccountVO.  # noqa: E501
        :type: float
        """

        self._withdrawal_amount = withdrawal_amount

    @property
    def withdrawal_date(self):
        """Gets the withdrawal_date of this WithdrawalAccountVO.  # noqa: E501


        :return: The withdrawal_date of this WithdrawalAccountVO.  # noqa: E501
        :rtype: datetime
        """
        return self._withdrawal_date

    @withdrawal_date.setter
    def withdrawal_date(self, withdrawal_date):
        """Sets the withdrawal_date of this WithdrawalAccountVO.


        :param withdrawal_date: The withdrawal_date of this WithdrawalAccountVO.  # noqa: E501
        :type: datetime
        """

        self._withdrawal_date = withdrawal_date

    @property
    def withdrawal_direction(self):
        """Gets the withdrawal_direction of this WithdrawalAccountVO.  # noqa: E501


        :return: The withdrawal_direction of this WithdrawalAccountVO.  # noqa: E501
        :rtype: str
        """
        return self._withdrawal_direction

    @withdrawal_direction.setter
    def withdrawal_direction(self, withdrawal_direction):
        """Sets the withdrawal_direction of this WithdrawalAccountVO.


        :param withdrawal_direction: The withdrawal_direction of this WithdrawalAccountVO.  # noqa: E501
        :type: str
        """

        self._withdrawal_direction = withdrawal_direction

    @property
    def withdrawal_id(self):
        """Gets the withdrawal_id of this WithdrawalAccountVO.  # noqa: E501


        :return: The withdrawal_id of this WithdrawalAccountVO.  # noqa: E501
        :rtype: str
        """
        return self._withdrawal_id

    @withdrawal_id.setter
    def withdrawal_id(self, withdrawal_id):
        """Sets the withdrawal_id of this WithdrawalAccountVO.


        :param withdrawal_id: The withdrawal_id of this WithdrawalAccountVO.  # noqa: E501
        :type: str
        """

        self._withdrawal_id = withdrawal_id

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
        if issubclass(WithdrawalAccountVO, dict):
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
        if not isinstance(other, WithdrawalAccountVO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
