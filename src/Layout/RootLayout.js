import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './RootLayout.css';

function RootLayout() {
  // Get the current location
  const location = useLocation();

  // Determine the link text based on the current path
  const isHomePage = location.pathname === '/'; // Default path for "My Website"
  const linkText = isHomePage ? 'My Blog' : 'My Website'; // Change based on path
  const linkTo = isHomePage ? '/myBlog' : '/'; // Navigate to myBlog if on home page, else to home

  return (
    <div className='rootLayout'>
      <nav className='nav'>
        <h1 className='logo'>Antony</h1>

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
