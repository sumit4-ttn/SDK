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
import io.swagger.client.model.QuestionnairePayloadQuestions;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * QuestionnairePayload
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class QuestionnairePayload {
  @SerializedName("name")
  private String name = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("decision_tree_id")
  private UUID decisionTreeId = null;

  @SerializedName("type")
  private String type = null;

  @SerializedName("questions")
  private List<QuestionnairePayloadQuestions> questions = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  public QuestionnairePayload name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name for the questionnaire
   * @return name
  **/
  @ApiModelProperty(required = true, value = "Name for the questionnaire")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public QuestionnairePayload description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Descriptions for additional information on the questionnaire
   * @return description
  **/
  @ApiModelProperty(value = "Descriptions for additional information on the questionnaire")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public QuestionnairePayload decisionTreeId(UUID decisionTreeId) {
    this.decisionTreeId = decisionTreeId;
    return this;
  }

   /**
   * The ID of the decision tree that corresponds to the questionnaire
   * @return decisionTreeId
  **/
  @ApiModelProperty(value = "The ID of the decision tree that corresponds to the questionnaire")
  public UUID getDecisionTreeId() {
    return decisionTreeId;
  }

  public void setDecisionTreeId(UUID decisionTreeId) {
    this.decisionTreeId = decisionTreeId;
  }

  public QuestionnairePayload type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Type of questionnaire such as “retirement plan”
   * @return type
  **/
  @ApiModelProperty(value = "Type of questionnaire such as “retirement plan”")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public QuestionnairePayload questions(List<QuestionnairePayloadQuestions> questions) {
    this.questions = questions;
    return this;
  }

  public QuestionnairePayload addQuestionsItem(QuestionnairePayloadQuestions questionsItem) {
    if (this.questions == null) {
      this.questions = new ArrayList<QuestionnairePayloadQuestions>();
    }
    this.questions.add(questionsItem);
    return this;
  }

   /**
   * List of questions to be answered as well as their respective answers and weights within the questionnaire
   * @return questions
  **/
  @ApiModelProperty(value = "List of questions to be answered as well as their respective answers and weights within the questionnaire")
  public List<QuestionnairePayloadQuestions> getQuestions() {
    return questions;
  }

  public void setQuestions(List<QuestionnairePayloadQuestions> questions) {
    this.questions = questions;
  }

  public QuestionnairePayload secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QuestionnairePayload questionnairePayload = (QuestionnairePayload) o;
    return Objects.equals(this.name, questionnairePayload.name) &&
        Objects.equals(this.description, questionnairePayload.description) &&
        Objects.equals(this.decisionTreeId, questionnairePayload.decisionTreeId) &&
        Objects.equals(this.type, questionnairePayload.type) &&
        Objects.equals(this.questions, questionnairePayload.questions) &&
        Objects.equals(this.secondaryId, questionnairePayload.secondaryId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, decisionTreeId, type, questions, secondaryId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QuestionnairePayload {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    decisionTreeId: ").append(toIndentedString(decisionTreeId)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    questions: ").append(toIndentedString(questions)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
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
