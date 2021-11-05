import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header id="fh5co-header-section" className="sticky-banner">
        <div className="container">
          <div className="nav-header">
            <h1 id="fh5co-logo">
              <Link href="/">
                <a>
                  <i className="icon-airplane"></i>Travel
                </a>
              </Link>
            </h1>

            <nav id="fh5co-menu-wrap" role="navigation">
              <ul className="sf-menu" id="fh5co-primary-menu">
                <li>
                  <Link href="/tours">
                    <a>Tours</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contacto</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
