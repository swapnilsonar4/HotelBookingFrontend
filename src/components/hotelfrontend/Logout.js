import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  /*useEffect()
  {
      localStorage.clear();
      navigate("/login");

  }*/
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">Online Hotel Booking System</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ color: 'white', marginTop: '100px' }}>
        <h3>Loggedout Succesfully....!!!</h3>
        <h5>Thank you for using our services. We will be happy to see you again....!!</h5>
        <br></br>
        <a href="/login"> <button class="btn btn-primary">Click here to login</button></a>
      </div>
    </div>
  )

}