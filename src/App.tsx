import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ScrollManager from "./components/ScrollManager";
import ScrollToTop from "./components/ScrollToTop";
import { profile } from "./data/content";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
      </footer>
      <ScrollToTop />
    </>
  );
}
