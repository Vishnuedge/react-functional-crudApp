import React from 'react';
import './css/About.css';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-5">
            <div className="text-center">
              {/* IMAGE */}
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
                alt="PROFILE_PIC"
                className="image_border"
              />
              {/* ADDRESS */}

              {/* <h1 className="text-white">CHENNAI </h1>
              <p>No : 100 , ANNASALAI </p>
              <p>ANNA NAGAR</p> */}
            </div>
            {/* SKILLS */}
            <div className=" text-white mt-5 fs-1 text-center skill-border">
              SKILLS
            </div>
            <div className="flex-box skill-border">
              <div className="d-flex flex-column ">
                <div className="p-2 parent-hover">
                  <CheckCircleIcon className="hover-green" /> HTML
                </div>
                <div className="p-2 parent-hover">
                  <CheckCircleIcon className="hover-green" /> CSS
                </div>
                <div className="p-2 parent-hover">
                  <CheckCircleIcon className="hover-green" /> BOOTSTARP
                </div>
                <div className="p-2 parent-hover">
                  <CheckCircleIcon className="hover-green" /> REACT JS
                </div>
                <div className="p-2 parent-hover">
                  <CheckCircleIcon className="hover-green" /> NODE JS
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 parent ">
            <div className="row">
              <div className="col text-center">
                <h1 className="name">VISHNU KARTHICK</h1>
                <h5 className="text-white"> - FULL STACK DEVELOPER</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3" />
              <div className="col-lg-6">
                <div className="contact">
                  <p className="mt-2 mx-2 ">
                    <PhoneIcon className="mx-3" />
                    +91 8899774455
                  </p>
                  <hr />
                  <p className="mx-2">
                    <MailIcon className="mx-3" /> vishnuachi1508@gmailcom
                  </p>
                  <hr />

                  <p className="mx-2">
                    <LanguageIcon className="mx-3" />
                    www.vishnuedge.in
                  </p>
                </div>
              </div>
              <div className="col-lg-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
