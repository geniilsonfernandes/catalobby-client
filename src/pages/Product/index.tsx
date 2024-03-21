import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table';
import { cn } from '@/utils';
import { rankItem } from '@tanstack/match-sorter-utils';
import {
  ColumnDef,
  FilterFn,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';

import { ChevronRight, ListPlus, Search } from 'lucide-react';
import { useState } from 'react';

interface Data {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

const data: Data[] = Array.from({ length: 100 }).map((_, i) => ({
  name: `Product ${i + 1}`,
  description: `Description ${i + 1}`,
  price: 1000,
  stock: 10,
  category: 'Cateory 1'
}));

const columns: ColumnDef<Data>[] = [
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fuzzyFilter: FilterFn<Data> = (row, columnId, value, addMeta) => {
  // Rank the item
  console.log({ row, columnId, value });

  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

const Product = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
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
        <h2 className="text-3xl font-medium text-slate-500 py-4">Produtos</h2>
        <div className="flex pt-5 gap-4">
          <button className="text-sm font-medium py-2  text-slate-500 border-b-2 border-primary-100 hover:text-slate-700 hover:border-primary-100 transition-al">
            Todos
          </button>
          <button className="text-sm font-medium py-2  text-slate-400 border-b-2 border-transparent hover:text-slate-700 hover:border-primary-100 transition-all">
            Ativos
          </button>
          <button className="text-sm font-medium py-2  text-slate-400 border-b-2 border-transparent hover:text-slate-700 hover:border-primary-100 transition-all">
            Inativos
          </button>
        </div>
      </header>
      <main className="p-4">
        <div className="flex gap-4 my-4">
          <div className="border h-12 border-gray-100 p-2 px-3 flex items-center gap-2 rounded-sm flex-1">
            <Search size={18} className="text-primary-100" />
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full h-full placeholder:text-sm text-sm outline-none"
              value={globalFilter ?? ''}
              onChange={({ target }) => setGlobalFilter(String(target.value))}
            />
          </div>
          <button className="bg-primary-100  0 p-2 px-8 gap-2 rounded-sm text-sm font-medium text-white 0 flex items-center">
            Criar produto <ListPlus size={18} />
          </button>
        </div>

        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="text-left text-slate-400">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={cn('h-12', header.column.id === 'name' ? 'w-1/2' : 'w-1/6')}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="text-left text-slate-500 hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center gap-2 my-8">
          <button
            className="border rounded p-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}>
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}>
            {'>>'}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </main>
    </>
  );
};

export default Product;
