import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>
        <Link to={routes.home()}>🏠</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={'/about'}>[coming soon] About Page</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default BlogLayout
