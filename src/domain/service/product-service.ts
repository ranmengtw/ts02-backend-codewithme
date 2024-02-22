import productRepository, {
  ProductRepository,
} from "../../repository/product-repository";
import { Product } from "../entity/product";

export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getById(id: string): Promise<Product> {
    return await this.productRepository.findById(id);
  }

  async getByIds(ids: string[]): Promise<Product[]> {
    return await this.productRepository.findByIds(ids);
  }

  async list(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}

export default new ProductService(productRepository);
