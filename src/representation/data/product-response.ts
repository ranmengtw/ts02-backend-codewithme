export type ProductResponse = {
  id: string;
  name: string;
  stock: number;
  unitPrice: number;
  createdTime: Date;
  updatedTime?: Date;
};
