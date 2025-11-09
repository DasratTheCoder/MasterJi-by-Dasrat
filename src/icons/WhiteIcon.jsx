import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

function WhiteIcon() {
  return (
    <FontAwesomeIcon
      icon={faCircleHalfStroke}
      className="text-white text-xl"
    />
  );
}

export default WhiteIcon;
