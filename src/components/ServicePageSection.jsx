import React from "react";
import styled from "styled-components";
import img1 from "../assets/ngalo-1.jpg";
import img2 from "../assets/ngalo-2.jpg";
import img3 from "../assets/ngalo-3.jpg";

function ServicePageSection() {
  return (
    <ServiceWrapper>
      <div className="d-flex flex-column">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3">
          <div className="col">
            <div class="card">
              <img src={img1} alt="" />
              <div className="card-body">
                <div className="card-title">Mobile bicycle repair</div>
                <p className="card-text">
                  We center our focus on repairing your bike from your location.
                  This can be your home, workplace or even your cycling route.
                  Your convenience is our priority. Fees are dependent on the
                  job to be done. We share <b>50% of transportation costs.</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img2} alt="" />
              <div className="card-body">
                <div className="card-title">Bicycle tours & Adventure</div>
                <p className="card-text">
                  Book your cycling tour with us. This can be within Kampala or
                  the rest of Uganda. We have highly rated guides who will
                  coordinate these rides.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img3} alt="" />
              <div className="card-body">
                <div className="card-title">Cycling classes</div>
                <p className="card-text">
                  Your convenience is our priority. Let us train you, your
                  family & friends how to ride from the comfort of your home or
                  location. We have classes also held from Kyanbogo. Charges are{" "}
                  <b>Ugx 20,000 per day per person for only 2 hours.</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img3} alt="" />
              <div className="card-body">
                <div className="card-title">
                  Corporate bicycle repair package <b>(10% discount)</b>
                </div>
                <p className="card-text">
                  A group of five and above qualifies for this package. Here we
                  take off 10% from the bike service labour fees and spare
                  parts. This can be a group of cyclists, friends, family or
                  even a company.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img3} alt="" />
              <div className="card-body">
                <div className="card-title">Pick up and drop off</div>
                <p className="card-text">
                  In the event that the job is complicated or you are too busy,
                  it is easy for us to pick up your bike, work on it from our
                  workshop and drop it back sparklinng new and ready to go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
}

const ServiceWrapper = styled.div`
  padding: 4rem 15rem;
  img {
    width: 100%;
  }

  .col {
    margin-bottom: 5rem;
  }

  .card {
    box-shadow: 1px 2px 4px var(--primaryColor);
    width: "35rem";
  }

  .card-text {
    font-size: 1.6rem;
    text-align: center;
  }

  .card-title {
    color: var(--secondaryColor);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    letter-spacing: normal;
    padding: 1rem;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    padding: 2.5rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 4rem;
    .card {
      width: 100% !important;
    }
  }
`;

export default ServicePageSection;
