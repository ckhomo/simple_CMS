import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import LoginValidate from "../function/LoginValidate";
import swal from "sweetalert";

function Register(props) {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  //如果已經登入: 直接進入會員中心
  useEffect(() => {
    if (LoginValidate() !== false) {
      window.location.replace("/center");
    }
  });

  function handleRegister(event) {
    event.preventDefault();
    const list = JSON.parse(localStorage.getItem("list"));

    //檢查帳號是否重複
    var verify = list.every((item) => {
      return item.email !== email;
    });

    if (verify) {
      setAlert(false);
      const newUser = {
        email: email,
        created: new Date(),
        password: password,
      };
      list.push(newUser);
      localStorage.setItem("list", JSON.stringify(list));
      swal({
        title: "提示訊息",
        text: "註冊成功！",
        icon: "success",
      }).then(() => {
        window.location.replace(
          "/" +
            {
              email: email,
              password: password,
            }
        );
      });
    } else {
      setAlert(true);
    }
  }
  return (
    <>
      <Card className="mainCard">
        <Card.Body>
          <Card.Title>Member Register</Card.Title>
          <Alert key="danger" variant="danger" show={alert}>
            重複的帳號！
          </Alert>
          <Form onSubmit={handleRegister}>
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
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default Register;
