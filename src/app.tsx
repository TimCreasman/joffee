import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Header />
          <MetaProvider>
            <Title>Joffee - A Local Coffee Finder</Title>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
