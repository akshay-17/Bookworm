import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const register = () => {
    const payload = {
      firstname: firstname,
      lastname: lastname,
      confirmPassword: confirmPassword,
      email: email,
      password: password,
      contact: contact,
      address: address,
    };
    console.log(payload);
  };
  return (
    <div
      style={{
        marginLeft: "15rem",
        marginTop: "7rem",
      }}
    >
      <div className="d-flex">
        <img
          src={require("../images/book_register.jpg")}
          height={"510rem"}
          width={"400rem"}
        />
        <div style={{ marginLeft: "4rem" }}>
          <h3>REGISTRATION FROM</h3>
          <Form>
            <div className="d-flex">
              <Form.Group className="mb-3 " style={{ marginRight: "1rem" }}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  style={{ width: "15rem" }}
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  style={{ width: "15rem" }}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: "31rem" }}
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex">
              <Form.Group className="mb-3 " style={{ marginRight: "1rem" }}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  style={{ width: "15rem" }}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter confirm passsword"
                  style={{ width: "15rem" }}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact number"
                style={{ width: "31rem" }}
                onChange={(e) => setcontact(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                style={{ width: "31rem" }}
                onChange={(e) => setaddress(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ width: "31rem" }}
              variant="success"
              onClick={register}
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
