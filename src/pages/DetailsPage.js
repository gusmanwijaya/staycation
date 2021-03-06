import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page - Staycation";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }
  }

  render() {
    const breadcrumb = [
      {
        pageTitle: "Home",
        pageHref: "",
      },
      {
        pageTitle: "House Details",
        pageHref: "",
      },
    ];

    const { page, match } = this.props;

    if (!page[match.params.id]) {
      return null;
    }

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page[match.params.id]} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage, checkoutBooking })(
  DetailsPage
);
