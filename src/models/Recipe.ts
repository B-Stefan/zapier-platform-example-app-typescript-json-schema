enum RecipeStyle {
  Italian = "italian",
  Mexian = "mexican"
}
export default interface Recipe {
  id: string;
  directions: any;
  authorId: string;
  name: string;
  style: RecipeStyle;
  createdAt: Date;
}
