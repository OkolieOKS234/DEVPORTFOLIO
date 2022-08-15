import React from "react";
import "./styles/index.css";
import walmart from "./images/Walmart.svg";
import jpmorgan from "./images/JPMorgan.svg";
import visa from "./images/Visa.svg";
import tinder from "./images/Tinder.svg";
import samsung from "./images/Samsung.svg";
import verizon from "./images/Verizon.svg";

const Companies = () => {
  return (
    <section className="companies">
      <img src={walmart} alt="" srcset="" className="companies" />
      <img src={jpmorgan} alt="" srcset="" className="companies" />
      <img src={visa} alt="" srcset="" className="companies" />
      <img src={tinder} alt="" srcset="" className="companies" />
      <img src={samsung} alt="" srcset="" className="companies" />
      <img src={verizon} alt="" srcset="" className="companies" />
    </section>
  );
};

export default Companies;
