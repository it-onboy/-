import React from 'react'
import { Layout } from 'antd'
import menuList from '../../router/menu'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFound } from '../../views/err/notFound'
const { Content } = Layout

const AppContent = () => {

  const renderRoute = (menuList) => {
    return menuList.map(item => {
      if (item.children) {
        return <Route  key ={ item.key } path={ item.key } element = { item.element }>
          {
            renderRoute(item.children)
          }
        </Route>
      } else {
        if (item.index) {
          return (
            <React.Fragment key = { item.key }>
              <Route index element = { <Navigate to={ item.key } replace = { true }/> } />
              <Route path={ item.key } element = { item.element } />
            </React.Fragment>
          )
        } else {
          return <Route key ={ item.key } path={ item.key } element = { item.element } />
        }
      }
    })
  }


  return (
    <>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
        >
          <Routes>
            {
              renderRoute(menuList)
            }
            <Route path='*' element={ <NotFound/> }></Route>
          </Routes>
      </Content>
    </>
  )
}

export default AppContent