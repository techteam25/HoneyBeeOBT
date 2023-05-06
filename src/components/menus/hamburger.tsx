import { Typography } from "@mui/material";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12"
    >
      <Link
        id="home-navigation"
        className="menu-item"
        data-testid="burger-home-nav"
        href="/"
      >
        <Typography variant="h3">Navigation</Typography>
      </Link>
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
      <Link id="language" className="menu-item" href="/words">
        Word Links List
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
      <Link
        id="home-workflow"
        className="menu-item"
        data-testid="burger-home-workflow"
        href="/workflow"
      >
        <Typography variant="h3">Workflow</Typography>
      </Link>
      <Link id="workflow-learn" className="menu-item" href="/learn">
        About
      </Link>
      <Link id="workflow-translate" className="menu-item" href="/translate">
        Translate and Revise
      </Link>
      <Link id="workflow-naturalness" className="menu-item" href="/naturalness">
        Naturanlness Checks
      </Link>
      <Link id="workflow-accuracy" className="menu-item" href="/accuracy">
        Accuracy Check
      </Link>
      <Link id="workflow-voice" className="menu-item" href="/voice">
        Voice Studio
      </Link>
      <Link id="workflow-finalize" className="menu-item" href="/finalize">
        Finalize
      </Link>
      <Link id="workflow-review" className="menu-item" href="/review">
        Review + Share
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
