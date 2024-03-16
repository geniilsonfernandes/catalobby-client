import Brand from '@/components/Brand';
import Menu from '@/components/Menu';
import { storeMenu } from '@/shared/menus';

const Store = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 header">
        <div className="col-span-2  border-b border-r border-gray-100 h-full flex items-center justify-center">
          <Brand />
        </div>
        <div className="col-span-9"></div>
      </div>
      <div className="grid grid-cols-12 content">
        <div className="col-span-2 border-r border-gray-100 h-full">
          <Menu title="store.dev" menus={storeMenu} />
        </div>
        <div className="col-span-9"></div>
      </div>
    </div>
  );
};

export default Store;
