import * as React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

export interface IReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider(props: IReduxProviderProps) {
  return <Provider store={store}>{props.children}</Provider>;
}
