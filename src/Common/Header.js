import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [mobNav, setMobNav] = useState(false);

  return (
    <div id="navigation">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              onClick={() => setMobNav(!mobNav)}
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link class="navbar-brand" to="/">
              <img src={logo} class="img-responsive center-block" alt="Logo" />
            </Link>
          </div>

          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="homeactive">
                <Link to="/" id="homelink">
                  Home
                </Link>
              </li>
              <li class="serviceactive">
                <Link to="/photos">Photos</Link>
              </li>
              <li class="eventsactive">
                <Link to="/playlists">Playlists</Link>
              </li>
              <li class="contactactive">
                <Link to="/request-a-quote">Request a Quote</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {mobNav ? (
        <ul
          class="nav navbar-nav navbar-right mobmenu"
          onClick={() => setMobNav(false)}
        >
          <li class="homeactive">
            <Link to="/" id="homelink">
              Home
            </Link>
          </li>
          <li class="serviceactive">
            <Link to="/photos">Photos</Link>
          </li>
          <li class="eventsactive">
            <Link to="/playlists">Playlists</Link>
          </li>
          <li class="contactactive">
            <Link to="/request-a-quote">Request a Quote</Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
