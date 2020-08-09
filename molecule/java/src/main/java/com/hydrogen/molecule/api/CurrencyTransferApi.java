/*
 * Molecule API Documentation
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.molecule.api;

import com.hydrogen.molecule.ApiCallback;
import com.hydrogen.molecule.ApiClient;
import com.hydrogen.molecule.ApiException;
import com.hydrogen.molecule.ApiResponse;
import com.hydrogen.molecule.Configuration;
import com.hydrogen.molecule.Pair;
import com.hydrogen.molecule.ProgressRequestBody;
import com.hydrogen.molecule.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.hydrogen.molecule.model.CurrencyTransferParams;
import com.hydrogen.molecule.model.CurrencyTransferResponse;
import com.hydrogen.molecule.model.PageCurrencyTransferResponse;
import com.hydrogen.molecule.model.TransactionSuccessResponse;
import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CurrencyTransferApi {
    private ApiClient apiClient;

    public CurrencyTransferApi() {
        this(Configuration.getDefaultApiClient());
    }

    public CurrencyTransferApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for createCurrencyTransferUsingPost
     * @param currencyTransferParams It enables a user to transfer Currency (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call createCurrencyTransferUsingPostCall(CurrencyTransferParams currencyTransferParams, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = currencyTransferParams;

        // create path and map variables
        String localVarPath = "/currency_transfer";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call createCurrencyTransferUsingPostValidateBeforeCall(CurrencyTransferParams currencyTransferParams, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'currencyTransferParams' is set
        if (currencyTransferParams == null) {
            throw new ApiException("Missing the required parameter 'currencyTransferParams' when calling createCurrencyTransferUsingPost(Async)");
        }
        

        com.squareup.okhttp.Call call = createCurrencyTransferUsingPostCall(currencyTransferParams, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Creates Currency Transfer record
     * 
     * @param currencyTransferParams It enables a user to transfer Currency (required)
     * @return TransactionSuccessResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public TransactionSuccessResponse createCurrencyTransferUsingPost(CurrencyTransferParams currencyTransferParams) throws ApiException {
        ApiResponse<TransactionSuccessResponse> resp = createCurrencyTransferUsingPostWithHttpInfo(currencyTransferParams);
        return resp.getData();
    }

    /**
     * Creates Currency Transfer record
     * 
     * @param currencyTransferParams It enables a user to transfer Currency (required)
     * @return ApiResponse&lt;TransactionSuccessResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<TransactionSuccessResponse> createCurrencyTransferUsingPostWithHttpInfo(CurrencyTransferParams currencyTransferParams) throws ApiException {
        com.squareup.okhttp.Call call = createCurrencyTransferUsingPostValidateBeforeCall(currencyTransferParams, null, null);
        Type localVarReturnType = new TypeToken<TransactionSuccessResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Creates Currency Transfer record (asynchronously)
     * 
     * @param currencyTransferParams It enables a user to transfer Currency (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call createCurrencyTransferUsingPostAsync(CurrencyTransferParams currencyTransferParams, final ApiCallback<TransactionSuccessResponse> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = createCurrencyTransferUsingPostValidateBeforeCall(currencyTransferParams, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<TransactionSuccessResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getCurrencyTransferAllUsingGet
     * @param walletId To filter response Currency Transfer list by Wallet ID (optional)
     * @param currencyId To filter response Currency Transfer list by Currency ID (optional)
     * @param page To filter response Currency Transfer list by page number (optional)
     * @param size Number of records per page (optional)
     * @param orderBy Field to sort record list (optional)
     * @param ascending Sorting order (optional)
     * @param getLatest To fetch latest (one) record (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getCurrencyTransferAllUsingGetCall(UUID walletId, UUID currencyId, Integer page, Integer size, String orderBy, Boolean ascending, Boolean getLatest, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/currency_transfer";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (walletId != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("wallet_id", walletId));
        if (currencyId != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("currency_id", currencyId));
        if (page != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("page", page));
        if (size != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("size", size));
        if (orderBy != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("order_by", orderBy));
        if (ascending != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("ascending", ascending));
        if (getLatest != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("get_latest", getLatest));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getCurrencyTransferAllUsingGetValidateBeforeCall(UUID walletId, UUID currencyId, Integer page, Integer size, String orderBy, Boolean ascending, Boolean getLatest, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = getCurrencyTransferAllUsingGetCall(walletId, currencyId, page, size, orderBy, ascending, getLatest, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Fetch Currency Transfer record list
     * 
     * @param walletId To filter response Currency Transfer list by Wallet ID (optional)
     * @param currencyId To filter response Currency Transfer list by Currency ID (optional)
     * @param page To filter response Currency Transfer list by page number (optional)
     * @param size Number of records per page (optional)
     * @param orderBy Field to sort record list (optional)
     * @param ascending Sorting order (optional)
     * @param getLatest To fetch latest (one) record (optional)
     * @return PageCurrencyTransferResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public PageCurrencyTransferResponse getCurrencyTransferAllUsingGet(UUID walletId, UUID currencyId, Integer page, Integer size, String orderBy, Boolean ascending, Boolean getLatest) throws ApiException {
        ApiResponse<PageCurrencyTransferResponse> resp = getCurrencyTransferAllUsingGetWithHttpInfo(walletId, currencyId, page, size, orderBy, ascending, getLatest);
        return resp.getData();
    }

    /**
     * Fetch Currency Transfer record list
     * 
     * @param walletId To filter response Currency Transfer list by Wallet ID (optional)
     * @param currencyId To filter response Currency Transfer list by Currency ID (optional)
     * @param page To filter response Currency Transfer list by page number (optional)
     * @param size Number of records per page (optional)
     * @param orderBy Field to sort record list (optional)
     * @param ascending Sorting order (optional)
     * @param getLatest To fetch latest (one) record (optional)
     * @return ApiResponse&lt;PageCurrencyTransferResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<PageCurrencyTransferResponse> getCurrencyTransferAllUsingGetWithHttpInfo(UUID walletId, UUID currencyId, Integer page, Integer size, String orderBy, Boolean ascending, Boolean getLatest) throws ApiException {
        com.squareup.okhttp.Call call = getCurrencyTransferAllUsingGetValidateBeforeCall(walletId, currencyId, page, size, orderBy, ascending, getLatest, null, null);
        Type localVarReturnType = new TypeToken<PageCurrencyTransferResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Fetch Currency Transfer record list (asynchronously)
     * 
     * @param walletId To filter response Currency Transfer list by Wallet ID (optional)
     * @param currencyId To filter response Currency Transfer list by Currency ID (optional)
     * @param page To filter response Currency Transfer list by page number (optional)
     * @param size Number of records per page (optional)
     * @param orderBy Field to sort record list (optional)
     * @param ascending Sorting order (optional)
     * @param getLatest To fetch latest (one) record (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getCurrencyTransferAllUsingGetAsync(UUID walletId, UUID currencyId, Integer page, Integer size, String orderBy, Boolean ascending, Boolean getLatest, final ApiCallback<PageCurrencyTransferResponse> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = getCurrencyTransferAllUsingGetValidateBeforeCall(walletId, currencyId, page, size, orderBy, ascending, getLatest, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<PageCurrencyTransferResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getCurrencyTransferUsingGet
     * @param currencyTransferId Currency Transfer ID (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getCurrencyTransferUsingGetCall(UUID currencyTransferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/currency_transfer/{currency_transfer_id}"
            .replaceAll("\\{" + "currency_transfer_id" + "\\}", apiClient.escapeString(currencyTransferId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getCurrencyTransferUsingGetValidateBeforeCall(UUID currencyTransferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'currencyTransferId' is set
        if (currencyTransferId == null) {
            throw new ApiException("Missing the required parameter 'currencyTransferId' when calling getCurrencyTransferUsingGet(Async)");
        }
        

        com.squareup.okhttp.Call call = getCurrencyTransferUsingGetCall(currencyTransferId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Fetch Currency Transfer record details
     * 
     * @param currencyTransferId Currency Transfer ID (required)
     * @return CurrencyTransferResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public CurrencyTransferResponse getCurrencyTransferUsingGet(UUID currencyTransferId) throws ApiException {
        ApiResponse<CurrencyTransferResponse> resp = getCurrencyTransferUsingGetWithHttpInfo(currencyTransferId);
        return resp.getData();
    }

    /**
     * Fetch Currency Transfer record details
     * 
     * @param currencyTransferId Currency Transfer ID (required)
     * @return ApiResponse&lt;CurrencyTransferResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<CurrencyTransferResponse> getCurrencyTransferUsingGetWithHttpInfo(UUID currencyTransferId) throws ApiException {
        com.squareup.okhttp.Call call = getCurrencyTransferUsingGetValidateBeforeCall(currencyTransferId, null, null);
        Type localVarReturnType = new TypeToken<CurrencyTransferResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Fetch Currency Transfer record details (asynchronously)
     * 
     * @param currencyTransferId Currency Transfer ID (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getCurrencyTransferUsingGetAsync(UUID currencyTransferId, final ApiCallback<CurrencyTransferResponse> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = getCurrencyTransferUsingGetValidateBeforeCall(currencyTransferId, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<CurrencyTransferResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}