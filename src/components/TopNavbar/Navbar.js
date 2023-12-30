import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/seeraprintlogo.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "120px", height: "60px" }}
              />
            </Link>
          </div>

          <input className="search__input" type="text" placeholder="Search" />
          <Link to="/">
            <LiaShoppingBagSolid size={24} />

            {/* <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  1
                </span> */}
          </Link>
          <label for="menu-btn" class="btn menu-btn">
            <i class="fas fa-bars"></i>
          </label>
        </div>
        <div className="wrapper">
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />

          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
              <AiFillCloseCircle style={{ background: "#000" }} />
            </label>

            {/* <li>
              <Link to="/">
                <LiaShoppingBagSolid size={24} />

                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  1
                </span>
              </Link>
            </li> */}

            {/* <li>
              <Link href="/" className="desktop-item">
                Category
              </Link>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">
                Category
              </label>
              <ul className="drop-menu">
                <li>
                  <Link to="/">Drop menu 1</Link>
                </li>
                <li>
                  <Link to="/">Drop menu 2</Link>
                </li>
                <li>
                  <Link to="/">Drop menu 3</Link>
                </li>
                <li>
                  <Link to="/">Drop menu 4</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/" className="desktop-item">
                View All
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                View All
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Visiting Cards
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Visiting Cards
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Clothing & Bags
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Clothing & Bags
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Mugs, Album & Gifts
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Mugs, Album & Gifts
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Drinkware
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Drinkware
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Stamps & Ink
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Stamps & Ink
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Marketing Materials
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Marketing Materials
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Stationery
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Stationery
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
