<?php

namespace com\hydrogen\integration;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\RequestException;

class AuthApiClient
{
    private static $defaultConfiguration;
    protected $authorization = 'Authorization';
    protected $grantTypeKey = 'grant_type';
    protected $clientCredential = 'client_credentials';
    protected $password = 'password';
    protected $username = 'username';
    protected $message = 'message';
    protected $applicationJsonValue = 'application/json';
    protected $requestPostMethod = 'POST';
    protected $headers = 'headers';
    protected $accept = 'Content-type';
    protected $query = 'query';
    private $authUri = '';
    private $accessToken;
    public static function getDefaultConfiguration()
    {
        if (self::$defaultConfiguration === null) {
            self::$defaultConfiguration = new AuthApiClient();
        }
        return self::$defaultConfiguration;
    }

    function __construct()
    {
        $uri = parse_url(Configuration::getDefaultConfiguration()->getHost());
        $this->authUri = $uri['scheme'] . "://" . $uri['host'] . '/authorization/v1/oauth/token';
    }

    function createClientCredential($clientId, $clientSecret)
    {
        $baseCred = base64_encode($clientId . ':' . $clientSecret);
        $client = new Client();
        $params = [
            $this->headers => [
                $this->accept => $this->applicationJsonValue,
                $this->authorization => 'Basic ' . $baseCred
            ],
            $this->query => [
                $this->grantTypeKey => $this->clientCredential
            ]
        ];
        try {
            $res = $client->request(
                $this->requestPostMethod,
                $this->authUri,
                $params
            );
            $jsonDecode = json_decode($res->getBody()->__toString());
            $this->accessToken = $jsonDecode->access_token;
            return Configuration::getDefaultConfiguration()->setAccessToken($this->accessToken);
        } catch (ClientException $e) {
            throw new ApiException($e->getMessage(), $e->getCode(), null, null);
        } catch (RequestException $e) {
            throw new ApiException($e->getMessage(), $e->getCode(), null, null);
        }
    }

    function createPasswordCredential($clientId, $clientSecret, $userName, $password)
    {
        $baseCred = base64_encode($clientId.':'. $clientSecret);
        $client = new Client();
        $params = [
            $this->headers => [
                $this->accept => $this->applicationJsonValue,
                $this->authorization => 'Basic ' . $baseCred
            ],
            $this->query => [
                $this->grantTypeKey => $this->clientCredential,
                $this->username => $userName,
                $this->password => $password
            ]
        ];
        try {
            $res = $client->request(
                $this->requestPostMethod,
                $this->authUri,
                $params
            );
            $jsonDecode = json_decode($res->getBody()->__toString());
            $this->accessToken = $jsonDecode->access_token;
            return Configuration::getDefaultConfiguration()->setAccessToken($this->accessToken);
        } catch (ClientException $e) {
            throw new ApiException($e->getMessage(), $e->getCode(), null, null);
        } catch (RequestException $e) {
            throw new ApiException($e->getMessage(), $e->getCode(), null, null);
        }
    }

    function setAccessToken($token) {
        return Configuration::getDefaultConfiguration()->setAccessToken($token);
    }
}

?>
