import React from 'react'
import { SettingProvider } from './context/SettingContext'
import Content from './components/Content'
import SettingPanel from './components/SettingPanel'
import KuchBhi from './components/KuchBhi'

const App = () => {
  return (
    <SettingProvider>
      <SettingPanel />
      <Content />
      <KuchBhi />
    </SettingProvider>
  )
}

export default App