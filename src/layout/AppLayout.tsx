import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./AppLayout.css";
import { Dashboard } from "../pages/Dashboard";
import { CourseList } from "../pages/CourseList";
import { SideNav } from "./SideNav";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import { CoursePage } from "../pages/CoursePage";
import { TestList } from "../pages/TestList";
import { TestPage } from "../pages/TestPage";

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

            <Route path="courses">
              <Route index element={<CourseList />} />
              <Route path=":courseId" element={<CoursePage />} />
            </Route>

            <Route path="tests">
              <Route index element={<TestList />} />
              <Route path=":testId" element={<TestPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
