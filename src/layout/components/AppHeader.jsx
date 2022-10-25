import { Layout } from 'antd'
import React from 'react'

const { Header } = Layout

const AppHeader = () => {
  return (
    <div>
      <Header className="site-layout-background">
        <span style={{
          color: '#fff',
          float: 'right',
          cursor: 'pointer'
        }}>admin</span>
      </Header>
    </div>
  )
}

export default AppHeader