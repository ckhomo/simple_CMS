import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import LoginValidate from "../function/LoginValidate";
import swal from "sweetalert";

function Login(props) {
  var default_email = "";
  var default_password = "";
  try {
    default_email = props.location.state.email;
  } catch (err) {}
  try {
    default_password = props.location.state.password;
  } catch (err) {}
  console.log(props)
  const [email, setEmail] = useState(default_email);
  const [password, setPassword] = useState(default_password);
  const [alert, setAlert] = useState(false);

  //如果已經登入: 直接進入會員中心
  useEffect(() => {
    if (LoginValidate() !== false) {
      window.location.replace("/center");
    }
  });

  function handelLogin(event) {
    event.preventDefault();
    const list = JSON.parse(localStorage.getItem("list"));

    //登入驗證:
    var verify = list.find((item) => {
      return item.email === email && item.password === password;
    });

    if (verify) {
      setAlert(false);
      const token = {
        email: verify.email,
        time: new Date(),
      };
      localStorage.setItem("token", JSON.stringify(token));
      swal({
        title: "提示訊息",
        text: "登入成功！",
        icon: "success",
      }).then(() => {
        window.location.replace("/center");
      });
    } else {
      setAlert(true);
    }
  }

  return (
    <>
      <Card className="mainCard">
        <Card.Body>
          <Card.Title>Member Login</Card.Title>
          <Alert key="danger" variant="danger" show={alert}>
            無效的帳號或密碼！
          </Alert>
          <Form onSubmit={handelLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                required
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
                required
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
