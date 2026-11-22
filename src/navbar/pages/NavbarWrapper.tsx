import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const NavbarWrapper: React.FC<{
  children: JSX.Element;
}> = (props) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        setScrolled(window.scrollY > 24);
      }, 60);
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  // Transparent on home hero (top of page); frosted everywhere else
  const isTransparent = isHome && !scrolled;

  return (
    <div>
      <Navbar isTransparent={isTransparent} />
      {props.children}
    </div>
  );
};

export default NavbarWrapper;
