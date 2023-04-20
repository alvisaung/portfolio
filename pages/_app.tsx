import { AppProps } from "next/app";
import React, { FC } from "react";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
