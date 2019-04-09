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


class DimensionalRiskScore(object):
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
        'answers': 'list[float]',
        'max_answers': 'list[float]',
        'answer_dims': 'list[list[str]]',
        'dims': 'list[str]',
        'dim_weights': 'list[float]',
        'answer_weights': 'list[float]'
    }

    attribute_map = {
        'answers': 'answers',
        'max_answers': 'max_answers',
        'answer_dims': 'answer_dims',
        'dims': 'dims',
        'dim_weights': 'dim_weights',
        'answer_weights': 'answer_weights'
    }

    def __init__(self, answers=None, max_answers=None, answer_dims=None, dims=None, dim_weights=None, answer_weights=None):  # noqa: E501
        """DimensionalRiskScore - a model defined in Swagger"""  # noqa: E501

        self._answers = None
        self._max_answers = None
        self._answer_dims = None
        self._dims = None
        self._dim_weights = None
        self._answer_weights = None
        self.discriminator = None

        self.answers = answers
        self.max_answers = max_answers
        self.answer_dims = answer_dims
        self.dims = dims
        if dim_weights is not None:
            self.dim_weights = dim_weights
        if answer_weights is not None:
            self.answer_weights = answer_weights

    @property
    def answers(self):
        """Gets the answers of this DimensionalRiskScore.  # noqa: E501

        Answer values  # noqa: E501

        :return: The answers of this DimensionalRiskScore.  # noqa: E501
        :rtype: list[float]
        """
        return self._answers

    @answers.setter
    def answers(self, answers):
        """Sets the answers of this DimensionalRiskScore.

        Answer values  # noqa: E501

        :param answers: The answers of this DimensionalRiskScore.  # noqa: E501
        :type: list[float]
        """
        if answers is None:
            raise ValueError("Invalid value for `answers`, must not be `None`")  # noqa: E501

        self._answers = answers

    @property
    def max_answers(self):
        """Gets the max_answers of this DimensionalRiskScore.  # noqa: E501

        Maximum possible answer values  # noqa: E501

        :return: The max_answers of this DimensionalRiskScore.  # noqa: E501
        :rtype: list[float]
        """
        return self._max_answers

    @max_answers.setter
    def max_answers(self, max_answers):
        """Sets the max_answers of this DimensionalRiskScore.

        Maximum possible answer values  # noqa: E501

        :param max_answers: The max_answers of this DimensionalRiskScore.  # noqa: E501
        :type: list[float]
        """
        if max_answers is None:
            raise ValueError("Invalid value for `max_answers`, must not be `None`")  # noqa: E501

        self._max_answers = max_answers

    @property
    def answer_dims(self):
        """Gets the answer_dims of this DimensionalRiskScore.  # noqa: E501


        :return: The answer_dims of this DimensionalRiskScore.  # noqa: E501
        :rtype: list[list[str]]
        """
        return self._answer_dims

    @answer_dims.setter
    def answer_dims(self, answer_dims):
        """Sets the answer_dims of this DimensionalRiskScore.


        :param answer_dims: The answer_dims of this DimensionalRiskScore.  # noqa: E501
        :type: list[list[str]]
        """
        if answer_dims is None:
            raise ValueError("Invalid value for `answer_dims`, must not be `None`")  # noqa: E501

        self._answer_dims = answer_dims

    @property
    def dims(self):
        """Gets the dims of this DimensionalRiskScore.  # noqa: E501

        Labels for available risk dimensions  # noqa: E501

        :return: The dims of this DimensionalRiskScore.  # noqa: E501
        :rtype: list[str]
        """
        return self._dims

    @dims.setter
    def dims(self, dims):
        """Sets the dims of this DimensionalRiskScore.

        Labels for available risk dimensions  # noqa: E501

        :param dims: The dims of this DimensionalRiskScore.  # noqa: E501
        :type: list[str]
        """
        if dims is None:
            raise ValueError("Invalid value for `dims`, must not be `None`")  # noqa: E501

        self._dims = dims

    @property
    def dim_weights(self):
        """Gets the dim_weights of this DimensionalRiskScore.  # noqa: E501

        Weights for each risk dimension  # noqa: E501

        :return: The dim_weights of this DimensionalRiskScore.  # noqa: E501
        :rtype: list[float]
        """
        return self._dim_weights

    @dim_weights.setter
    def dim_weights(self, dim_weights):
        """Sets the dim_weights of this DimensionalRiskScore.

        Weights for each risk dimension  # noqa: E501

        :param dim_weights: The dim_weights of this DimensionalRiskScore.  # noqa: E501
        :type: list[float]
        """

        self._dim_weights = dim_weights

    @property
    def answer_weights(self):
        """Gets the answer_weights of this DimensionalRiskScore.  # noqa: E501

        Weights for each risk dimension answer  # noqa: E501

        :return: The answer_weights of this DimensionalRiskScore.  # noqa: E501
        :rtype: list[float]
        """
        return self._answer_weights

    @answer_weights.setter
    def answer_weights(self, answer_weights):
        """Sets the answer_weights of this DimensionalRiskScore.

        Weights for each risk dimension answer  # noqa: E501

        :param answer_weights: The answer_weights of this DimensionalRiskScore.  # noqa: E501
        :type: list[float]
        """

        self._answer_weights = answer_weights

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
        if issubclass(DimensionalRiskScore, dict):
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
        if not isinstance(other, DimensionalRiskScore):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other