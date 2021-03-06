/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.api;

import com.hydrogen.nucleus.model.CustomerRevenue;
import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.model.Customer;
import com.hydrogen.nucleus.model.PageCustomer;
import com.hydrogen.nucleus.model.PageCustomerRevenue;
import java.util.UUID;

import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for CustomerApi
 */
@Ignore
public class CustomerApiTest {

    private final CustomerApi api = new CustomerApi();

    
    /**
     * Create a customer revenue
     *
     * Create a new customer revenue, with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createCustomerRevenueUsingPostTest() throws ApiException {
        CustomerRevenue customerRevenue = null;
        CustomerRevenue response = api.createCustomerRevenueUsingPost(customerRevenue);

        // TODO: test validations
    }
    
    /**
     * Create a customer
     *
     * Create a new customer, with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createCustomerUsingPostTest() throws ApiException {
        Customer customer = null;
        Customer response = api.createCustomerUsingPost(customer);

        // TODO: test validations
    }
    
    /**
     * Delete a customer revenue
     *
     * Delete a customer revenue. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteCustomerRevenueUsingDeleteTest() throws ApiException {
        UUID customerRevenueId = null;
        api.deleteCustomerRevenueUsingDelete(customerRevenueId);

        // TODO: test validations
    }
    
    /**
     * Delete a customer
     *
     * Delete a customer. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteCustomerUsingDeleteTest() throws ApiException {
        UUID customerId = null;
        api.deleteCustomerUsingDelete(customerId);

        // TODO: test validations
    }
    
    /**
     * List all customer
     *
     * List all customer. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCustomerAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageCustomer response = api.getCustomerAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all customer revenue
     *
     * List all customer revenue. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCustomerRevenueAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageCustomerRevenue response = api.getCustomerRevenueAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a customer revenue
     *
     * Retrieve a customer revenue. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCustomerRevenueUsingGetTest() throws ApiException {
        UUID customerRevenueId = null;
        CustomerRevenue response = api.getCustomerRevenueUsingGet(customerRevenueId);

        // TODO: test validations
    }
    
    /**
     * Retrieve a customer
     *
     * Retrieve a customer. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCustomerUsingGetTest() throws ApiException {
        UUID customerId = null;
        Customer response = api.getCustomerUsingGet(customerId);

        // TODO: test validations
    }
    
    /**
     * Update a customer revenue
     *
     * Update a customer revenue. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateCustomerRevenueUsingPutTest() throws ApiException {
        CustomerRevenue customerRevenue = null;
        UUID customerRevenueId = null;
        CustomerRevenue response = api.updateCustomerRevenueUsingPut(customerRevenue, customerRevenueId);

        // TODO: test validations
    }
    
    /**
     * Update a customer
     *
     * Update a customer. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateCustomerUsingPutTest() throws ApiException {
        Customer customer = null;
        UUID customerId = null;
        Customer response = api.updateCustomerUsingPut(customer, customerId);

        // TODO: test validations
    }
    
}
