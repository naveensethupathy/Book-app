/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Wordlist from "./Wordslist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
export default function ViewButton(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="viewButton"
        onClick={() => {
          navigate("/words", { state: props.bookname });
        }}
      >
        View 

       
      </button>
    </div>
  );
}
