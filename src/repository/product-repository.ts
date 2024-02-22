import { Product, ProductModel } from "../domain/entity/product";

export class ProductRepository {
  async findById(id: string): Promise<Product> {
    const maybeProduct = await ProductModel.findById(id);
    if (!maybeProduct) {
      throw new Error("product not exist");
    }
    return maybeProduct;
  }

  async findByIds(ids: string[]): Promise<Product[]> {
    return await ProductModel.find({ _id: { $in: ids } });
  }

  async findAll(): Promise<Product[]> {
    return await ProductModel.find({});
  }
}

export default new ProductRepository();
