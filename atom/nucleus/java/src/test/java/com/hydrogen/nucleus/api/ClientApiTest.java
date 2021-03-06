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

import com.hydrogen.nucleus.model.AvailableDateDoubleVO;
import com.hydrogen.nucleus.model.ClientHydro;
import com.hydrogen.nucleus.model.PageClientHydro;
import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.model.AdvisorOverviewVO;
import com.hydrogen.nucleus.model.Client;
import com.hydrogen.nucleus.model.ClientAccountVO;
import com.hydrogen.nucleus.model.ClientAnalyticsResponse;
import com.hydrogen.nucleus.model.ClientStatus;
import com.hydrogen.nucleus.model.PageClient;
import com.hydrogen.nucleus.model.PageClientStatus;
import com.hydrogen.nucleus.model.PagePortfolioTransaction;
import com.hydrogen.nucleus.model.PortfolioHoldingAgg;
import com.hydrogen.nucleus.model.VClientGoalViewData;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

import java.util.UUID;

import org.junit.Test;
import org.junit.Ignore;

import java.util.List;

/**
 * API tests for ClientApi
 */
@Ignore
public class ClientApiTest {

    private final ClientApi api = new ClientApi();

    
    /**
     * Create a client-hydro relationship
     *
     * Create an client-hydro relationship under a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createClientHydroUsingPostTest() throws ApiException {
        ClientHydro clientHydro = null;
        ClientHydro response = api.createClientHydroUsingPost(clientHydro);

        // TODO: test validations
    }
    
    /**
     * Create an client status
     *
     * Create an client status record for an client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createClientStatusUsingPostTest() throws ApiException {
        ClientStatus clientStatusRequest = null;
        ClientStatus response = api.createClientStatusUsingPost(clientStatusRequest);

        // TODO: test validations
    }
    
    /**
     * Create a client
     *
     * Create a new client, or register a new user, with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createClientUsingPostTest() throws ApiException {
        Client clientRequest = null;
        Client response = api.createClientUsingPost(clientRequest);

        // TODO: test validations
    }
    
    /**
     * Delete a client-hydro relationship
     *
     * Permanently delete a client-hydro relationship for a Hydro ID and a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteClientHydroUsingDeleteTest() throws ApiException {
        UUID clientHydroId = null;
        api.deleteClientHydroUsingDelete(clientHydroId);

        // TODO: test validations
    }
    
    /**
     * Delete an client status
     *
     * Permanently delete an client status record from an client’s history.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteClientStatusUsingDeleteTest() throws ApiException {
        UUID clientStatusId = null;
        api.deleteClientStatusUsingDelete(clientStatusId);

        // TODO: test validations
    }
    
    /**
     * Delete a client
     *
     * Permanently delete a client registered with your firm. Turns the client&#39;s is_active  &#x3D; 0
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteClientUsingDeleteTest() throws ApiException {
        UUID clientId = null;
        api.deleteClientUsingDelete(clientId);

        // TODO: test validations
    }
    
    /**
     * List all client Account overview
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientAccountOverviewUsingGetTest() throws ApiException {
        UUID clientId = null;
        Boolean ascending = null;
        String orderBy = null;
        ClientAccountVO response = api.getClientAccountOverviewUsingGet(clientId, ascending, orderBy);

        // TODO: test validations
    }
    
    /**
     * Advisor overview
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientAdvisorOverviewUsingGetTest() throws ApiException {
        UUID clientId = null;
        Boolean showClients = null;
        AdvisorOverviewVO response = api.getClientAdvisorOverviewUsingGet(clientId, showClients);

        // TODO: test validations
    }
    
    /**
     * List all clients
     *
     * Get details for all clients registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageClient response = api.getClientAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all client asset sizes
     *
     * Get a list of asset sizes per date for a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientAssetSizeUsingGetTest() throws ApiException {
        UUID clientId = null;
        LocalDate endDate = null;
        Boolean excludeSubledger = null;
        Boolean getLatest = null;
        String sortType = null;
        LocalDate startDate = null;
        List<AvailableDateDoubleVO> response = api.getClientAssetSizeUsingGet(clientId, endDate, excludeSubledger, getLatest, sortType, startDate);

        // TODO: test validations
    }
    
    /**
     * Retrieve client&#39;s goal details 
     *
     * Retrieve client&#39;s goal details
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientGoalOverviewUsingGetTest() throws ApiException {
        UUID clientId = null;
        Boolean portfolioGoal = null;
        VClientGoalViewData response = api.getClientGoalOverviewUsingGet(clientId, portfolioGoal);

        // TODO: test validations
    }
    
    /**
     * List all client holdings
     *
     * Get the information for all the securities that are currently being held by a client registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientHoldingUsingGetTest() throws ApiException {
        UUID clientId = null;
        String endDate = null;
        Boolean getLatest = null;
        String startDate = null;
        List<PortfolioHoldingAgg> response = api.getClientHoldingUsingGet(clientId, endDate, getLatest, startDate);

        // TODO: test validations
    }
    
    /**
     * List all client-hydro relationship
     *
     * Get information for all client-hydro relationships for all clients defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientHydroAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageClientHydro response = api.getClientHydroAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a client-hydro relationship
     *
     * Retrieve the information for a specific client-hydro relationship.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientHydroUsingGetTest() throws ApiException {
        UUID clientHydroId = null;
        ClientHydro response = api.getClientHydroUsingGet(clientHydroId);

        // TODO: test validations
    }
    
    /**
     * List all client statuses
     *
     * Get the client status history information for all clients.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientStatusAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageClientStatus response = api.getClientStatusAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve an client status
     *
     * Retrieve the information for a specific client status record for an client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientStatusUsingGetTest() throws ApiException {
        UUID clientStatusId = null;
        ClientStatus response = api.getClientStatusUsingGet(clientStatusId);

        // TODO: test validations
    }
    
    /**
     * List all client transactions
     *
     * Get the information for all transactions under a client registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientTransactionUsingGetTest() throws ApiException {
        UUID clientId = null;
        Boolean ascending = null;
        OffsetDateTime endDate = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        OffsetDateTime startDate = null;
        PagePortfolioTransaction response = api.getClientTransactionUsingGet(clientId, ascending, endDate, orderBy, page, size, startDate);

        // TODO: test validations
    }
    
    /**
     * Retrieve a client
     *
     * Retrieve the information for a client registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getClientUsingGetTest() throws ApiException {
        UUID clientId = null;
        Client response = api.getClientUsingGet(clientId);

        // TODO: test validations
    }
    
    /**
     * total clients
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getTotalClientsUsingGetTest() throws ApiException {
        OffsetDateTime asOfDate = null;
        String clientId = null;
        OffsetDateTime endDate = null;
        Boolean showHistory = null;
        OffsetDateTime startDate = null;
        ClientAnalyticsResponse response = api.getTotalClientsUsingGet(asOfDate, clientId, endDate, showHistory, startDate);

        // TODO: test validations
    }
    
    /**
     * Update a client-hydro relationship
     *
     * Update the information for a client-hydro relationship.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateClientHydroUsingPutTest() throws ApiException {
        ClientHydro clientHydro = null;
        UUID clientHydroId = null;
        ClientHydro response = api.updateClientHydroUsingPut(clientHydro, clientHydroId);

        // TODO: test validations
    }
    
    /**
     * Update an client status
     *
     * Update an client status record for an client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateClientStatusUsingPutTest() throws ApiException {
        ClientStatus clientStatus = null;
        UUID clientStatusId = null;
        ClientStatus response = api.updateClientStatusUsingPut(clientStatus, clientStatusId);

        // TODO: test validations
    }
    
    /**
     * Update a client
     *
     * Update the information for a client registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateClientUsingPutTest() throws ApiException {
        Client client = null;
        UUID clientId = null;
        Client response = api.updateClientUsingPut(client, clientId);

        // TODO: test validations
    }
    
}
