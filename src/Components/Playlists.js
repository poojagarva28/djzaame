import React from "react";

const Playlists = () => {
  return (
    <div id="playlists">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center">Zaame's favourites</h2>
            <br />
          </div>
          <div className="col-sm-6">
            {/* <h3>Playlist 1</h3> */}
            <iframe
              src="https://open.spotify.com/embed/playlist/4O6QWZv8qnB5mAdkKMMleg?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-sm-6">
            <iframe
              src="https://open.spotify.com/embed/playlist/4gvxpSl9kEJIlMPF9eZF6u?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-sm-6">
            <iframe
              src="https://open.spotify.com/embed/playlist/7qEKV3drmAsNTBD1OYEwhu?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-sm-6">
            <iframe
              src="https://open.spotify.com/embed/playlist/1PSQXHQsfgknRbca6bbeJY?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-sm-6">
            <iframe
              src="https://open.spotify.com/embed/playlist/4e90hP5fuAZprD17iL0UYM?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
