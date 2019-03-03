// tslint: disable
export const RecipeSchema = {
  type: "object",
  properties: {
    id: {
      type: "string"
    },
    directions: {},
    authorId: {
      type: "string"
    },
    name: {
      type: "string"
    },
    style: {
      $ref: "#/definitions/RecipeStyle"
    },
    createdAt: {
      description: "Enables basic storage and retrieval of dates and times.",
      type: "string",
      format: "date-time"
    }
  },
  definitions: {
    RecipeStyle: {
      enum: ["italian", "mexican"],
      type: "string"
    }
  },
  $schema: "http://json-schema.org/draft-07/schema#"
};
