import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'normalize.css'
import { HashRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback="">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
)
