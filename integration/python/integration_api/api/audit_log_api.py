# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.2.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from integration_api.api_client import ApiClient


class AuditLogApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def get_audit_log_all_using_get(self, **kwargs):  # noqa: E501
        """Gel all audit log  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_audit_log_all_using_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param bool ascending: ascending
        :param datetime end_date: end_date
        :param str event: event
        :param str integration_type: integration_type
        :param bool is_request: is_request
        :param str nucleus_client_id: nucleus_client_id
        :param str order_by: order_by
        :param int page: page
        :param str request_type: request_type
        :param int size: size
        :param datetime start_date: start_date
        :param str vendor_name: vendor_name
        :return: Pageobject
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_audit_log_all_using_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.get_audit_log_all_using_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def get_audit_log_all_using_get_with_http_info(self, **kwargs):  # noqa: E501
        """Gel all audit log  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_audit_log_all_using_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param bool ascending: ascending
        :param datetime end_date: end_date
        :param str event: event
        :param str integration_type: integration_type
        :param bool is_request: is_request
        :param str nucleus_client_id: nucleus_client_id
        :param str order_by: order_by
        :param int page: page
        :param str request_type: request_type
        :param int size: size
        :param datetime start_date: start_date
        :param str vendor_name: vendor_name
        :return: Pageobject
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['ascending', 'end_date', 'event', 'integration_type', 'is_request', 'nucleus_client_id', 'order_by', 'page', 'request_type', 'size', 'start_date', 'vendor_name']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_audit_log_all_using_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'ascending' in params:
            query_params.append(('ascending', params['ascending']))  # noqa: E501
        if 'end_date' in params:
            query_params.append(('end_date', params['end_date']))  # noqa: E501
        if 'event' in params:
            query_params.append(('event', params['event']))  # noqa: E501
        if 'integration_type' in params:
            query_params.append(('integration_type', params['integration_type']))  # noqa: E501
        if 'is_request' in params:
            query_params.append(('is_request', params['is_request']))  # noqa: E501
        if 'nucleus_client_id' in params:
            query_params.append(('nucleus_client_id', params['nucleus_client_id']))  # noqa: E501
        if 'order_by' in params:
            query_params.append(('order_by', params['order_by']))  # noqa: E501
        if 'page' in params:
            query_params.append(('page', params['page']))  # noqa: E501
        if 'request_type' in params:
            query_params.append(('request_type', params['request_type']))  # noqa: E501
        if 'size' in params:
            query_params.append(('size', params['size']))  # noqa: E501
        if 'start_date' in params:
            query_params.append(('start_date', params['start_date']))  # noqa: E501
        if 'vendor_name' in params:
            query_params.append(('vendor_name', params['vendor_name']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/audit_log', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='Pageobject',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
