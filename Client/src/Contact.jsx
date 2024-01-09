import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <h3 className="text-center text-[2rem] font-bold font-sans mb-10">
        Feel Free To Contact
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.726169922369!2d91.71984498816892!3d26.158216443802306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5bcbd8572621%3A0x51f61bb9774f05da!2sFatasil%20Ambari%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1703210676502!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="m-[5%]  ">
        <form method="POST" action="https://formspree.io/f/xgegwnbg" className="flex flex-col gap-10 justify-center items-center">
          <input className="p-[0.4rem] w-[30%] border-solid border-2 border-black" type="text" value={isAuthenticated?user.name:''} placeholder="username" name="username" required autoComplete="off"/>
          <input className="p-[0.4rem] w-[30%] border-solid border-2 border-black" type="email" value={isAuthenticated?user.email:''} placeholder="email" name="email" required  autoComplete="off"/>
          <textarea className="p-[0.4rem] w-[30%] border-solid border-2 border-black" placeholder="Type your message" md:cols='20' rows='10' name="Message" required autoComplete="off"/>
          <input className="w-[15%] rounded-xl h-[5vh] font-bold hover:bg-yellow-600 cursor-pointer bg-yellow-400 " type="submit" value="Send"/>


        </form>
      </div>
    </>
  );
};

export default Contact;
