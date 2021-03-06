import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="fh5co-hero">
        <div className="fh5co-overlay"></div>
        <div
          className="fh5co-cover"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(images/cover_bg_1.jpg)" }}
        >
          <div className="desc">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 col-md-5">
                  <div className="tabulation animate-box">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a
                          href="#flights"
                          aria-controls="flights"
                          role="tab"
                          data-toggle="tab"
                        >
                          Flights
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#hotels"
                          aria-controls="hotels"
                          role="tab"
                          data-toggle="tab"
                        >
                          Hotels
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#packages"
                          aria-controls="packages"
                          role="tab"
                          data-toggle="tab"
                        >
                          Packages
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane active"
                        id="flights"
                      >
                        <div className="row">
                          <div className="col-xxs-12 col-xs-6 mt">
                            <div className="input-field">
                              <label>From:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="from-place"
                                placeholder="Los Angeles, USA"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <div className="input-field">
                              <label>To:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="to-place"
                                placeholder="Tokyo, Japan"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                              <label>Check In:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="date-start"
                                placeholder="mm/dd/yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                              <label>Check Out:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="date-end"
                                placeholder="mm/dd/yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 mt">
                            <section>
                              <label>className:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  Economy
                                </option>
                                <option value="economy">Economy</option>
                                <option value="first">First</option>
                                <option value="business">Business</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                              <label>Adult:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                              <label>Children:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xs-12">
                            <input
                              type="submit"
                              className="btn btn-primary btn-block"
                              value="Search Flight"
                            />
                          </div>
                        </div>
                      </div>

                      <div role="tabpanel" className="tab-pane" id="hotels">
                        <div className="row">
                          <div className="col-xxs-12 col-xs-12 mt">
                            <div className="input-field">
                              <label>City:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="from-place"
                                placeholder="Los Angeles, USA"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                              <label>Return:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="date-start"
                                placeholder="mm/dd/yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                              <label>Check Out:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="date-end"
                                placeholder="mm/dd/yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 mt">
                            <section>
                              <label>Rooms:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="economy">1</option>
                                <option value="first">2</option>
                                <option value="business">3</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                              <label>Adult:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                              <label>Children:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xs-12">
                            <input
                              type="submit"
                              className="btn btn-primary btn-block"
                              value="Search Hotel"
                            />
                          </div>
                        </div>
                      </div>

                      <div role="tabpanel" className="tab-pane" id="packages">
                        <div className="row">
                          <div className="col-xxs-12 col-xs-6 mt">
                            <div className="input-field">
                              <label>City:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="from-place"
                                placeholder="Los Angeles, USA"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <div className="input-field">
                              <label>Destination:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="to-place"
                                placeholder="Tokyo, Japan"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                              <label>Departs:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="date-start"
                                placeholder="mm/dd/yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt alternate">
                            <div className="input-field">
                              <label>Return:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="date-end"
                                placeholder="mm/dd/yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 mt">
                            <section>
                              <label>Rooms:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="economy">1</option>
                                <option value="first">2</option>
                                <option value="business">3</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                              <label>Adult:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xxs-12 col-xs-6 mt">
                            <section>
                              <label>Children:</label>
                              <select className="cs-select cs-skin-border">
                                <option value="" disabled selected>
                                  1
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </section>
                          </div>
                          <div className="col-xs-12">
                            <input
                              type="submit"
                              className="btn btn-primary btn-block"
                              value="Search Packages"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desc2 animate-box">
                  <div className="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
                    <p>
                      HandCrafted by{" "}
                      <a
                        href="http://frehtml5.co/"
                        target="_blank"
                        className="fh5co-site-name"
                      >
                        FreeHTML5.co
                      </a>
                    </p>
                    <h2>Exclusive Limited Time Offer</h2>
                    <h3>Fly to Hong Kong via Los Angeles, USA</h3>
                    <span className="price">$599</span>
                    <p>
                      <a className="btn btn-primary btn-lg" href="#">
                        Get Started
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
