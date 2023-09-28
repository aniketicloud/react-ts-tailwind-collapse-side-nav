import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./AppLayout.css";
import { Dashboard } from "../pages/Dashboard";
import { Courses } from "../pages/Courses";
import { SideNav } from "./SideNav";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import { CoursePage } from "../pages/CoursePage";

export const AppLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogoClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <BrowserRouter>
      <div className="h-screen app-layout">
        <Header isExpanded={isExpanded} onLogoClick={handleLogoClick} />
        <SideNav isExpanded={isExpanded} />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="courses" element={<Outlet />}>
              <Route index element={<Courses />} />
            <Route path=":courseId" element={<CoursePage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
