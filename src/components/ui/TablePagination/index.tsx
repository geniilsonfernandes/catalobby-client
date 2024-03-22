import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../Button';
type PaginationProps = {
  buttonLeftProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  buttonRightProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  insertInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  totalPages: number;
};
const TablePagination = ({
  totalPages,
  buttonLeftProps,
  buttonRightProps,
  insertInputProps
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Button variant="ghost" size="small" width="auto" {...buttonLeftProps}>
        <ChevronLeft size={18} />
      </Button>
      <span className="flex items-center gap-1 text-sm text-slate-500">
        <input
          {...insertInputProps}
          className="border rounded w-8 h-8 text-center text-sm border-gray-200 text-slate-500"
        />
        de {totalPages}
      </span>
      <Button variant="ghost" size="small" width="auto" {...buttonRightProps}>
        <ChevronRight size={18} />
      </Button>
    </div>
  );
};

export default TablePagination;
