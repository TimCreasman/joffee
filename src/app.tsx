import "./app.css"
import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Suspense } from "solid-js";
import NotFound from "./pages/not-found/Not-Found";

const Layout = (props: RouteSectionProps) => {
    return (
        <Suspense>
            <Header/>
            <main>
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

