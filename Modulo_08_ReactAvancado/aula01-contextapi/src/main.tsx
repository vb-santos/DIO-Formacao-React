import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import { GlobalStyle } from './styles/global.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement | DocumentFragment
);

root.render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
