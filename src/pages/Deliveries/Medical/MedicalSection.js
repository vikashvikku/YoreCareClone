import React from "react";
import "./medicalsection.css";
import doctorg from "../../../Images/doctor.png";
import prescription from "../../../Images/prescription.png";
import whatsapp from "../../../Images/whatsapp.png";
import booking from "../../../Images/book.png";

function MedicalSection() {
  return (
    <>
      <div className="cont">
        <img src={prescription} alt="" className="prescription" />

        <img src={doctorg} alt="" className="doctor" />
      </div>
      <img src={whatsapp} alt="" className="whatsapp" />
      <img src={booking} alt="" className="booking" />
    </>
  );
}

export default MedicalSection;
