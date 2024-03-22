import { IProduct } from '@/models/Product';

const data: IProduct[] = Array.from({ length: 100 }).map((_, i) => ({
  name: `Product ${i + 1}`,
  description: `Description ${i + 1}`,
  status: i % 2 === 0 ? 'ativo' : 'inativo',
  price: 1000,
  stock: 10,
  category: 'Cateory 1'
}));
export default data;
