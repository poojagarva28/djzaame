import React from "react";
import { Link } from "react-router-dom";
import bottomLogo from "../assets/img/logobottom.png";

const Footer = () => {
  return (
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-2" style={{ marginTop: "-30px" }}>
            <Link to="/">
              <img
                src={bottomLogo}
                class="img-responsive center-block"
                alt="Logo"
              />
            </Link>
          </div>

          <div class="col-sm-3 col-sm-offset-1">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/photos">Photos</Link>
              </li>
              <li>
                <Link to="/playlists">Playlists</Link>
              </li>
              <li>
                <Link to="/request-a-quote">Request a Quote</Link>
              </li>
            </ul>
          </div>

          <div class="col-sm-3">
            <h2>Social Media</h2>
            <div class="row">
              <div class="col-sm-7">
                <div class="socialicon facebook">
                  <a href="https://www.facebook.com/djzaame/" target="_blank">
                    <i class="fa fa-facebook"></i>Facebook
                  </a>
                </div>
              </div>
              <div class="col-sm-7">
                <div class="socialicon instagram">
                  <a href="https://www.instagram.com/djzaame/" target="_blank">
                    <i class="fa fa-instagram"></i>Instagram
                  </a>
                </div>
              </div>
              <div class="col-sm-7">
                <div class="socialicon youtube">
                  <a
                    href="https://www.youtube.com/channel/UC9cuZXrdsPDuBMCoHy1Vbuw"
                    target="_blank"
                  >
                    <i class="fa fa-youtube-play"></i>YouTube
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div class="col-sm-3">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="mailto:management@djzaame.com" target="_blank">
                  <i class="fa fa-envelope"></i>&nbsp;management@djzaame.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/+919727680067" target="_blank">
                  <i class="fa fa-phone"></i>&nbsp;+91 97276 80067
                </a>
              </li>
            </ul>
          </div>

          <div class="col-sm-12">
            <div class="text-center">
              <br class="hidden-xs" />
              <br class="hidden-xs" />
              <br />
              <br />
              <p>
                &copy; 2022 <Link to="/">Djzaame</Link>, All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
