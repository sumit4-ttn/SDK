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


class EducationCalculatorAnnualCostRequest(object):
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
        'decumulation_horizon': 'int',
        'deposit_schedule': 'object',
        'initial_balance': 'float',
        'portfolio_return': 'float',
        'education_inflation_rate': 'float',
        'tax_rate': 'float',
        'percent_of_costs_covered': 'float',
        'aggregation_account_ids': 'list[str]',
        'account_ids': 'list[str]',
        'accumulation_horizon': 'int',
        'general_inflation_rate': 'float'
    }

    attribute_map = {
        'decumulation_horizon': 'decumulation_horizon',
        'deposit_schedule': 'deposit_schedule',
        'initial_balance': 'initial_balance',
        'portfolio_return': 'portfolio_return',
        'education_inflation_rate': 'education_inflation_rate',
        'tax_rate': 'tax_rate',
        'percent_of_costs_covered': 'percent_of_costs_covered',
        'aggregation_account_ids': 'aggregation_account_ids',
        'account_ids': 'account_ids',
        'accumulation_horizon': 'accumulation_horizon',
        'general_inflation_rate': 'general_inflation_rate'
    }

    def __init__(self, decumulation_horizon=None, deposit_schedule=None, initial_balance=0.0, portfolio_return=None, education_inflation_rate=0.05, tax_rate=0.0, percent_of_costs_covered=1.0, aggregation_account_ids=None, account_ids=None, accumulation_horizon=None, general_inflation_rate=0.0):  # noqa: E501
        """EducationCalculatorAnnualCostRequest - a model defined in Swagger"""  # noqa: E501

        self._decumulation_horizon = None
        self._deposit_schedule = None
        self._initial_balance = None
        self._portfolio_return = None
        self._education_inflation_rate = None
        self._tax_rate = None
        self._percent_of_costs_covered = None
        self._aggregation_account_ids = None
        self._account_ids = None
        self._accumulation_horizon = None
        self._general_inflation_rate = None
        self.discriminator = None

        self.decumulation_horizon = decumulation_horizon
        if deposit_schedule is not None:
            self.deposit_schedule = deposit_schedule
        if initial_balance is not None:
            self.initial_balance = initial_balance
        self.portfolio_return = portfolio_return
        if education_inflation_rate is not None:
            self.education_inflation_rate = education_inflation_rate
        if tax_rate is not None:
            self.tax_rate = tax_rate
        if percent_of_costs_covered is not None:
            self.percent_of_costs_covered = percent_of_costs_covered
        if aggregation_account_ids is not None:
            self.aggregation_account_ids = aggregation_account_ids
        if account_ids is not None:
            self.account_ids = account_ids
        self.accumulation_horizon = accumulation_horizon
        if general_inflation_rate is not None:
            self.general_inflation_rate = general_inflation_rate

    @property
    def decumulation_horizon(self):
        """Gets the decumulation_horizon of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The decumulation_horizon of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: int
        """
        return self._decumulation_horizon

    @decumulation_horizon.setter
    def decumulation_horizon(self, decumulation_horizon):
        """Sets the decumulation_horizon of this EducationCalculatorAnnualCostRequest.


        :param decumulation_horizon: The decumulation_horizon of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: int
        """
        if decumulation_horizon is None:
            raise ValueError("Invalid value for `decumulation_horizon`, must not be `None`")  # noqa: E501
        if decumulation_horizon is not None and decumulation_horizon < 0:  # noqa: E501
            raise ValueError("Invalid value for `decumulation_horizon`, must be a value greater than or equal to `0`")  # noqa: E501

        self._decumulation_horizon = decumulation_horizon

    @property
    def deposit_schedule(self):
        """Gets the deposit_schedule of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The deposit_schedule of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: object
        """
        return self._deposit_schedule

    @deposit_schedule.setter
    def deposit_schedule(self, deposit_schedule):
        """Sets the deposit_schedule of this EducationCalculatorAnnualCostRequest.


        :param deposit_schedule: The deposit_schedule of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: object
        """

        self._deposit_schedule = deposit_schedule

    @property
    def initial_balance(self):
        """Gets the initial_balance of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The initial_balance of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: float
        """
        return self._initial_balance

    @initial_balance.setter
    def initial_balance(self, initial_balance):
        """Sets the initial_balance of this EducationCalculatorAnnualCostRequest.


        :param initial_balance: The initial_balance of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: float
        """
        if initial_balance is not None and initial_balance < 0:  # noqa: E501
            raise ValueError("Invalid value for `initial_balance`, must be a value greater than or equal to `0`")  # noqa: E501

        self._initial_balance = initial_balance

    @property
    def portfolio_return(self):
        """Gets the portfolio_return of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The portfolio_return of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: float
        """
        return self._portfolio_return

    @portfolio_return.setter
    def portfolio_return(self, portfolio_return):
        """Sets the portfolio_return of this EducationCalculatorAnnualCostRequest.


        :param portfolio_return: The portfolio_return of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: float
        """
        if portfolio_return is None:
            raise ValueError("Invalid value for `portfolio_return`, must not be `None`")  # noqa: E501
        if portfolio_return is not None and portfolio_return < -1:  # noqa: E501
            raise ValueError("Invalid value for `portfolio_return`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._portfolio_return = portfolio_return

    @property
    def education_inflation_rate(self):
        """Gets the education_inflation_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The education_inflation_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: float
        """
        return self._education_inflation_rate

    @education_inflation_rate.setter
    def education_inflation_rate(self, education_inflation_rate):
        """Sets the education_inflation_rate of this EducationCalculatorAnnualCostRequest.


        :param education_inflation_rate: The education_inflation_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: float
        """
        if education_inflation_rate is not None and education_inflation_rate < -1:  # noqa: E501
            raise ValueError("Invalid value for `education_inflation_rate`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._education_inflation_rate = education_inflation_rate

    @property
    def tax_rate(self):
        """Gets the tax_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The tax_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: float
        """
        return self._tax_rate

    @tax_rate.setter
    def tax_rate(self, tax_rate):
        """Sets the tax_rate of this EducationCalculatorAnnualCostRequest.


        :param tax_rate: The tax_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: float
        """
        if tax_rate is not None and tax_rate > 1:  # noqa: E501
            raise ValueError("Invalid value for `tax_rate`, must be a value less than or equal to `1`")  # noqa: E501
        if tax_rate is not None and tax_rate < 0:  # noqa: E501
            raise ValueError("Invalid value for `tax_rate`, must be a value greater than or equal to `0`")  # noqa: E501

        self._tax_rate = tax_rate

    @property
    def percent_of_costs_covered(self):
        """Gets the percent_of_costs_covered of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The percent_of_costs_covered of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: float
        """
        return self._percent_of_costs_covered

    @percent_of_costs_covered.setter
    def percent_of_costs_covered(self, percent_of_costs_covered):
        """Sets the percent_of_costs_covered of this EducationCalculatorAnnualCostRequest.


        :param percent_of_costs_covered: The percent_of_costs_covered of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: float
        """
        if percent_of_costs_covered is not None and percent_of_costs_covered > 1:  # noqa: E501
            raise ValueError("Invalid value for `percent_of_costs_covered`, must be a value less than or equal to `1`")  # noqa: E501
        if percent_of_costs_covered is not None and percent_of_costs_covered < 0:  # noqa: E501
            raise ValueError("Invalid value for `percent_of_costs_covered`, must be a value greater than or equal to `0`")  # noqa: E501

        self._percent_of_costs_covered = percent_of_costs_covered

    @property
    def aggregation_account_ids(self):
        """Gets the aggregation_account_ids of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The aggregation_account_ids of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._aggregation_account_ids

    @aggregation_account_ids.setter
    def aggregation_account_ids(self, aggregation_account_ids):
        """Sets the aggregation_account_ids of this EducationCalculatorAnnualCostRequest.


        :param aggregation_account_ids: The aggregation_account_ids of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: list[str]
        """

        self._aggregation_account_ids = aggregation_account_ids

    @property
    def account_ids(self):
        """Gets the account_ids of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The account_ids of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._account_ids

    @account_ids.setter
    def account_ids(self, account_ids):
        """Sets the account_ids of this EducationCalculatorAnnualCostRequest.


        :param account_ids: The account_ids of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: list[str]
        """

        self._account_ids = account_ids

    @property
    def accumulation_horizon(self):
        """Gets the accumulation_horizon of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The accumulation_horizon of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: int
        """
        return self._accumulation_horizon

    @accumulation_horizon.setter
    def accumulation_horizon(self, accumulation_horizon):
        """Sets the accumulation_horizon of this EducationCalculatorAnnualCostRequest.


        :param accumulation_horizon: The accumulation_horizon of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: int
        """
        if accumulation_horizon is None:
            raise ValueError("Invalid value for `accumulation_horizon`, must not be `None`")  # noqa: E501
        if accumulation_horizon is not None and accumulation_horizon < 0:  # noqa: E501
            raise ValueError("Invalid value for `accumulation_horizon`, must be a value greater than or equal to `0`")  # noqa: E501

        self._accumulation_horizon = accumulation_horizon

    @property
    def general_inflation_rate(self):
        """Gets the general_inflation_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501


        :return: The general_inflation_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :rtype: float
        """
        return self._general_inflation_rate

    @general_inflation_rate.setter
    def general_inflation_rate(self, general_inflation_rate):
        """Sets the general_inflation_rate of this EducationCalculatorAnnualCostRequest.


        :param general_inflation_rate: The general_inflation_rate of this EducationCalculatorAnnualCostRequest.  # noqa: E501
        :type: float
        """
        if general_inflation_rate is not None and general_inflation_rate < -1:  # noqa: E501
            raise ValueError("Invalid value for `general_inflation_rate`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._general_inflation_rate = general_inflation_rate

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
        if issubclass(EducationCalculatorAnnualCostRequest, dict):
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
        if not isinstance(other, EducationCalculatorAnnualCostRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
