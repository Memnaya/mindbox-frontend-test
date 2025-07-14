import { Provider as ReduxProvider } from 'react-redux';
import { Provider as ChakraProvider } from '@ui/provider';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from '@store/store.ts'

import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>,
)
