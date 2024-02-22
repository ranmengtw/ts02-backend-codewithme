import { Schema, model } from "mongoose";
import { ProductResponse } from "../../representation/data/product-response";

export type Product = {
  _id: string;
  name: string;
  stock: number;
  unitPrice: number;
  createdTime: Date;
  updatedTime?: Date;
};

export const ProductModel = model(
  "Product",
  new Schema<Product>(
    {
      _id: { type: String, required: true },
      name: { type: String, required: true },
      stock: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      createdTime: { type: Date, required: true },
      updatedTime: Date,
    },
    { versionKey: false, timestamps: false }
  )
);

export const toResponse = ({
  _id,
  name,
  unitPrice,
  stock,
  createdTime,
  updatedTime,
}: Product): ProductResponse => ({
  id: _id,
  name,
  unitPrice,
  stock,
  createdTime,
  updatedTime,
});
