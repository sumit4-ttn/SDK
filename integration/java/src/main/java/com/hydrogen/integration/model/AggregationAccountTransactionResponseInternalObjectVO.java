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


package com.hydrogen.integration.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

/**
 * AggregationAccountTransactionResponseInternalObjectVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-11T07:03:53.789Z")
public class AggregationAccountTransactionResponseInternalObjectVO {
  @SerializedName("body")
  private AggregationAccountTransaction body = null;

  @SerializedName("status_code")
  private Integer statusCode = null;

  public AggregationAccountTransactionResponseInternalObjectVO body(AggregationAccountTransaction body) {
    this.body = body;
    return this;
  }

   /**
   * Get body
   * @return body
  **/
  @ApiModelProperty(value = "")
  public AggregationAccountTransaction getBody() {
    return body;
  }

  public void setBody(AggregationAccountTransaction body) {
    this.body = body;
  }

  public AggregationAccountTransactionResponseInternalObjectVO statusCode(Integer statusCode) {
    this.statusCode = statusCode;
    return this;
  }

   /**
   * Get statusCode
   * @return statusCode
  **/
  @ApiModelProperty(value = "")
  public Integer getStatusCode() {
    return statusCode;
  }

  public void setStatusCode(Integer statusCode) {
    this.statusCode = statusCode;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AggregationAccountTransactionResponseInternalObjectVO aggregationAccountTransactionResponseInternalObjectVO = (AggregationAccountTransactionResponseInternalObjectVO) o;
    return Objects.equals(this.body, aggregationAccountTransactionResponseInternalObjectVO.body) &&
        Objects.equals(this.statusCode, aggregationAccountTransactionResponseInternalObjectVO.statusCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(body, statusCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AggregationAccountTransactionResponseInternalObjectVO {\n");
    
    sb.append("    body: ").append(toIndentedString(body)).append("\n");
    sb.append("    statusCode: ").append(toIndentedString(statusCode)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

