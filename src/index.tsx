import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from '@arco-design/web-react'
import zhCN from '@arco-design/web-react/es/locale/zh-CN'
import enUS from '@arco-design/web-react/es/locale/en-US'

import 'normalize.css'
import './assets/css/common.less'
import { useTheme } from './hooks'

useTheme()
import App from './App'
import store from './store'

function Index() {
  const selectLang = localStorage.getItem('arco-lang')
    ? localStorage.getItem('arco-lang')
    : localStorage.setItem('arco-lang', 'en-US')
  const [lang] = useState(selectLang)
  function getArcoLocale() {
    switch (lang) {
      case 'zh-CN':
        return zhCN
      case 'en-US':
        return enUS
      default:
        return zhCN
    }
  }
  return (
    <React.StrictMode>
      <ConfigProvider locale={getArcoLocale()}>
        <Provider store={store}>
          <Suspense fallback="">
            <HashRouter>
              <App />
            </HashRouter>
          </Suspense>
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Index />)
