import React from "react";import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["مهندس اتصالا تحت التدريب", "متعاون", "اجيد العمل تحت ضغط"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
