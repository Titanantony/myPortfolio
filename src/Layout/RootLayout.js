import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './RootLayout.css';

function RootLayout() {
  // Get the current location
  const location = useLocation();

  // Determine if on homepage or blog
  const isHomePage = location.pathname === '/'; // Default path for "My Website"
  const linkText = isHomePage ? 'My Blog' : 'My Website'; // Change based on path
  const linkTo = isHomePage ? '/myBlog' : '/'; // Navigate to myBlog if on homepage, else to home

  // Links for different navigation sections
  const blogLinks = (
    <div className='blog-nav'>
      <NavLink to='/' className='nav-link-blog'>
        Latest
      </NavLink>
      <NavLink to='/' className='nav-link-blog'>
        React
      </NavLink>
      <NavLink to='/' className='nav-link-blog'>
        AI
      </NavLink>
      <NavLink to='/' className='nav-link-blog'>
        Flutter
      </NavLink>
      <NavLink to='/' className='nav-link-blog'>
        My 30 Day Plan
      </NavLink>
    </div>
  );

  const websiteLinks = (
    <div className='website-nav'>
      <a href='#projects' className='nav-link-blog'>
        Project
      </a>
      <NavLink to='#skills' className='nav-link-blog'>
        Skills
      </NavLink>
      <NavLink to='#education' className='nav-link-blog'>
        Education
      </NavLink>
      <NavLink to='#contact' className='nav-link-blog'>
        Contact
      </NavLink>
    </div>
  );

  return (
    <div className='rootLayout'>
      <nav className='nav'>
        <h1 className='logo'>Antony</h1>

        {/* Conditional Rendering of Links */}
        {isHomePage ? websiteLinks : blogLinks}

        {/* Render the link with dynamic text and correct navigation */}
        <NavLink to={linkTo} className='get-started-btn'>
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
