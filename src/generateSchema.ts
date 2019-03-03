import { resolve } from "path";
import * as fs from "fs";
import * as TJS from "typescript-json-schema";

const program = TJS.getProgramFromFiles(
    [
        resolve("src/models/Recipe.ts"),
    ]
);

// We can either get the schema for one file and one type...
const Recipe = TJS.generateSchema(program, "Recipe");

fs.writeFileSync(
    "./src/models/schema/RecipeSchema.ts",
    "// tslint: disable\nexport const RecipeSchema =" +
    JSON.stringify(Recipe, null, 2)
);
