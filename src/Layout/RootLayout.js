import { NavLink, Outlet } from 'react-router-dom'
import './RootLayout.css'

function RootLayout() {
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
            My 30 Day plan
          </NavLink>
        </div>

        <NavLink to='myBlog' className='get-started-btn'>
          My Blog
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
