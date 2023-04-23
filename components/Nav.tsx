import { Page_Section } from "@/data/type";
import { mobile_breakpoints } from "@/styles/Breakpoints";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const nav_menu = [
  { name: "Portfolio", id: Page_Section.portfolio_sec },
  { name: "About", id: Page_Section.about_me_sec },
  { name: "Resume", id: Page_Section.resume_sec },
  { name: "Contact", id: Page_Section.contact_sec },
  { name: "Github", id: "https://github.com/alvisaung" },
  { name: "Linkedin", id: "https://www.linkedin.com/in/alvis-aung-ab660b225/" },
];

const Nav = ({ scrollToSection }: { scrollToSection: (id: any) => void }) => {
  const [is_mobile_screen, setIsMobileScreen] = useState(false);
  const [open_drawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    function handleResize() {
      const screen_width = window.screen.width;
      if (screen_width <= mobile_breakpoints) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => {
    setOpenDrawer(!open_drawer);
  };

  return (
    <div className=" nav-gp">
      {/* <div className="logo">Logo</div> */}
      {is_mobile_screen ? (
        <>
          <img src="/img/menu.png" style={{ width: 35, marginLeft: "auto" }} onClick={toggleDrawer} />
          <motion.div className="drawer" initial={{ x: "100%" }} animate={{ x: open_drawer ? 0 : "100%" }} transition={{ duration: 0.5, ease: "easeInOut" }}>
            {nav_menu.map((nav) => (
              <ul
                key={nav.id}
                className="nav_menu_item"
                onClick={() => {
                  scrollToSection(nav.id);
                  toggleDrawer();
                }}
              >
                {nav.name}
              </ul>
            ))}
          </motion.div>
        </>
      ) : (
        <nav className="link-gp">
          {nav_menu.map((nav) => (
            <ul key={nav.id} className="nav_menu_item" onClick={() => scrollToSection(nav.id)}>
              {nav.name}
            </ul>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Nav;
