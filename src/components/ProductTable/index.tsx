import { IProduct } from '@/models/Product';
import { cn } from '@/utils';
import { ColumnDef, Table as TableInstance, flexRender } from '@tanstack/react-table';
import { Ghost } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table';
import TablePagination from '../ui/TablePagination';

type ProductTableProps = {
  table: TableInstance<IProduct>;
  columns: ColumnDef<IProduct>[];
};

const ProductTable = ({ table, columns }: ProductTableProps) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 pt-8">
        <div className="text-sm font-medium text-slate-500">
          {table.getFilteredRowModel().rows.length} Produtos
        </div>
        <TablePagination
          totalPages={table.getPageCount()}
          buttonLeftProps={{
            onClick: () => table.previousPage(),
            disabled: !table.getCanPreviousPage()
          }}
          buttonRightProps={{
            onClick: () => table.nextPage(),
            disabled: !table.getCanNextPage()
          }}
          insertInputProps={{
            value: table.getState().pagination.pageIndex + 1,
            onChange: (e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }
          }}
        />
      </div>
      <Table>
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
              <TableCell colSpan={columns.length} className="h-24 text-center py-12">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Ghost size={18} />
                </div>
                <p className="text-sm font-medium text-slate-500">Nenhum registro encontrado</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center p-4 pt-8 border-t border-slate-200">
        <div className="text-sm font-medium text-slate-500">
          {table.getFilteredRowModel().rows.length} Produtos
        </div>
        <TablePagination
          totalPages={table.getPageCount()}
          buttonLeftProps={{
            onClick: () => table.previousPage(),
            disabled: !table.getCanPreviousPage()
          }}
          buttonRightProps={{
            onClick: () => table.nextPage(),
            disabled: !table.getCanNextPage()
          }}
          insertInputProps={{
            value: table.getState().pagination.pageIndex + 1,
            onChange: (e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }
          }}
        />
      </div>
    </>
  );
};

export default ProductTable;
