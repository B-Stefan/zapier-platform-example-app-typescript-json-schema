enum RecipeStyle {
    Italian = "italian",
    Mexian = "mexican"
}
export default interface Recipe {
    directions: any;
    authorId: string;
    name: string;
    style: RecipeStyle;
}
