import { IProduct } from '@/models/Product';
import { ColumnDef } from '@tanstack/react-table';
import { ChevronRight } from 'lucide-react';

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell(props) {
      const name = props.getValue() as string;

      return (
        <div>
          <h3 className="font-medium">{name}</h3>
        </div>
      );
    }
  },
  {
    accessorKey: 'price',
    header: 'Preço'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'stock',
    header: 'Estoque'
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell(props) {
      const category = props.getValue() as string | undefined;

      return (
        <span className="bg-primary-100/10 text-slate-500 p-1 px-2 text-xs rounded-sm">
          {category}
        </span>
      );
    }
  },
  {
    id: 'actions',
    header: '',
    cell() {
      return (
        <div className="flex gap-2 justify-center">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded-sm  text-sm font-medium py-2  text-slate-500  hover:text-slate-700 hover:border-primary-100 transition-al">
            <ChevronRight size={16} />
          </button>
        </div>
      );
    }
  }
];
