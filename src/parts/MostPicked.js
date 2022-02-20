import React from "react";
import Button from "elements/Button";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
      </Fade>
      <Slide bottom>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
              >
                <div className="card card-featured">
                  <div className="tag">
                    ${item.price}{" "}
                    <span className="font-weight-light">per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={`${process.env.REACT_APP_HOST_IMAGE}/${item.imageId[index].imageUrl}`}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}
                      className="stretched-link d-block text-white"
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <span>{item.city}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Slide>
    </section>
  );
}
