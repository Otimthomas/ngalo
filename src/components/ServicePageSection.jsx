import React from "react";
import styled from "styled-components";
import img1 from "../assets/mobilebicyclerepair.jpg";
import img2 from "../assets/cyclingtours&adventure.jpg";
import img3 from "../assets/Pickup&drop.jpg";
import img4 from "../assets/cyclinglessons.jpg";
import img5 from "../assets/coorporatebikerepair.jpg";

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
                  We have a team of mechanics ready and willing to come serve
                  you at your location which could be your office, your home,
                  cycling route or any other location suggested by you. Your
                  convience is our priority.
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
          <div className="col">
            <div class="card">
              <img src={img2} alt="" />
              <div className="card-body">
                <div className="card-title">Bicycle tours & Adventure</div>
                <p className="card-text">
                  We organise cycling tours around the country to different
                  tourist destinations. See the beauty in Uganda while on a bike
                  with our euthusiatic tour guides.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img4} alt="" />
              <div className="card-body">
                <div className="card-title">Cycling classes</div>
                <p className="card-text">
                  Do you wish to learn how to ride? We have Professionals who
                  can train and teach you, your family and friends how to from
                  the comfort of your home or our designated training grounds in
                  Kyambogo. Charges are 15,000 UGX per class which last 2 hours
                  a day.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img5} alt="" />
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
        </div>
      </div>
    </ServiceWrapper>
  );
}

const ServiceWrapper = styled.div`
  padding: 4rem 15rem;
  img {
    width: 100%;
    min-height: 55rem;
  }

  .col {
    margin-bottom: 5rem;
  }

  .card {
    box-shadow: 1px 2px 4px var(--primaryColor);
    /* width: 35rem; */
    min-height: 80rem;
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

  .card-body {
    min-height: 25rem;
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
