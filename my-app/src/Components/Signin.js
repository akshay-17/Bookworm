import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginPage = () => {
    const payload = {
      email: email,
      password: password,
    };
  };
  return (
    <div style={{ marginLeft: "9rem", marginTop: "7rem" }}>
      <div className="d-flex">
        <img src={require("../images/login.jpg")} />
        <div style={{ marginLeft: "4rem" }}>
          <h3>Sign in to your account</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: "25rem" }}
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ width: "25rem" }}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ width: "25rem" }}
              variant="success"
              onClick={loginPage}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
