// tslint: disable
export const RecipeSchema = {
  type: "object",
  properties: {
    directions: {},
    authorId: {
      type: "string"
    },
    name: {
      type: "string"
    },
    style: {
      $ref: "#/definitions/RecipeStyle"
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
