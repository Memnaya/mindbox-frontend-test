// alias могут подсвечиваться красным, но все работает корректно
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { store as appStore, type RootState, type AppDispatch } from '@/store/store';
import { system } from '@/components/ui/theme';

type Props = {
  children: React.ReactNode;
  store: typeof appStore;
};

const AllProviders = ({ children, store }: Props) => (
  <Provider store={store}>
    <ChakraProvider value={system}>{children}</ChakraProvider>
  </Provider>
);

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  store?: typeof appStore;
}

const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
) => {
  const testStore = options?.store ?? appStore;
  return {
    store: testStore,
    ...render(ui, {
      wrapper: ({ children }) => <AllProviders store={testStore}>{children}</AllProviders>,
      ...options,
    }),
  };
};

export * from '@testing-library/react';
export { customRender as render };
export type { RootState, AppDispatch };
