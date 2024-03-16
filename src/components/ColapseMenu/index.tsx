import { cn } from '@/utils';
import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import MenuButton from '../ui/MenuButton';

type ColapseMenuProps = {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  childrens?: ColapseMenuProps[];
};
const ColapseMenu = ({ childrens = [], ...props }: ColapseMenuProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div role="button">
      <MenuButton
        {...props}
        aria-label={props.title}
        isCollapsed={childrens?.length > 0}
        onClick={toggleCollapse}
        iconLeft={collapsed ? <ChevronsUpDown size={16} /> : <ChevronsDownUp size={16} />}
      />
      <div
        aria-label={`submenu ${props.title}`}
        aria-expanded={!collapsed}
        className={cn('border-l-2 border-gray-200 ml-4 pl-2 overflow-hidden collapse-container', {
          'h-0': collapsed,
          'h-auto': !collapsed
        })}>
        {childrens?.map((item) => <ColapseMenu key={item.title} {...item} />)}
      </div>
    </div>
  );
};

export default ColapseMenu;
