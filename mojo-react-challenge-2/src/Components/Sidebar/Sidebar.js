import { slide as Menu } from "react-burger-menu";

function Sidebar() {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        Course &#38; App
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Media
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Shop
      </a>
    </Menu>
  );
}

export default Sidebar;
