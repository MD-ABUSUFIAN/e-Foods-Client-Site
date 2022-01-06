import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-secondary py-3">
           <a href=""> <img className=" footer-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="" /></a>
           <a href=""> <img className=" w-25 footer-icon" src="https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png" alt="" /></a>
           <a href=""> <img className=" w-25 footer-icon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
           <a href=""> <img className=" w-25 footer-icon img-fluid" src="https://seeklogo.com/images/G/gmail-new-2020-logo-32DBE11BB4-seeklogo.com.png" alt="" /></a>
            <footer className="text-center text-white">Copyright © 2021 || All Right Reserved ABU SUFIAN(cH@MoK)</footer>
        </div>
    );
};

export default Footer;