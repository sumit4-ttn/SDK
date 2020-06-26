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


class VAccountAssetSize(object):
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
        'account_id': 'str',
        'asset_size': 'float',
        'cash_flow': 'float',
        '_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'asset_size': 'asset_size',
        'cash_flow': 'cash_flow',
        '_date': 'date'
    }

    def __init__(self, account_id=None, asset_size=None, cash_flow=None, _date=None):  # noqa: E501
        """VAccountAssetSize - a model defined in Swagger"""  # noqa: E501

        self._account_id = None
        self._asset_size = None
        self._cash_flow = None
        self.__date = None
        self.discriminator = None

        if account_id is not None:
            self.account_id = account_id
        if asset_size is not None:
            self.asset_size = asset_size
        if cash_flow is not None:
            self.cash_flow = cash_flow
        if _date is not None:
            self._date = _date

    @property
    def account_id(self):
        """Gets the account_id of this VAccountAssetSize.  # noqa: E501

        account_id  # noqa: E501

        :return: The account_id of this VAccountAssetSize.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this VAccountAssetSize.

        account_id  # noqa: E501

        :param account_id: The account_id of this VAccountAssetSize.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def asset_size(self):
        """Gets the asset_size of this VAccountAssetSize.  # noqa: E501

        asset_size  # noqa: E501

        :return: The asset_size of this VAccountAssetSize.  # noqa: E501
        :rtype: float
        """
        return self._asset_size

    @asset_size.setter
    def asset_size(self, asset_size):
        """Sets the asset_size of this VAccountAssetSize.

        asset_size  # noqa: E501

        :param asset_size: The asset_size of this VAccountAssetSize.  # noqa: E501
        :type: float
        """

        self._asset_size = asset_size

    @property
    def cash_flow(self):
        """Gets the cash_flow of this VAccountAssetSize.  # noqa: E501

        cash_flow  # noqa: E501

        :return: The cash_flow of this VAccountAssetSize.  # noqa: E501
        :rtype: float
        """
        return self._cash_flow

    @cash_flow.setter
    def cash_flow(self, cash_flow):
        """Sets the cash_flow of this VAccountAssetSize.

        cash_flow  # noqa: E501

        :param cash_flow: The cash_flow of this VAccountAssetSize.  # noqa: E501
        :type: float
        """

        self._cash_flow = cash_flow

    @property
    def _date(self):
        """Gets the _date of this VAccountAssetSize.  # noqa: E501


        :return: The _date of this VAccountAssetSize.  # noqa: E501
        :rtype: datetime
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this VAccountAssetSize.


        :param _date: The _date of this VAccountAssetSize.  # noqa: E501
        :type: datetime
        """

        self.__date = _date

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
        if issubclass(VAccountAssetSize, dict):
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
        if not isinstance(other, VAccountAssetSize):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other