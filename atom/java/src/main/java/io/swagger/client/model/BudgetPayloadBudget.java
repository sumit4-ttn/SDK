/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * BudgetPayloadBudget
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class BudgetPayloadBudget {
  @SerializedName("category")
  private String category = null;

  @SerializedName("subcategory")
  private String subcategory = null;

  @SerializedName("value")
  private Double value = null;

  public BudgetPayloadBudget category(String category) {
    this.category = category;
    return this;
  }

   /**
   * Category of the budget
   * @return category
  **/
  @ApiModelProperty(required = true, value = "Category of the budget")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public BudgetPayloadBudget subcategory(String subcategory) {
    this.subcategory = subcategory;
    return this;
  }

   /**
   * Subcategory of the budget
   * @return subcategory
  **/
  @ApiModelProperty(value = "Subcategory of the budget")
  public String getSubcategory() {
    return subcategory;
  }

  public void setSubcategory(String subcategory) {
    this.subcategory = subcategory;
  }

  public BudgetPayloadBudget value(Double value) {
    this.value = value;
    return this;
  }

   /**
   * Value amount of the budget
   * @return value
  **/
  @ApiModelProperty(required = true, value = "Value amount of the budget")
  public Double getValue() {
    return value;
  }

  public void setValue(Double value) {
    this.value = value;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BudgetPayloadBudget budgetPayloadBudget = (BudgetPayloadBudget) o;
    return Objects.equals(this.category, budgetPayloadBudget.category) &&
        Objects.equals(this.subcategory, budgetPayloadBudget.subcategory) &&
        Objects.equals(this.value, budgetPayloadBudget.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, subcategory, value);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BudgetPayloadBudget {\n");
    
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    subcategory: ").append(toIndentedString(subcategory)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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
