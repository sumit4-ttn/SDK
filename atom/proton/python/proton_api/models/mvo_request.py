# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.7.18
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class MvoRequest(object):
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
        'use_proxy_data': 'bool',
        'start_date': 'date',
        'tgt_val': 'float',
        'end_date': 'date',
        'w_config': 'WConfig',
        'sec_types': 'list[str]',
        'tgt_type': 'str',
        'min_assets': 'int',
        'market_data_source': 'str',
        'w_asset_config': 'object',
        'tickers': 'list[str]'
    }

    attribute_map = {
        'use_proxy_data': 'use_proxy_data',
        'start_date': 'start_date',
        'tgt_val': 'tgt_val',
        'end_date': 'end_date',
        'w_config': 'w_config',
        'sec_types': 'sec_types',
        'tgt_type': 'tgt_type',
        'min_assets': 'min_assets',
        'market_data_source': 'market_data_source',
        'w_asset_config': 'w_asset_config',
        'tickers': 'tickers'
    }

    def __init__(self, use_proxy_data=False, start_date=None, tgt_val=0.0, end_date=None, w_config=None, sec_types=None, tgt_type='null', min_assets=None, market_data_source='nucleus', w_asset_config=None, tickers=None):  # noqa: E501
        """MvoRequest - a model defined in Swagger"""  # noqa: E501

        self._use_proxy_data = None
        self._start_date = None
        self._tgt_val = None
        self._end_date = None
        self._w_config = None
        self._sec_types = None
        self._tgt_type = None
        self._min_assets = None
        self._market_data_source = None
        self._w_asset_config = None
        self._tickers = None
        self.discriminator = None

        if use_proxy_data is not None:
            self.use_proxy_data = use_proxy_data
        if start_date is not None:
            self.start_date = start_date
        if tgt_val is not None:
            self.tgt_val = tgt_val
        if end_date is not None:
            self.end_date = end_date
        self.w_config = w_config
        self.sec_types = sec_types
        if tgt_type is not None:
            self.tgt_type = tgt_type
        self.min_assets = min_assets
        if market_data_source is not None:
            self.market_data_source = market_data_source
        if w_asset_config is not None:
            self.w_asset_config = w_asset_config
        self.tickers = tickers

    @property
    def use_proxy_data(self):
        """Gets the use_proxy_data of this MvoRequest.  # noqa: E501


        :return: The use_proxy_data of this MvoRequest.  # noqa: E501
        :rtype: bool
        """
        return self._use_proxy_data

    @use_proxy_data.setter
    def use_proxy_data(self, use_proxy_data):
        """Sets the use_proxy_data of this MvoRequest.


        :param use_proxy_data: The use_proxy_data of this MvoRequest.  # noqa: E501
        :type: bool
        """

        self._use_proxy_data = use_proxy_data

    @property
    def start_date(self):
        """Gets the start_date of this MvoRequest.  # noqa: E501


        :return: The start_date of this MvoRequest.  # noqa: E501
        :rtype: date
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this MvoRequest.


        :param start_date: The start_date of this MvoRequest.  # noqa: E501
        :type: date
        """

        self._start_date = start_date

    @property
    def tgt_val(self):
        """Gets the tgt_val of this MvoRequest.  # noqa: E501


        :return: The tgt_val of this MvoRequest.  # noqa: E501
        :rtype: float
        """
        return self._tgt_val

    @tgt_val.setter
    def tgt_val(self, tgt_val):
        """Sets the tgt_val of this MvoRequest.


        :param tgt_val: The tgt_val of this MvoRequest.  # noqa: E501
        :type: float
        """

        self._tgt_val = tgt_val

    @property
    def end_date(self):
        """Gets the end_date of this MvoRequest.  # noqa: E501


        :return: The end_date of this MvoRequest.  # noqa: E501
        :rtype: date
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this MvoRequest.


        :param end_date: The end_date of this MvoRequest.  # noqa: E501
        :type: date
        """

        self._end_date = end_date

    @property
    def w_config(self):
        """Gets the w_config of this MvoRequest.  # noqa: E501


        :return: The w_config of this MvoRequest.  # noqa: E501
        :rtype: WConfig
        """
        return self._w_config

    @w_config.setter
    def w_config(self, w_config):
        """Sets the w_config of this MvoRequest.


        :param w_config: The w_config of this MvoRequest.  # noqa: E501
        :type: WConfig
        """
        if w_config is None:
            raise ValueError("Invalid value for `w_config`, must not be `None`")  # noqa: E501

        self._w_config = w_config

    @property
    def sec_types(self):
        """Gets the sec_types of this MvoRequest.  # noqa: E501


        :return: The sec_types of this MvoRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._sec_types

    @sec_types.setter
    def sec_types(self, sec_types):
        """Sets the sec_types of this MvoRequest.


        :param sec_types: The sec_types of this MvoRequest.  # noqa: E501
        :type: list[str]
        """
        if sec_types is None:
            raise ValueError("Invalid value for `sec_types`, must not be `None`")  # noqa: E501
        allowed_values = ["major", "minor", "cash"]  # noqa: E501
        if not set(sec_types).issubset(set(allowed_values)):
            raise ValueError(
                "Invalid values for `sec_types` [{0}], must be a subset of [{1}]"  # noqa: E501
                .format(", ".join(map(str, set(sec_types) - set(allowed_values))),  # noqa: E501
                        ", ".join(map(str, allowed_values)))
            )

        self._sec_types = sec_types

    @property
    def tgt_type(self):
        """Gets the tgt_type of this MvoRequest.  # noqa: E501


        :return: The tgt_type of this MvoRequest.  # noqa: E501
        :rtype: str
        """
        return self._tgt_type

    @tgt_type.setter
    def tgt_type(self, tgt_type):
        """Sets the tgt_type of this MvoRequest.


        :param tgt_type: The tgt_type of this MvoRequest.  # noqa: E501
        :type: str
        """
        allowed_values = ["risk", "return"]  # noqa: E501
        if tgt_type not in allowed_values:
            raise ValueError(
                "Invalid value for `tgt_type` ({0}), must be one of {1}"  # noqa: E501
                .format(tgt_type, allowed_values)
            )

        self._tgt_type = tgt_type

    @property
    def min_assets(self):
        """Gets the min_assets of this MvoRequest.  # noqa: E501


        :return: The min_assets of this MvoRequest.  # noqa: E501
        :rtype: int
        """
        return self._min_assets

    @min_assets.setter
    def min_assets(self, min_assets):
        """Sets the min_assets of this MvoRequest.


        :param min_assets: The min_assets of this MvoRequest.  # noqa: E501
        :type: int
        """
        if min_assets is None:
            raise ValueError("Invalid value for `min_assets`, must not be `None`")  # noqa: E501
        if min_assets is not None and min_assets < 1:  # noqa: E501
            raise ValueError("Invalid value for `min_assets`, must be a value greater than or equal to `1`")  # noqa: E501

        self._min_assets = min_assets

    @property
    def market_data_source(self):
        """Gets the market_data_source of this MvoRequest.  # noqa: E501


        :return: The market_data_source of this MvoRequest.  # noqa: E501
        :rtype: str
        """
        return self._market_data_source

    @market_data_source.setter
    def market_data_source(self, market_data_source):
        """Sets the market_data_source of this MvoRequest.


        :param market_data_source: The market_data_source of this MvoRequest.  # noqa: E501
        :type: str
        """
        allowed_values = ["nucleus", "integration"]  # noqa: E501
        if market_data_source not in allowed_values:
            raise ValueError(
                "Invalid value for `market_data_source` ({0}), must be one of {1}"  # noqa: E501
                .format(market_data_source, allowed_values)
            )

        self._market_data_source = market_data_source

    @property
    def w_asset_config(self):
        """Gets the w_asset_config of this MvoRequest.  # noqa: E501


        :return: The w_asset_config of this MvoRequest.  # noqa: E501
        :rtype: object
        """
        return self._w_asset_config

    @w_asset_config.setter
    def w_asset_config(self, w_asset_config):
        """Sets the w_asset_config of this MvoRequest.


        :param w_asset_config: The w_asset_config of this MvoRequest.  # noqa: E501
        :type: object
        """

        self._w_asset_config = w_asset_config

    @property
    def tickers(self):
        """Gets the tickers of this MvoRequest.  # noqa: E501


        :return: The tickers of this MvoRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._tickers

    @tickers.setter
    def tickers(self, tickers):
        """Sets the tickers of this MvoRequest.


        :param tickers: The tickers of this MvoRequest.  # noqa: E501
        :type: list[str]
        """
        if tickers is None:
            raise ValueError("Invalid value for `tickers`, must not be `None`")  # noqa: E501

        self._tickers = tickers

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
        if issubclass(MvoRequest, dict):
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
        if not isinstance(other, MvoRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other