// import jwt from 'jsonwebtoken'

const LoginValidate = function () {
  //登入驗證檢查:
  if (localStorage.getItem("token")) {
    const list = JSON.parse(localStorage.getItem("token"));
    return list;
  }
  return false;
  //檢查結束
};

export default LoginValidate;
