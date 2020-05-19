import React from "react";
import { Form, Button, Card } from "react-bootstrap";

function Login() {
  function handelLogin(event) {
    event.preventDefault();
    window.location.replace("/center");
  }
  return (
    <>
      <Card
        style={{
          width: "25rem",
          margin: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Member Login</Card.Title>
          <Form onSubmit={handelLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button
              style={{ float: "right" }}
              variant="warning"
              onClick={() => {
                window.location.replace("/register");
              }}
            >
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default Login;