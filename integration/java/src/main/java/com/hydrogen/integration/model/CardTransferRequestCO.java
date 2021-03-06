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

import java.util.UUID;

/**
 * CardTransferRequestCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-11T07:03:53.789Z")
public class CardTransferRequestCO {
  @SerializedName("nucleus_card_id_from")
  private UUID nucleusCardIdFrom = null;

  @SerializedName("nucleus_card_id_to")
  private UUID nucleusCardIdTo = null;

  @SerializedName("reason")
  private String reason = null;

  public CardTransferRequestCO nucleusCardIdFrom(UUID nucleusCardIdFrom) {
    this.nucleusCardIdFrom = nucleusCardIdFrom;
    return this;
  }

   /**
   * Get nucleusCardIdFrom
   * @return nucleusCardIdFrom
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusCardIdFrom() {
    return nucleusCardIdFrom;
  }

  public void setNucleusCardIdFrom(UUID nucleusCardIdFrom) {
    this.nucleusCardIdFrom = nucleusCardIdFrom;
  }

  public CardTransferRequestCO nucleusCardIdTo(UUID nucleusCardIdTo) {
    this.nucleusCardIdTo = nucleusCardIdTo;
    return this;
  }

   /**
   * Get nucleusCardIdTo
   * @return nucleusCardIdTo
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusCardIdTo() {
    return nucleusCardIdTo;
  }

  public void setNucleusCardIdTo(UUID nucleusCardIdTo) {
    this.nucleusCardIdTo = nucleusCardIdTo;
  }

  public CardTransferRequestCO reason(String reason) {
    this.reason = reason;
    return this;
  }

   /**
   * Get reason
   * @return reason
  **/
  @ApiModelProperty(value = "")
  public String getReason() {
    return reason;
  }

  public void setReason(String reason) {
    this.reason = reason;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CardTransferRequestCO cardTransferRequestCO = (CardTransferRequestCO) o;
    return Objects.equals(this.nucleusCardIdFrom, cardTransferRequestCO.nucleusCardIdFrom) &&
        Objects.equals(this.nucleusCardIdTo, cardTransferRequestCO.nucleusCardIdTo) &&
        Objects.equals(this.reason, cardTransferRequestCO.reason);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nucleusCardIdFrom, nucleusCardIdTo, reason);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CardTransferRequestCO {\n");
    
    sb.append("    nucleusCardIdFrom: ").append(toIndentedString(nucleusCardIdFrom)).append("\n");
    sb.append("    nucleusCardIdTo: ").append(toIndentedString(nucleusCardIdTo)).append("\n");
    sb.append("    reason: ").append(toIndentedString(reason)).append("\n");
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

