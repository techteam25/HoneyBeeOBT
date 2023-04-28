import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12"
    >
      <Link id="home" className="menu-item" data-testid="burger-home" href="/">
        Home
      </Link>
      <Link id="scripture" className="menu-item" href="/scripture">
        Scripture Passages
      </Link>
      <Link id="download" className="menu-item" href="/download">
        Download Templates
      </Link>
      <Link id="update" className="menu-item" href="/registration">
        Project Registration
      </Link>
      <Link id="search" className="menu-item" href="/search">
        Search
      </Link>
      <Link id="folder" className="menu-item" href="/folder">
        Folder
      </Link>
      <Link id="language" className="menu-item" href="/language">
        Select Language
      </Link>
      <Link id="demo" className="menu-item" href="/demo">
        Add Demo
      </Link>
      <Link id="sync" className="menu-item" href="/sync">
        Sync
      </Link>
      <Link id="about" className="menu-item" href="/about">
        About
      </Link>
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2" data-testid="burger-icon">
    <svg
      className="w-8 h-8 text-gray-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export default HamburgerMenu;
