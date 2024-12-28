
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Blog</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Blog</p>
        </footer>
      </body>
    </html>
  );
}
