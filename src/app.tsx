import "./app.css"
import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Suspense } from "solid-js";
import NotFound from "./pages/notFound/NotFound";

const Layout = (props: RouteSectionProps) => {
    return (
        <Suspense>
            <Header/>
            <main class="h-[calc(100vh-(var(--header-height)+var(--footer-height)))] mt-[--header-height]">
              {props.children}
            </main>
            <Footer/>
        </Suspense>
    );
};

export default function App() {
  return (
    <Router root={Layout}>
      <FileRoutes />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}

