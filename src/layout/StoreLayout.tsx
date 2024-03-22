import Brand from '@/components/Brand';
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';
import { storeMenu } from '@/shared/menus';
import { Search, Store, User2 } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const StoreLayout = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-2 border-r border-gray-100">
          <div className="border-b border-gray-100 header flex p-4">
            <Brand />
          </div>
          <div className="content flex">
            <Menu title="store.dev" menus={storeMenu} />
          </div>
        </div>
        <div className="col-span-10 bg-white">
          <div className="pb-6 flex justify-between gap-4 items-center bg-gray-50 p-4">
            <button>
              <Search size={18} className="text-primary-100" />
            </button>
            <div className="flex gap-2">
              <Button variant="outline" width="auto" size="small">
                Meu catalogo <Store size={16} />
              </Button>
              <button className="w-8 h-8  flex-nowrap bg-primary-100/10 flex justify-center items-center rounded-sm text-primary-100/50">
                <User2 size={16} />
              </button>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StoreLayout;
