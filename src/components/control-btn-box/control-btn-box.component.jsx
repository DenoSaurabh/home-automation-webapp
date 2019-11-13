/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from "react";

import "./control-btn-box.styles.scss";

import ButtonRect from "../button-rect/button-rect.component";
import Switches from "../switch/switch.component";
import TextField from "../input/input.component";

// Making Connection
import mqtt from "mqtt";

let connectClient = mqtt.connect("wss://test.mosquitto.org:8081");
  
// Subscribing for Messages
connectClient.subscribe('videoMade');

// Listening for Messages
connectClient.on("message", (topic, message) => {
  console.log(`Receieved a message from your Home ${topic}: ${message}`);
});

//  This Component is a box for Control
const HomeControlBtnBox = ({ getStatus, getMessage }) => {

  // let Client;
  const [client, setClient] = useState(undefined);

  const [camTime, setCamTime] = useState(30000);

  //const [toogleLedSwitch, setToogleLedSwitch] = useState(true);
  //const [toogleDoor, setToogleDoor] = useState(true);

  const [switchState, setSwitchState] = useState({
    checkedLed: false,
    checkedDoor: false
  });

  // Function to Send data to parent Component
  const sendStatus = status => getStatus(status);
  const sendMessage = message => getMessage(message);

  const getConnected = e => {
    e.preventDefault();

    const password = window.prompt(
      "Enter the password to connect to your Home 🔑"
    );

    if (password === "pi") {
      // Establishing Connection
      setClient(connectClient);

      sendStatus("connected");
      sendMessage("You are now connected with your Home 📡😀🏡");
    } else if (password !== "pi" && !client) {
      sendStatus("UnAuthenticated");
      window.alert("Seems like you have written the Wrong Password!! ✍😯");
    }
  };

  const getDisconnected = e => {
    e.preventDefault();

    if (client) {
      setClient(undefined);
      sendStatus("disconnected");
      sendMessage("You are now disconnected with your Home 🏡 🚫📡 😞");
    } else {
      sendStatus("disconnected");
      sendMessage("You are not connected with your Home 🏡 😕");
    }
  };

  const handleSwitchChange = name => event => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
    console.log(name);

    if (client) {
      if (name === "checkedLed") {
        client.publish("led", switchState.checkedLed.toString());
        sendMessage("Sending message to your Home to switch LED 💡");
      } else if (name === "checkedDoor") {
        client.publish("door", switchState.checkedDoor.toString());
        sendMessage("Sending message to your Home to switch Door 🚪");
      }
    } else {
      sendMessage("Seems like your are not connected with your Home 🏠");
    }
  };

  // Camera Message
  const sendrecordCamMessage = () => {
    console.log("Done Cam", camTime);
    client.publish("camRecord", camTime);
    sendMessage(
      `Sended message to your Home to record camera for ${camTime /
        1000}s 🏡📸 `
    );
  };

  const camTimeChangeHandler = event => {
    setCamTime(event.target.value);
  };

  /*
  DISCLAMIR: The classes of the controls are wrong because ...... 
  Sorry
  */

  return (
    <div className="control-box">
      <ButtonRect
        classname="blutooth-btn-con"
        color="default"
        variant="contained"
        value="Connect to Car"
        onClickHandler={getConnected}
      />
      <ButtonRect
        classname="blutooth-btn-dis"
        color="secondary"
        variant="contained"
        value="Disconnect"
        onClickHandler={getDisconnected}
      />

      <div className="car-control-btn-box">
        <div className="all-switches">
          <Switches
            className="control-led switch"
            value={"toogleLedSwitch"}
            onChangeHandlerFunc={handleSwitchChange("checkedLed")}
            label="Switch Home LED"
          />

          <Switches
            className="control-door switch"
            value={"toogleDoor"}
            color="primary"
            onChangeHandlerFunc={handleSwitchChange("checkedDoor")}
          />
        </div>

        <div className="cam-box">
          <TextField
            className="cma-timer-text"
            label="Record Home Cam"
            margin="normal"
            variant="outlined"
            value={camTime}
            onChangeHandler={camTimeChangeHandler}
          />
          <ButtonRect
            classname="home-cam-record-btn"
            color="secondary"
            variant="contained"
            value="Record Home Camera"
            onClickHandler={sendrecordCamMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeControlBtnBox;
