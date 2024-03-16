import { LogOut, Settings } from 'lucide-react';
import ColapseMenu from '../ColapseMenu';
import MenuButton from '../ui/MenuButton';

type ItemMenuProps = {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  childrens?: ItemMenuProps[];
};

type MenuProps = {
  title: string;
  menus?: ItemMenuProps[];
};

const Menu = ({ title, menus = [] }: MenuProps) => {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="text-xs uppercase font-medium text-gray-400 mb-4">{title}</div>
      <div className="flex-1">
        {menus.map((item, index) => (
          <ColapseMenu
            key={index}
            icon={item.icon}
            isActive={item.isActive}
            title={item.title}
            childrens={item.childrens}
          />
        ))}
      </div>

      <div>
        <MenuButton title="Minha conta" icon={<Settings size={16} className="text-slate-600" />} />
        <MenuButton title="Logout" icon={<LogOut size={16} className="text-slate-600" />} />
      </div>
    </div>
  );
};

export default Menu;
