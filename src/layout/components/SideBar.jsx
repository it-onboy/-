
import React,{ useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import menuList from '../../router/menu';
import { useNavigate } from 'react-router-dom'
const { Sider } = Layout

const SideBar = () => {
  const [ collapsed,setCollapsed ] = useState(false)
  const [ selectedKeys,setSelectedKeys] = useState(['/subMenu11'])


  const navigate = useNavigate()
  const onSelect = ({ key }) => {
    setSelectedKeys(key)
    navigate(key,{replace: false})
  }

  return (
    <Sider trigger={ null } collapsible collapsed={collapsed}>
      <div className="logo">
        <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
        <h1 style={{
          color: '#fff',
          marginLeft: 10,
          display: !collapsed ? 'inline-block' : 'none'
        }}>React</h1>
      </div>
      <div className='icon'>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={ selectedKeys }
        defaultOpenKeys={['/','/nav']}
        items={ menuList }
        onSelect={ onSelect }
      />
    </Sider>
  )
}

export default SideBar