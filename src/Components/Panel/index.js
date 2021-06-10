import navBar from "../navbar.js";
import footer from "../footer.js";
import "./styles.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/authContext.js";

export default function Panel() {
  const { token, setToken } = useContext(AuthContext)
  const [tokenData, setTokenData] = useState({})

  useEffect(() => {
    try {
      return setTokenData(JSON.parse(atob(token.split('.')[1])));
    } catch (e) {
      return null;
    }
  }, []);

  return (
    <>
      {navBar()}
      <div className="panel">
        <div className="panel-listings">
          <div className="panel-text">Active listings:</div>
          <div className="listings-list">Tu docelowo będą aktywne listingi</div>
        </div>
        <div className="panel-info">
          <div className="panel-text">Profile info:</div>
        </div>
      </div>
      {footer}
    </>
  );
}
