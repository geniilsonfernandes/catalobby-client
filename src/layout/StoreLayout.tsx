import Brand from '@/components/Brand';
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';
import { storeMenu } from '@/shared/menus';
import { ArrowUpRight, User2 } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const StoreLayout = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 border-r border-gray-100">
          <div className="border-b border-gray-100 header flex p-4">
            <Brand />
          </div>
          <div className="content flex">
            <Menu title="store.dev" menus={storeMenu} />
          </div>
        </div>
        <div className="col-span-10 bg-white">
          <div className="pb-6 flex justify-end gap-4 items-center bg-gray-50 p-4">
            <Button variant="outline" width="auto" size="small">
              Minha loja <ArrowUpRight size={16} />
            </Button>
            <button className="w-8 h-8  flex-nowrap bg-primary-100/10 flex justify-center items-center rounded text-primary-100/50">
              <User2 size={16} />
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StoreLayout;
