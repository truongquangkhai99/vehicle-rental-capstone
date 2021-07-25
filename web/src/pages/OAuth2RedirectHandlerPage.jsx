import { login } from "app/slice/userSlice";
import store from "app/store";
import queryString from "query-string";
import React from "react";
import { Redirect } from "react-router-dom";

function OAuth2RedirectHandler(props) {
  const res = queryString.parse(props.location.search);
  store.dispatch(login({...res}));
  return (
    <>
      (
      <Redirect
        to={{
          pathname: localStorage.getItem("_pathname"),
          search: localStorage.getItem("_search"),
          state: { from: props.location },
        }}
      />
      )
    </>
  );
}

export default OAuth2RedirectHandler;
