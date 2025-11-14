
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};

// to create a new type by selecting some specific type from an existing type
type ProductSummary1 = Pick<Product, "id" | "name" | "price">;

// to create a new type by removing some specific type from an existing type
type ProductSummary2 = Omit<Product, "stock" | "color">;

// to create a new type by defining required all the type of an existing type
type ProductWithColor = Required<Product>;

// to create a new type by defining optional all the type of an existing type
type ProductWithAllOptionalType = Partial<Product>;

// to create a new type by defining readonly all the type of an existing type
type ProductThatCanNotBeChanged = Readonly<Product>;


const emptyObject: Record<string, unknown> = {}  // As an Object's key is always a string 

const product: Product = {
  id: 111,
  name: "Keyboard",
  price: 2500,
  stock: 20,
};
console.log(product);
