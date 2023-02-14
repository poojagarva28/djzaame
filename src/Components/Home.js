import React from "react";
import BannerImg from "../assets/img/bannerimg.png";
import profileImg from "../assets/img/profileimg.png";
import gallery1 from "../assets/img/gallery/1.png";
import gallery2 from "../assets/img/gallery/2.png";
import gallery3 from "../assets/img/gallery/3.png";
import gallery4 from "../assets/img/gallery/4.png";
import gallery5 from "../assets/img/gallery/5.png";
import gallery6 from "../assets/img/gallery/6.png";
import gallery9 from "../assets/img/gallery/9.png";
import gallery10 from "../assets/img/gallery/10.png";
import client1 from "../assets/img/clients/client1.png";
import client2 from "../assets/img/clients/client2.png";
import client3 from "../assets/img/clients/client3.png";
import client4 from "../assets/img/clients/client4.png";
import client5 from "../assets/img/clients/client5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="hmbanner" className="hidden-xs"></div>

      <div className="visible-xs" style={{ marginTop: "60px" }}>
        <img
          src={BannerImg}
          className="img-responsive wow fadeInLeft"
          alt="Img"
          style={{ borderRadius: "0px" }}
        />
      </div>

      <div id="hmabout" className="secmargin">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img
                src={profileImg}
                className="img-responsive wow fadeInLeft"
                alt="Img"
              />
            </div>
            <div className="col-sm-7">
              <div className="wow fadeInRight">
                <h2>About Zaame</h2>
                <p>
                  <strong>Apurv Bhatt</strong> who is professionally recognized
                  as “ZAAME” is an Indian DJ.
                </p>
                <p>
                  “Purveyor of a scintillating night filled with extravagant
                  dance grooves combined with an ultimate performance par
                  excellence is what ZAAME best at –that describes him as a DJ.”
                </p>
                <p>
                  DJ ZAAME feels the music in his blood and never hesitates to
                  dig deep into the genre of his interest i.e. Dance | Pop | EDM
                  | and tirelessly brings ’bout the magic of live sets on the
                  dance floor that creates mayhem and unites the crowd to an
                  impressive line up of a selection of tracks infused
                  beautifully among various other genres
                </p>
                <p>
                  Actively involved in his local community, ZAAME is no stranger
                  to the reality of the music fam of its ups and downs but
                  equally determined to pave it’s way through the ruckus and
                  emerge as a winner.
                </p>
                <br />
                <a
                  href="assets/DJZAAME.pdf"
                  className="btn-default"
                  target="_blank"
                >
                  <i className="fa fa-file-pdf-o"></i>&nbsp;Download Presskit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="youtubeinr">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bIRfH-e2upw?rel=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/WtUAmLfBeGY?autoplay=1?rel=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/q7x0vtZio1s?rel=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/NGlxnHbXo3U?rel=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/maVh7yA06aU?rel=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hmservices" className="secmargin text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="wow fadeIn">Playing Genere</h2>
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <a href="playlists">
                <i className="fa fa-fast-backward" aria-hidden="true"></i>
                <h3>Bollywood Remix</h3>
              </a>
            </div>
            <div className="col-sm-2">
              <a href="playlists">
                <i className="fa fa-backward" aria-hidden="true"></i>
                <h3>Retro Tunes</h3>
              </a>
            </div>
            <div className="col-sm-2">
              <a href="playlists">
                <i className="fa fa-play" aria-hidden="true"></i>
                <h3>Classic House</h3>
              </a>
            </div>
            <div className="col-sm-2">
              <a href="playlists">
                <i className="fa fa-pause" aria-hidden="true"></i>
                <h3>Tech House</h3>
              </a>
            </div>
            <div className="col-sm-2">
              <a href="playlists">
                <i className="fa fa-forward" aria-hidden="true"></i>
                <h3>Techno</h3>
              </a>
            </div>
            <div className="col-sm-2">
              <a href="playlists">
                <i className="fa fa-fast-forward" aria-hidden="true"></i>
                <h3>Pop</h3>
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-sm-12">
              <a href="playlists" className="btn-default">
                Listen All
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="hmgallery" className="secmargin">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="text-center">Gallery</h2>
              <br />
              <br />
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery1} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery1}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery2} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery2}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery3} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery3}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery4} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery4}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery5} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery5}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery6} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery6}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery9} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery9}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="gallerybox">
                <a href={gallery10} data-fancybox="gallery">
                  <div className="hovereffect hoverlast">
                    <img
                      src={gallery10}
                      className="img-responsive center-block"
                      alt="Img"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <br />
                <a href="events" className="btn-default">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hmtestimonails">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Google Reviews</h2>
              <br />
              <br />
            </div>
            <div className="col-sm-10 col-sm-offset-1">
              <Slider {...settings}>
                <div className="testibox wow fadeInUp">
                  <div className="serviceboxdesc">
                    <p>
                      DJ Zaame has been the best ever DJs i have came across.
                      The X factor in him is that he is very innovative,
                      professional, understand the need of crowd, free mind and
                      cool personality. To make your event a grand success,
                      don't think and invite.
                    </p>
                    <h4>
                      <a href="#">- Nirav Chandegara</a>
                    </h4>
                  </div>
                </div>
                <div className="testibox wow fadeInUp">
                  <div className="serviceboxdesc">
                    <p>
                      Awesome DJ.. quick response and very nice music system
                    </p>
                    <h4>
                      <a href="#">- Pooja Choksi</a>
                    </h4>
                  </div>
                </div>
                <div className="testibox wow fadeInUp">
                  <div className="serviceboxdesc">
                    <p>
                      Heyyy...DJ ZAAME ...... When you play with your fingers on
                      your DJ player ....it creates a magnetic force by playing
                      such a beautiful music and everyone has been pulled on
                      dance floor by that magnetic force.i respect your
                      talent...👏🏻👏🏻👏🏻
                    </p>
                    <h4>
                      <a href="#">- Harvi Chavda</a>
                    </h4>
                  </div>
                </div>
                <div className="testibox wow fadeInUp">
                  <div className="serviceboxdesc">
                    <p>
                      Apurv is one of the best in DJ
                      <br />
                      It's enjoyment to celebrate with DJZAAME
                    </p>
                    <h4>
                      <a href="#">- Kirit Bhatt</a>
                    </h4>
                  </div>
                </div>
                <div className="testibox wow fadeInUp">
                  <div className="serviceboxdesc">
                    <p>Awesome guy... Music selection is superb....</p>
                    <h4>
                      <a href="#">- Prafull Deshpande</a>
                    </h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div id="hmclients" className="secmargin padding50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="text-center">Clients</h2>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-sm-offset-1">
              <div className="clientbox wow fadeInUp">
                <img
                  src={client1}
                  className="img-responsive center-block"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="clientbox wow fadeInUp">
                <img
                  src={client2}
                  className="img-responsive center-block"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="clientbox wow fadeInUp">
                <img
                  src={client3}
                  className="img-responsive center-block"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="clientbox wow fadeInUp">
                <img
                  src={client4}
                  className="img-responsive center-block"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="clientbox wow fadeInUp">
                <img
                  src={client5}
                  className="img-responsive center-block"
                  alt="Img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
