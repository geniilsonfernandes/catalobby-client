import ProductTable from '@/components/ProductTable';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/ui/Button';
import fuzzyFilter from '@/utils/fuzzyFilter';
import {
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';

import { ListPlus } from 'lucide-react';
import { useState } from 'react';
import { columns } from './helper';
import data from './mock';

const Product = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns: columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
      globalFilter
    }
  });

  return (
    <>
      <header className="bg-gray-50 px-4">
        <h2 className="text-3xl font-medium text-slate-500 py-8">Produtos</h2>
      </header>
      <main className="p-8 px-4">
        <div className="flex gap-4">
          <SearchInput value={globalFilter} onChange={(value) => setGlobalFilter(value)} />
          <Button width="auto" className="px-6">
            Criar produto <ListPlus size={18} />
          </Button>
        </div>
        <ProductTable table={table} columns={columns} />
      </main>
    </>
  );
};

export default Product;
