import React, { useState, useEffect } from "react";
import LoginValidate from "../function/LoginValidate";
import DateStyle from "../function/DateStyle";

function Center() {
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  //如果尚未登入: 回到登入頁
  useEffect(() => {
    if (LoginValidate() !== false) {
      setEmail(LoginValidate().email);
      setTime(DateStyle(new Date(LoginValidate().time).toString()));
    } else window.location.replace("/");
  }, [time, email]);

  return <h1>{time + " " + email}</h1>;
}
export default Center;
