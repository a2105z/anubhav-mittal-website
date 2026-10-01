import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavbarWrapper from "./navbar/pages/NavbarWrapper";
import Footer from "./footer/pages/Footer";
import Hero from "./hero/pages/Hero";
import About from "./about/pages/About";
import Experience from "./experience/pages/Experience";
import Media from "./media/pages/Media";
import ContactForm from "./contact/pages/ContactForm";
import PageWrapper from "./shared/components/PageWrapper";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <NavbarWrapper>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
        <main className="flex-1">
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <PageWrapper>
                  <Hero />
                </PageWrapper>
              </Route>
              <Route exact path="/about">
                <PageWrapper>
                  <About />
                </PageWrapper>
              </Route>
              <Route exact path="/experience">
                <PageWrapper>
                  <Experience />
                </PageWrapper>
              </Route>
              <Route exact path="/media">
                <PageWrapper>
                  <Media />
                </PageWrapper>
              </Route>
              <Route exact path="/contact">
                <PageWrapper>
                  <ContactForm />
                </PageWrapper>
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </AnimatePresence>
        </main>
        {!isHome && <Footer />}
      </div>
    </NavbarWrapper>
  );
}

export default App;
