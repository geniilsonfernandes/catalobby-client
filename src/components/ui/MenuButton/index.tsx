import { cn } from '@/utils';

type MenuButtonProps = {
  title: string;
  isCollapsed?: boolean;
  isActive?: boolean;
  icon?: React.ReactNode;
  isChildren?: boolean;
  iconLeft?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;
const MenuButton = ({
  title,
  isCollapsed,
  icon,
  isChildren,
  isActive,
  iconLeft,
  ...props
}: MenuButtonProps) => {
  return (
    <button
      className={cn(
        'w-full flex items-center justify-between space-x-2 p-2 py-3 my-[1px] hover:bg-gray-50 rounded-md',
        isActive && 'bg-gray-50'
      )}
      {...props}>
      <div className="flex items-center gap-2 text-slate-600">
        {icon}
        <div
          className={cn(
            'text-xs font-semibold',
            isChildren && 'text-slate-400 text-xs font-medium'
          )}>
          {title}
        </div>
      </div>

      {isCollapsed && iconLeft}
    </button>
  );
};

export default MenuButton;
