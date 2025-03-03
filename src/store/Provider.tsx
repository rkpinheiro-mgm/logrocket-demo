import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider as StoreProvider } from "react-redux";

import { makeStore } from "@/store";
import type { AppStore } from "@/store";

interface Props {
  readonly children: ReactNode;
}

export const Provider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <StoreProvider store={storeRef.current}>{children}</StoreProvider>;
};
