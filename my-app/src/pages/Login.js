import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import LoginValidate from "../function/LoginValidate";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //如果已經登入: 直接進入會員中心
  useEffect(() => {
    if (LoginValidate() !== false) {
      window.location.replace("/center");
    }
  });

  function handelLogin(event) {
    event.preventDefault();
    const list = JSON.parse(localStorage.getItem("list"));

    // 登入驗證：
    list.map((item) => {
      if (item.email === email) {
        if (item.password === password) {
          const token = {
            email: item.email,
            time: new Date(),
          };
          localStorage.setItem("token", JSON.stringify(token));
          window.location.replace("/center");
        }
      }
      return null;
    });
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
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
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
