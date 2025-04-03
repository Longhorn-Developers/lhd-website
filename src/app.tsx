import { Router, type RouteSectionProps } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeController";

const Root = (prop: RouteSectionProps) => {
  return (
    <>
      <Navbar />
      <div class="flex flex-col flex-1">
        <Suspense>{prop.children}</Suspense>
      </div>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router root={Root}>
        <FileRoutes />
      </Router>
    </ThemeProvider>
  );
}
