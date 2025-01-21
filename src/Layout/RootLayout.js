import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './RootLayout.css';

function RootLayout() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const linkText = isHomePage ? 'My Blog' : 'My Website';
  const linkTo = isHomePage ? '/myBlog' : '/';

  const blogLinks = (
    <div className="nav-link-blog">    
        My blog Articles
    </div>
  );

  const websiteLinks = (
    <div className="website-nav">
      <a href="#projects" className="nav-link-blog">
        Project
      </a>
      <NavLink to="#skills" className="nav-link-blog">
        Skills
      </NavLink>
      <NavLink to="#education" className="nav-link-blog">
        Education
      </NavLink>
      <NavLink to="#contact" className="nav-link-blog">
        Contact
      </NavLink>
    </div>
  );

  return (
    <div className="rootLayout">
      <nav className="nav">
        <h1 className="logo">Antony</h1>
        {isHomePage ? websiteLinks : blogLinks}
        <NavLink to={linkTo} className="get-started-btn">
          {linkText}
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
