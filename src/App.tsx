import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import NavbarWrapper from "./navbar/pages/NavbarWrapper";
import Footer from "./footer/pages/Footer";
import Hero from "./hero/pages/Hero";
import About from "./about/pages/About";
import Experience from "./experience/pages/Experience";
import Media from "./media/pages/Media";
import ContactForm from "./contact/pages/ContactForm";

const SECTION_ROUTES: Record<string, string> = {
  "/about": "about",
  "/experience": "experience",
  "/media": "media",
  "/contact": "contact",
};

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <About />
      <Experience />
      <Media />
      <ContactForm />
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const sectionId = SECTION_ROUTES[location.pathname];
    if (!sectionId) return;
    history.replace(`/#${sectionId}`);
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  }, [history, location.pathname]);

  return (
    <NavbarWrapper>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
        <main className="flex-1">
          <Switch>
            <Route path={["/", "/about", "/experience", "/media", "/contact"]}>
              <HomePage />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </NavbarWrapper>
  );
}

export default App;
