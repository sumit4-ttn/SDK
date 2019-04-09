/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
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
import java.math.BigDecimal;

/**
 * ScenarioResults
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class ScenarioResults {
  @SerializedName("ticker")
  private String ticker = null;

  @SerializedName("t_statistic")
  private BigDecimal tStatistic = null;

  @SerializedName("regression_coefficient")
  private BigDecimal regressionCoefficient = null;

  public ScenarioResults ticker(String ticker) {
    this.ticker = ticker;
    return this;
  }

   /**
   * Ticker to indicate the factor.
   * @return ticker
  **/
  @ApiModelProperty(required = true, value = "Ticker to indicate the factor.")
  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }

  public ScenarioResults tStatistic(BigDecimal tStatistic) {
    this.tStatistic = tStatistic;
    return this;
  }

   /**
   * Raw t-statistic from the regression analysis, typically used to determine statistical significance of regression_coefficient.
   * @return tStatistic
  **/
  @ApiModelProperty(required = true, value = "Raw t-statistic from the regression analysis, typically used to determine statistical significance of regression_coefficient.")
  public BigDecimal getTStatistic() {
    return tStatistic;
  }

  public void setTStatistic(BigDecimal tStatistic) {
    this.tStatistic = tStatistic;
  }

  public ScenarioResults regressionCoefficient(BigDecimal regressionCoefficient) {
    this.regressionCoefficient = regressionCoefficient;
    return this;
  }

   /**
   * Statistical relationship between the ticker return and the portfolio return.
   * @return regressionCoefficient
  **/
  @ApiModelProperty(required = true, value = "Statistical relationship between the ticker return and the portfolio return.")
  public BigDecimal getRegressionCoefficient() {
    return regressionCoefficient;
  }

  public void setRegressionCoefficient(BigDecimal regressionCoefficient) {
    this.regressionCoefficient = regressionCoefficient;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ScenarioResults scenarioResults = (ScenarioResults) o;
    return Objects.equals(this.ticker, scenarioResults.ticker) &&
        Objects.equals(this.tStatistic, scenarioResults.tStatistic) &&
        Objects.equals(this.regressionCoefficient, scenarioResults.regressionCoefficient);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ticker, tStatistic, regressionCoefficient);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ScenarioResults {\n");
    
    sb.append("    ticker: ").append(toIndentedString(ticker)).append("\n");
    sb.append("    tStatistic: ").append(toIndentedString(tStatistic)).append("\n");
    sb.append("    regressionCoefficient: ").append(toIndentedString(regressionCoefficient)).append("\n");
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
