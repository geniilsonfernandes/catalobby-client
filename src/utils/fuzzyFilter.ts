import { IProduct } from '@/models/Product';
import { rankItem } from '@tanstack/match-sorter-utils';
import { FilterFn } from '@tanstack/react-table';

const fuzzyFilter: FilterFn<IProduct> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({
    itemRank
  });

  return itemRank.passed;
};

export default fuzzyFilter;
