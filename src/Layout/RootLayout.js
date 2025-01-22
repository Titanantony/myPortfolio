// RootLayout.jsx - Enhanced navigation
import React from 'react'
import { NavLink, Outlet, useMatch } from 'react-router-dom'
import './RootLayout.css'
// import ScrollRestoration from './components/ScrollRestoration'

function RootLayout() {
 
  const isBlogRoot = useMatch('/myBlog')
  const isArticlePage = useMatch('/myBlog/article/:slug')

  const renderNavigation = () => {
    if (isArticlePage) {
      return (<>
        <NavLink to="/myBlog" className="nav-link-blog back-link">
          ← Back to Articles
        </NavLink>
        
      </>

      )
    }

    return isBlogRoot ? (
      <div className="blog-categories">
        <h2>My Articles</h2>
      </div>
    ) : (
      <div className="website-nav">
        <NavLink to="#projects" className="nav-link-blog">
          Projects
        </NavLink>
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
    )
  }

  return (
    <div className="rootLayout">
      {/* <ScrollRestoration /> */}
      <nav className="nav">
        
          <h1 className="logo">Antony</h1>


        <div className="nav-main">{renderNavigation()}</div>

        <NavLink
          to={isBlogRoot || isArticlePage ? '/' : '/myBlog'}
          className="website-blog"
          aria-label={isBlogRoot ? 'View Portfolio' : 'View Blog'}
        >
          {isBlogRoot || isArticlePage ? 'My Website' : 'My Blog'}
        </NavLink>
      </nav>

      <main className="content-wrapper">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout