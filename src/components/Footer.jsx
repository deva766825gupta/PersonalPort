import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/devansh-g-14a334225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <FaLinkedinIn size={24} />
              </a>
              
             
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 . All rights reserved.
              </p>
              <p className="text-sm">DEVANSH GUPTA ❤️  2K21/EE/099</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
