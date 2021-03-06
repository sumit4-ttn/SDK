/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.api;

import com.hydrogen.integration.ApiException;
import com.hydrogen.integration.model.KmsConfig;
import com.hydrogen.integration.model.PageKmsConfig;

import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for KmsApi
 */
@Ignore
public class KmsApiTest {

    private final KmsApi api = new KmsApi();

    
    /**
     * Create an secret key
     *
     * Create an secret key.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createKMSUsingPostTest() throws ApiException {
        KmsConfig kmsConfig = null;
        KmsConfig response = api.createKMSUsingPost(kmsConfig);

        // TODO: test validations
    }
    
    /**
     * Delete an secret key value
     *
     * Permanently delete an secret key value under a tenant.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteKMSUsingDeleteTest() throws ApiException {
        UUID kmsId = null;
        api.deleteKMSUsingDelete(kmsId);

        // TODO: test validations
    }
    
    /**
     * List all KMS Clients
     *
     * Get details for all clients registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getKMSAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageKmsConfig response = api.getKMSAllUsingGet(ascending, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve an secret key value
     *
     * Retrieve the information for a specific value associated with a Secret key.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getKMSUsingGetTest() throws ApiException {
        UUID kmsId = null;
        KmsConfig response = api.getKMSUsingGet(kmsId);

        // TODO: test validations
    }
    
    /**
     * Update an Key Value
     *
     * Update the information for an key value.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateKMSUsingPutTest() throws ApiException {
        KmsConfig kmsConfig = null;
        UUID kmsId = null;
        KmsConfig response = api.updateKMSUsingPut(kmsConfig, kmsId);

        // TODO: test validations
    }
    
}
