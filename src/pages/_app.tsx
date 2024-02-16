import { store } from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ModalContextProvider } from "@/context/AddNoteModalContext";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <Provider store={store}>
      <ModalContextProvider>
        <Component {...pageProps} />;
      </ModalContextProvider>
      <Toaster />
    </Provider>
  );
}
