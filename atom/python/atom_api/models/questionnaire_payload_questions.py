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

from atom_api.models.questionnaire_payload_answers import QuestionnairePayloadAnswers  # noqa: F401,E501


class QuestionnairePayloadQuestions(object):
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
        'category': 'str',
        'subcategory': 'str',
        'title': 'str',
        'description': 'str',
        'question_type': 'str',
        'order_index': 'str',
        'document': 'str',
        'image': 'str',
        'weight': 'float',
        'is_account': 'bool',
        'metadata': 'object',
        'answers': 'list[QuestionnairePayloadAnswers]'
    }

    attribute_map = {
        'category': 'category',
        'subcategory': 'subcategory',
        'title': 'title',
        'description': 'description',
        'question_type': 'question_type',
        'order_index': 'order_index',
        'document': 'document',
        'image': 'image',
        'weight': 'weight',
        'is_account': 'is_account',
        'metadata': 'metadata',
        'answers': 'answers'
    }

    def __init__(self, category=None, subcategory=None, title=None, description=None, question_type=None, order_index=None, document=None, image=None, weight=None, is_account=None, metadata=None, answers=None):  # noqa: E501
        """QuestionnairePayloadQuestions - a model defined in Swagger"""  # noqa: E501

        self._category = None
        self._subcategory = None
        self._title = None
        self._description = None
        self._question_type = None
        self._order_index = None
        self._document = None
        self._image = None
        self._weight = None
        self._is_account = None
        self._metadata = None
        self._answers = None
        self.discriminator = None

        if category is not None:
            self.category = category
        if subcategory is not None:
            self.subcategory = subcategory
        if title is not None:
            self.title = title
        if description is not None:
            self.description = description
        if question_type is not None:
            self.question_type = question_type
        if order_index is not None:
            self.order_index = order_index
        if document is not None:
            self.document = document
        if image is not None:
            self.image = image
        if weight is not None:
            self.weight = weight
        if is_account is not None:
            self.is_account = is_account
        if metadata is not None:
            self.metadata = metadata
        if answers is not None:
            self.answers = answers

    @property
    def category(self):
        """Gets the category of this QuestionnairePayloadQuestions.  # noqa: E501

        A category for the question such as “Onboarding” or “Risk Profile”  # noqa: E501

        :return: The category of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this QuestionnairePayloadQuestions.

        A category for the question such as “Onboarding” or “Risk Profile”  # noqa: E501

        :param category: The category of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def subcategory(self):
        """Gets the subcategory of this QuestionnairePayloadQuestions.  # noqa: E501

        A subcategory for the question such as “Income-related”  # noqa: E501

        :return: The subcategory of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._subcategory

    @subcategory.setter
    def subcategory(self, subcategory):
        """Sets the subcategory of this QuestionnairePayloadQuestions.

        A subcategory for the question such as “Income-related”  # noqa: E501

        :param subcategory: The subcategory of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._subcategory = subcategory

    @property
    def title(self):
        """Gets the title of this QuestionnairePayloadQuestions.  # noqa: E501

        Title for the question such as the body of the question or a header. Pairs with the description field  # noqa: E501

        :return: The title of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this QuestionnairePayloadQuestions.

        Title for the question such as the body of the question or a header. Pairs with the description field  # noqa: E501

        :param title: The title of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def description(self):
        """Gets the description of this QuestionnairePayloadQuestions.  # noqa: E501

        Description for the question such as additioonal question content. Pairs with the title field  # noqa: E501

        :return: The description of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this QuestionnairePayloadQuestions.

        Description for the question such as additioonal question content. Pairs with the title field  # noqa: E501

        :param description: The description of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def question_type(self):
        """Gets the question_type of this QuestionnairePayloadQuestions.  # noqa: E501

        The type of question structure such as “multiple_choice” or “free_form”  # noqa: E501

        :return: The question_type of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._question_type

    @question_type.setter
    def question_type(self, question_type):
        """Sets the question_type of this QuestionnairePayloadQuestions.

        The type of question structure such as “multiple_choice” or “free_form”  # noqa: E501

        :param question_type: The question_type of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._question_type = question_type

    @property
    def order_index(self):
        """Gets the order_index of this QuestionnairePayloadQuestions.  # noqa: E501

        The order of the question within the questionnaire or category such as “1”, “2”, “3”  # noqa: E501

        :return: The order_index of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._order_index

    @order_index.setter
    def order_index(self, order_index):
        """Sets the order_index of this QuestionnairePayloadQuestions.

        The order of the question within the questionnaire or category such as “1”, “2”, “3”  # noqa: E501

        :param order_index: The order_index of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._order_index = order_index

    @property
    def document(self):
        """Gets the document of this QuestionnairePayloadQuestions.  # noqa: E501

        A reference link to a document related to the question  # noqa: E501

        :return: The document of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._document

    @document.setter
    def document(self, document):
        """Sets the document of this QuestionnairePayloadQuestions.

        A reference link to a document related to the question  # noqa: E501

        :param document: The document of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._document = document

    @property
    def image(self):
        """Gets the image of this QuestionnairePayloadQuestions.  # noqa: E501

        A reference link to an image associated with the question  # noqa: E501

        :return: The image of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: str
        """
        return self._image

    @image.setter
    def image(self, image):
        """Sets the image of this QuestionnairePayloadQuestions.

        A reference link to an image associated with the question  # noqa: E501

        :param image: The image of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: str
        """

        self._image = image

    @property
    def weight(self):
        """Gets the weight of this QuestionnairePayloadQuestions.  # noqa: E501

        The weight of the question as a percentage of the total questionnaire if each question does not contribute equally when calculating the final “score”; ex. 20 representing 20%. Weights of all the questions must add up to 100  # noqa: E501

        :return: The weight of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: float
        """
        return self._weight

    @weight.setter
    def weight(self, weight):
        """Sets the weight of this QuestionnairePayloadQuestions.

        The weight of the question as a percentage of the total questionnaire if each question does not contribute equally when calculating the final “score”; ex. 20 representing 20%. Weights of all the questions must add up to 100  # noqa: E501

        :param weight: The weight of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: float
        """

        self._weight = weight

    @property
    def is_account(self):
        """Gets the is_account of this QuestionnairePayloadQuestions.  # noqa: E501

        Indicates if the question is answered at an account-level  # noqa: E501

        :return: The is_account of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: bool
        """
        return self._is_account

    @is_account.setter
    def is_account(self, is_account):
        """Sets the is_account of this QuestionnairePayloadQuestions.

        Indicates if the question is answered at an account-level  # noqa: E501

        :param is_account: The is_account of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: bool
        """

        self._is_account = is_account

    @property
    def metadata(self):
        """Gets the metadata of this QuestionnairePayloadQuestions.  # noqa: E501

        Custom information associated with the question in the format key:value  # noqa: E501

        :return: The metadata of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this QuestionnairePayloadQuestions.

        Custom information associated with the question in the format key:value  # noqa: E501

        :param metadata: The metadata of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: object
        """

        self._metadata = metadata

    @property
    def answers(self):
        """Gets the answers of this QuestionnairePayloadQuestions.  # noqa: E501


        :return: The answers of this QuestionnairePayloadQuestions.  # noqa: E501
        :rtype: list[QuestionnairePayloadAnswers]
        """
        return self._answers

    @answers.setter
    def answers(self, answers):
        """Sets the answers of this QuestionnairePayloadQuestions.


        :param answers: The answers of this QuestionnairePayloadQuestions.  # noqa: E501
        :type: list[QuestionnairePayloadAnswers]
        """

        self._answers = answers

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
        if issubclass(QuestionnairePayloadQuestions, dict):
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
        if not isinstance(other, QuestionnairePayloadQuestions):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other