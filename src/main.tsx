import 'core-js/stable';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './components/App/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
