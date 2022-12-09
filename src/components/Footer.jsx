import React from "react";
import { BsChatSquareDots } from "react-icons/bs";
import ReactDOM from "react-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Footer = () => {
  return (
    <div className="max-h-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
        <MessengerCustomerChat
          pageId="100047858121508"
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        />
        ,
      </div>
    </div>
  );
};

export default Footer;
