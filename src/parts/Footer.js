import React from "react";
import Button from "elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="#">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="#">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="#">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="#">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="#">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="#">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:gusman.w.jaya@gmail.com"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6281312121212">
                  0813 - 1212 - 1212
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Bengkulu, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 - All rights reserved | Gusman Wijaya
          </div>
        </div>
      </div>
    </footer>
  );
}
