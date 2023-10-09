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
        <Link id="user" href="/user">
          <div className="menu-item user-button">
            <Person className="user-title" />
            <Typography variant="h5">User Account</Typography>
          </div>
        </Link>

        <Link
          id="home-navigation"
          className="menu-item"
          data-testid="burger-home-nav"
          href="/"
        >
          <Typography variant="h4" className="nav-title">
            Navigation
          </Typography>
        </Link>

        <Link id="home" data-testid="burger-home" href="/">
          <div className="menu-item">
            <Home />
            <Typography className="menu-item-text">Home</Typography>
          </div>
        </Link>

        <Link id="scripture" href="/scripture">
          <div className="menu-item">
            <Book />
            <Typography className="menu-item-text">
              Scripture Passages
            </Typography>
          </div>
        </Link>

        <Link id="download" href="/download">
          <div className="menu-item">
            <Download />
            <Typography className="menu-item-text">
              Download Templates
            </Typography>
          </div>
        </Link>

        <Link id="update" href="/registration">
          <div className="menu-item">
            <Assignment />
            <Typography className="menu-item-text">
              Project Registration
            </Typography>
          </div>
        </Link>

        <Link id="search" href="/search">
          <div className="menu-item">
            <Search />
            <Typography className="menu-item-text">Search</Typography>
          </div>
        </Link>

        <Link id="folder" href="/folder">
          <div className="menu-item">
            <Folder />
            <Typography className="menu-item-text">Folder</Typography>
          </div>
        </Link>

        <Link id="language" href="/language">
          <div className="menu-item">
            <Language />
            <Typography className="menu-item-text">Select Language</Typography>
          </div>
        </Link>

        <Link id="words" href="/words">
          <div className="menu-item">
            <InsertLink />
            <Typography className="menu-item-text">Word Links List</Typography>
          </div>
        </Link>

        <Link id="demo" href="/demo">
          <div className="menu-item">
            <Add />
            <Typography className="menu-item-text">Add Demo</Typography>
          </div>
        </Link>

        <Link id="sync" href="/sync">
          <div className="menu-item">
            <Sync />
            <Typography className="menu-item-text">Sync</Typography>
          </div>
        </Link>

        <Link id="about" href="/about">
          <div className="menu-item">
            <Info />
            <Typography className="menu-item-text">About</Typography>
          </div>
        </Link>

        <div className="workflow-menu">
          <Link
            id="home-workflow"
            data-testid="burger-home-workflow"
            href="/workflow"
          >
            <Typography variant="h4" className="workflow-title">
              Workflow
            </Typography>
          </Link>

          <Link id="workflow-learn" href="/workflow/learn">
            <div className="menu-item workflow-menu-item">
              <Lightbulb sx={{ color: "#00CC88" }} />
              <Typography className="menu-item-text">Learn</Typography>
            </div>
          </Link>

          <Link id="workflow-translate" href="/workflow/translate">
            <div className="menu-item workflow-menu-item">
              <Translate sx={{ color: "#ff0000" }} />
              <Typography className="menu-item-text">
                Translate and Revise
              </Typography>
            </div>
          </Link>

          <Link id="workflow-naturalness" href="/workflow/naturalness">
            <div className="menu-item workflow-menu-item">
              <Park sx={{ color: "#009900" }} />
              <Typography className="menu-item-text">
                Naturalness Checks
              </Typography>
            </div>
          </Link>

          <Link id="workflow-accuracy" href="/workflow/accuracy">
            <div className="menu-item workflow-menu-item">
              <CheckCircleOutline sx={{ color: "#008AE6" }} />
              <Typography className="menu-item-text">Accuracy Check</Typography>
            </div>
          </Link>

          <Link id="workflow-voice" href="/workflow/voice">
            <div className="menu-item workflow-menu-item">
              <KeyboardVoice sx={{ color: "#FF0066" }} />
              <Typography className="menu-item-text">Voice Studio</Typography>
            </div>
          </Link>

          <Link id="workflow-finalize" href="/workflow/finalize">
            <div className="menu-item workflow-menu-item">
              <Checklist sx={{ color: "#AA80FF" }} />
              <Typography className="menu-item-text">Finalize</Typography>
            </div>
          </Link>

          <Link id="workflow-review" href="/workflow/review">
            <div className="menu-item workflow-menu-item">
              <Share sx={{ color: "#FF6600" }} />
              <Typography className="menu-item-text">Review + Share</Typography>
            </div>
          </Link>
        </div>
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
