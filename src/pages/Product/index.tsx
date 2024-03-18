import Button from '@/components/ui/Button';
import { ListPlus } from 'lucide-react';

const Product = () => {
  return (
    <div>
      <div className="bg-gray-50 px-4">
        <div className="flex py-4 justify-between items-center">
          <h2 className="text-2xl font-medium text-slate-500">Produtos</h2>
          <Button width="auto" size="small">
            Novo produto
            <ListPlus size={16} />
          </Button>
        </div>
        <div>
          <div className="flex pt-5">
            <button className="text-sm font-medium py-2 px-4 text-slate-500 border-b-2 border-primary-100 hover:text-slate-700 hover:border-primary-100 transition-al">
              Todos
            </button>
            <button className="text-sm font-medium py-2 px-4 text-slate-400 border-b-2 border-transparent hover:text-slate-700 hover:border-primary-100 transition-all">
              Ativos
            </button>
            <button className="text-sm font-medium py-2 px-4 text-slate-400 border-b-2 border-transparent hover:text-slate-700 hover:border-primary-100 transition-all">
              Inativos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
