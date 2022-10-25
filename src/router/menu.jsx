import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

import FirstMenu from '../views/menu1'
import SecondMenu from '../views/menu2'
import SubMenuOne1 from '../views/menu1/menu1-1'
import SubMenuOne2 from '../views/menu1/menu1-2'
import SubMenuTwo1 from '../views/menu2/menu2-1'
import SubMenuTwo2 from '../views/menu2/menu2-2'


const menuList = [
  {
    label: '菜单一',
    icon: <AppstoreOutlined/>,
    key: '/',
    element: <FirstMenu/>,
    children: [
      {
        index: 'true',
        label: '子菜单1-1',
        icon: <AppstoreOutlined/>,
        key: '/subMenu11',
        element: <SubMenuOne1/>
      },
      {
        label: '子菜单1-2',
        icon: <AppstoreOutlined/>,
        key: '/subMenu12',
        element: <SubMenuOne2/>
      }
    ]
  },
  {
    label: '菜单二',
    icon: <MailOutlined/>,
    key: '/nav',
    element: <SecondMenu/>,
    children: [
      {
        index: 'true',
        label: '子菜单2-1',
        icon: <AppstoreOutlined/>,
        key: '/nav/subMenu21',
        element: <SubMenuTwo1/>
      },
      {
        label: '子菜单2-2',
        icon: <AppstoreOutlined/>,
        key: '/nav/subMenu22',
        element: <SubMenuTwo2/>
      }
    ]
  }
]

export default menuList