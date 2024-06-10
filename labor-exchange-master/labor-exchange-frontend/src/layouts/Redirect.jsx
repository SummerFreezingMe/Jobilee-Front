import {useNavigate} from "react-router";
import {useEffect} from "react";
import {getData} from "../auth.js";

const Redirect = () => {
  const nav = useNavigate()
  useEffect(() => {
    if (getData() === -1) nav("/auth")
    else nav("/")
  }, [])
  return (
    <div />
  );
};

export default Redirect;