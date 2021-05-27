import React from "react";
import { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketContext } from "../SocketContext";
import Notification from "./Notification";

const Options = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="options">
      <form className="options__form">
        <div className="options__main">
          <h2 className="sub__heading">Account Info</h2>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <button
              onClick={(e) => e.preventDefault()}
              className="btn btn-primary"
            >
              Copy Your ID
            </button>
          </CopyToClipboard>
        </div>
        <div className="options__mainright">
          <h2 className="sub__heading">Make a call</h2>
          <label>ID to call</label>
          <input
            type="text"
            className="form-control"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          {callAccepted && !callEnded ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                leaveCall();
              }}
              className="btn btn-danger"
            >
              <PhoneDisabled /> Hang Up
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                callUser(idToCall);
              }}
            >
              <Phone /> Call
            </button>
          )}
        </div>
      </form>
      <Notification />
    </div>
  );
};

export default Options;
