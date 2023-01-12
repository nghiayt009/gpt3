import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  Blog,
  Features,
  WhatGPT3,
  Header,
  Possibility,
  Footer,
} from './containers'
import {Article, Brand, CTA, Feature, Navbar} from './components'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
