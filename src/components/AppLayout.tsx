import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./AppLayout.css";
import { Dashboard } from "../pages/Dashboard";
import { About } from "../pages/About";
import { SideNav } from "./SideNav";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout = () => {
  return (
    <BrowserRouter>
      <div className="h-screen bg-slate-400 app-layout">
        <Header />
        <SideNav />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
