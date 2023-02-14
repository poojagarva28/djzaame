import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useRef } from "react";

const Quote = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_48rt9fi",
        "template_kusygj7",
        formRef.current,
        "WDk0ZdKKOs1Bp3N6T"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div id="inrbnr"></div>

      <div id="quote" class="secmargin">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2 class="text-center">Request a Quote</h2>
              <form onSubmit={sendEmail} ref={formRef}>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="user_name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="name">Contact Number</label>
                      <input
                        type="text"
                        class="form-control"
                        name="user_contact"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    name="user_email"
                    required
                  />
                </div>

                <div class="row">
                  <div class="col-sm-5">
                    <div class="form-group">
                      <label for="contact">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        name="user_date"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="contact">Event Type</label>
                      <input
                        type="text"
                        class="form-control"
                        name="user_event"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-group">
                      <label for="contact">Guest List</label>
                      <input
                        type="text"
                        class="form-control"
                        name="user_guest"
                        required
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div class="text-center">
                  <input
                    type="submit"
                    name="ctl00$btnsubmit"
                    value="Send"
                    id="btnsubmit"
                    class="btn-default"
                  />
                </div>
                {done ? <p>Thank you for contacting :))</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
