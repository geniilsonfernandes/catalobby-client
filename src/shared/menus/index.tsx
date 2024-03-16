import { Barcode, Box, Grid, Home, User } from 'lucide-react';

export type ItemMenuProps = {
  title: string;
  icon: React.ReactNode;

  isChildren?: boolean;
  isActive?: boolean;
  childrens?: ItemMenuProps[];
};

const storeMenu = [
  {
    title: 'Dashboard',
    isCollapsed: false,
    isChildren: false,
    icon: <Home size={16} className="text-slate-600" />,
    childrens: []
  },
  {
    title: 'Catalogo',
    isChildren: false,
    icon: <Grid size={16} className="text-slate-600" />,
    childrens: []
  },
  {
    title: 'Estoque',
    icon: <Box size={16} className="text-slate-600" />,
    childrens: [
      {
        title: 'Produtos',
        isCollapsed: false,
        isChildren: true,
        icon: null,
        childrens: []
      },
      {
        title: 'Categorias',
        isChildren: true,
        icon: null
      }
    ]
  },
  {
    title: 'Clientes',
    icon: <User size={16} className="text-slate-600" />,
    childrens: []
  },
  {
    title: 'Pedidos',
    icon: <Barcode size={16} className="text-slate-600" />,
    childrens: []
  }
] as ItemMenuProps[];

export { storeMenu };
