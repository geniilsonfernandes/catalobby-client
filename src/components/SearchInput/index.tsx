import useValueDebounce from '@/hooks/useValueDebounce';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type SearchInputProps = {
  onChange?: (value: string) => void;
  value?: string;
};

const SearchInput = (props: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debauchedValue = useValueDebounce(searchTerm, 500);

  useEffect(() => {
    props.onChange && props.onChange(debauchedValue);
  }, [debauchedValue, props]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="border h-12 border-gray-100 p-2 px-3 flex items-center gap-2 rounded-sm flex-1">
      <Search size={18} className="text-primary-100" />
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-full h-full placeholder:text-sm text-sm outline-none"
        {...props}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
