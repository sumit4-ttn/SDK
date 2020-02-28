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


class WalletPermissionSpecificResponseClients(object):
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
        'nucleus_client_id': 'str',
        'permission_type': 'str',
        'client_wallet_association_type': 'str',
        'is_primary': 'bool'
    }

    attribute_map = {
        'nucleus_client_id': 'nucleus_client_id',
        'permission_type': 'permission_type',
        'client_wallet_association_type': 'client_wallet_association_type',
        'is_primary': 'is_primary'
    }

    def __init__(self, nucleus_client_id=None, permission_type=None, client_wallet_association_type=None, is_primary=True):  # noqa: E501
        """WalletPermissionSpecificResponseClients - a model defined in Swagger"""  # noqa: E501

        self._nucleus_client_id = None
        self._permission_type = None
        self._client_wallet_association_type = None
        self._is_primary = None
        self.discriminator = None

        if nucleus_client_id is not None:
            self.nucleus_client_id = nucleus_client_id
        if permission_type is not None:
            self.permission_type = permission_type
        if client_wallet_association_type is not None:
            self.client_wallet_association_type = client_wallet_association_type
        if is_primary is not None:
            self.is_primary = is_primary

    @property
    def nucleus_client_id(self):
        """Gets the nucleus_client_id of this WalletPermissionSpecificResponseClients.  # noqa: E501

        The ID of a nucleus client associated with the wallet  # noqa: E501

        :return: The nucleus_client_id of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_client_id

    @nucleus_client_id.setter
    def nucleus_client_id(self, nucleus_client_id):
        """Sets the nucleus_client_id of this WalletPermissionSpecificResponseClients.

        The ID of a nucleus client associated with the wallet  # noqa: E501

        :param nucleus_client_id: The nucleus_client_id of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :type: str
        """

        self._nucleus_client_id = nucleus_client_id

    @property
    def permission_type(self):
        """Gets the permission_type of this WalletPermissionSpecificResponseClients.  # noqa: E501

        The type of permission of the client over a wallet  # noqa: E501

        :return: The permission_type of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :rtype: str
        """
        return self._permission_type

    @permission_type.setter
    def permission_type(self, permission_type):
        """Sets the permission_type of this WalletPermissionSpecificResponseClients.

        The type of permission of the client over a wallet  # noqa: E501

        :param permission_type: The permission_type of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :type: str
        """

        self._permission_type = permission_type

    @property
    def client_wallet_association_type(self):
        """Gets the client_wallet_association_type of this WalletPermissionSpecificResponseClients.  # noqa: E501

        The role of the client as it relates to the wallet defined by your firm. Roles may be joint, owner, trustee, viewer, or admin.  # noqa: E501

        :return: The client_wallet_association_type of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :rtype: str
        """
        return self._client_wallet_association_type

    @client_wallet_association_type.setter
    def client_wallet_association_type(self, client_wallet_association_type):
        """Sets the client_wallet_association_type of this WalletPermissionSpecificResponseClients.

        The role of the client as it relates to the wallet defined by your firm. Roles may be joint, owner, trustee, viewer, or admin.  # noqa: E501

        :param client_wallet_association_type: The client_wallet_association_type of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :type: str
        """

        self._client_wallet_association_type = client_wallet_association_type

    @property
    def is_primary(self):
        """Gets the is_primary of this WalletPermissionSpecificResponseClients.  # noqa: E501

        Determines if the wallet is the primary wallet of the client. Defaults to true.  # noqa: E501

        :return: The is_primary of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :rtype: bool
        """
        return self._is_primary

    @is_primary.setter
    def is_primary(self, is_primary):
        """Sets the is_primary of this WalletPermissionSpecificResponseClients.

        Determines if the wallet is the primary wallet of the client. Defaults to true.  # noqa: E501

        :param is_primary: The is_primary of this WalletPermissionSpecificResponseClients.  # noqa: E501
        :type: bool
        """

        self._is_primary = is_primary

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
        if issubclass(WalletPermissionSpecificResponseClients, dict):
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
        if not isinstance(other, WalletPermissionSpecificResponseClients):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other