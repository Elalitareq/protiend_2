"use client";

import React, { ChangeEventHandler, useState } from "react";

const CodeChecker = () => {
  const [code, setCode] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [message, setMessage] = useState<
    "code_does_not_exist" | "error" | "success" | "used_before" | ""
  >("");
  const handleCodeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    if (value && value.length < 6) {
      setCode(value);
    }
    if (value === null || value === undefined || value === "") {
      setCode("");
    }
  };

  const checkCode = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch("/api/authenticatedCodes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setMessage(data.status);
    } catch (e) {
      console.log(e);
    }
    setIsDisabled(false);
  };

  const messageToResp = {
    code_does_not_exist: { text: "YOUR PRODUCT IS UNAUTHENTIC!", color: "red" },
    error: {
      text: "YOUR PRODUCT IS UNAUTHENTIC!",
      color: "red",
    },
    success: { text: "YOUR PRODUCT IS AUTHENTIC", color: "green" },
    used_before: { text: "YOUR PRODUCT IS AUTHENTIC", color: "#fcad03" },
  };
  return (
    <div
      style={{
        boxShadow: "0.00px 1.00px 13px 7px rgba(9,7,91,0.6)",
      }}
      className="bg-white rounded p-4 flex flex-col items-center gap-4 shadow-black relative pb-10"
    >
      <h1
        className="font-bold text-4xl text-center px-5 leading-snug"
        style={{
          color: message ? messageToResp[message]?.color : "black",
        }}
      >
        {" "}
        {message ? messageToResp[message]?.text : "CHECK PRODUCT AUTHENTICITY"}
      </h1>
      <input
        type="text"
        id="code"
        value={code}
        onChange={handleCodeChange}
        className=" px-4 py-2 text-center focus:bg-gray-100 focus:border:none focus:outline-none text-2xl  w-full placeholder:text-2xl border-b-2 border-t-0 border-l-0 border-r-0 border-black  "
        placeholder="Authentication Code"
        required
      />
      <button
        onClick={checkCode}
        disabled={code.length < 5 || isDisabled}
        className="bg-black text-white px-8 py-3 text-xl absolute disabled:bg-gray-300 -bottom-8 tracking-widest active:bg-[#222] hover:bg-[#222] transition-all duration-300   disabled:outline-none"
      >
        Check Code
      </button>
    </div>
  );
};

export default CodeChecker;
