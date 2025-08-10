import './header.css';
const Header = () => {
  const links = ['Home', 'About', 'Contact', 'Services', 'Blog', 'Portfolio'];   
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li>
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header