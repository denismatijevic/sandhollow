import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const Properties = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Land Development
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Sand Hollow Estates
      </p>

      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="assets/Sandhollow.png"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Kenai</h4>
            <p className="grey-text">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Soldonta</h4>
            <p className="grey-text">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Lake Front</h4>
            <p className="grey-text">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Properties;