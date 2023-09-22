import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { slide as Menu } from "react-burger-menu";
import Person from "@mui/icons-material/Person";
import {
  Download,
  Folder,
  Home,
  Language,
  Search,
  InsertLink,
  Add,
  Sync,
  Info,
  Book,
  Assignment,
  Lightbulb,
  Translate,
  CheckCircleOutline,
  KeyboardVoice,
  Share,
  Checklist,
  Park,
} from "@mui/icons-material";

const HamburgerMenu = () => {
  const { route } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [route]);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="relative p-2">
      <Menu
        customBurgerIcon={<HamburgerIcon />}
        width={"auto"}
        className="left-0 top-12"
        isOpen={isOpen}
        onOpen={toggleMenu}
        onClose={toggleMenu}
      >
        <Link id="user" className="menu-item" href="/user">
          <div style={{ flex: 1, flexDirection: "row" }}>
            <Typography variant="h5">
              <Person /> User Account
            </Typography>
          </div>
        </Link>

        <Link
          id="home-navigation"
          className="menu-item"
          data-testid="burger-home-nav"
          href="/"
        >
          <Typography variant="h3">Navigation</Typography>
        </Link>
        <Link
          id="home"
          className="menu-item"
          data-testid="burger-home"
          href="/"
        >
          {" "}
          <Typography>
            {" "}
            <Home /> Home
          </Typography>
        </Link>
        <Link id="scripture" className="menu-item" href="/scripture">
          <Typography>
            <Book /> Scripture Passages
          </Typography>
        </Link>
        <Link id="download" className="menu-item" href="/download">
          <Typography>
            {" "}
            <Download /> Download Templates
          </Typography>
        </Link>
        <Link id="update" className="menu-item" href="/registration">
          <Typography>
            <Assignment /> Project Registration
          </Typography>
        </Link>
        <Link id="search" className="menu-item" href="/search">
          <Typography>
            {" "}
            <Search /> Search
          </Typography>
        </Link>
        <Link id="folder" className="menu-item" href="/folder">
          <Typography>
            {" "}
            <Folder /> Folder
          </Typography>
        </Link>
        <Link id="language" className="menu-item" href="/language">
          <Typography>
            <Language /> Select Language
          </Typography>
        </Link>
        <Link id="words" className="menu-item" href="/words">
          <Typography>
            <InsertLink /> Word Links List
          </Typography>
        </Link>
        <Link id="demo" className="menu-item" href="/demo">
          <Typography>
            <Add /> Add Demo
          </Typography>
        </Link>
        <Link id="sync" className="menu-item" href="/sync">
          <Typography>
            <Sync /> Sync
          </Typography>
        </Link>
        <Link id="about" className="menu-item" href="/about">
          <Typography>
            <Info /> About
          </Typography>
        </Link>
        <Link
          id="home-workflow"
          className="menu-item"
          data-testid="burger-home-workflow"
          href="/workflow"
        >
          <Typography variant="h3">Workflow</Typography>
        </Link>
        <Link id="workflow-learn" className="menu-item" href="/workflow/learn">
          <Typography>
            <Lightbulb /> Learn
          </Typography>
        </Link>
        <Link
          id="workflow-translate"
          className="menu-item"
          href="/workflow/translate"
        >
          <Typography>
            <Translate /> Translate and Revise
          </Typography>
        </Link>
        <Link
          id="workflow-naturalness"
          className="menu-item"
          href="/workflow/naturalness"
        >
          <Typography>
            <Park /> Naturalness Checks
          </Typography>
        </Link>
        <Link
          id="workflow-accuracy"
          className="menu-item"
          href="/workflow/accuracy"
        >
          <Typography>
            <CheckCircleOutline /> Accuracy Check
          </Typography>
        </Link>
        <Link id="workflow-voice" className="menu-item" href="/workflow/voice">
          <Typography>
            <KeyboardVoice /> Voice Studio
          </Typography>
        </Link>
        <Link
          id="workflow-finalize"
          className="menu-item"
          href="/workflow/finalize"
        >
          <Typography>
            <Checklist /> Finalize
          </Typography>
        </Link>
        <Link
          id="workflow-review"
          className="menu-item"
          href="/workflow/review"
        >
          <Typography>
            <Share /> Review + Share
          </Typography>
        </Link>
      </Menu>
    </div>
  );
};

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
