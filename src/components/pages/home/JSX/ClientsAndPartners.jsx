import React from "react";
import "./ClientsAndPartners.css";

// ✅ Corrected import paths and file names for client logos
import sbi from '../../../../assets/SBI GENERAL INSURANCE.avif';
import reliance from '../../../../assets/RELIANCE GENERAL INSURANCE.avif';
import dhanshakti from '../../../../assets/dHANSHAKTI.avif';
import bajaj from '../../../../assets/bajaj-allianz-.avif';
import gok from '../../../../assets/Government of Karnataka_edited.avif';
import nddb from '../../../../assets/NDDB DAIRY SERVICE.avif';
import baif from '../../../../assets/bAIF.avif';
import agrivijay from '../../../../assets/aGRIVIJAY.avif';

// ✅ Corrected import paths and file names for partner logos
import startupIndia from '../../../../assets/STARTUP INDIA.avif';
import startupKarnataka from '../../../../assets/STARTUP KARNATAKA.avif';
import birac from '../../../../assets/BIRAC.avif';
import nvidia from '../../../../assets/nvdia.avif';
import investIndia from '../../../../assets/invest india.avif';
import ccmap from '../../../../assets/c-camp.avif';

function ClientsAndPartners() {
  return (
    <>
      {/* Our Happy Clients Section */}
      <section className="clients-section">
        <h2 className="clients-title">Our Happy Clients</h2>
        <div className="clients-container">
          <div className="client-logo">
            <img src={sbi} alt="SBI General Insurance" />
            <p className="client-name">SBI General Insurance</p>
          </div>
          <div className="client-logo">
            <img src={reliance} alt="Reliance General Insurance" />
            <p className="client-name">Reliance General Insurance</p>
          </div>
          <div className="client-logo">
            <img src={dhanshakti} alt="Dhanshakti" />
            <p className="client-name">Dhanshakti</p>
          </div>
          <div className="client-logo">
            <img src={bajaj} alt="Bajaj Allianz" />
            <p className="client-name">Bajaj Allianz</p>
          </div>
          <div className="client-logo">
            <img src={gok} alt="Government of Karnataka" />
            <p className="client-name">Government of Karnataka</p>
          </div>
          <div className="client-logo">
            <img src={nddb} alt="NDDB Dairy Service" />
            <p className="client-name">NDDB Dairy Service</p>
          </div>
          <div className="client-logo">
            <img src={baif} alt="BAIF" />
            <p className="client-name">BAIF</p>
          </div>
          <div className="client-logo">
            <img src={agrivijay} alt="AgriVijay" />
            <p className="client-name">AgriVijay</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
<section className="partners-section">
  <h2 className="partners-title">Partners</h2>
  {/* Add this div for the separator line */}
  <div className="partners-separator"></div> 
  <div className="partners-container">
    <div className="partner-logo">
      <img src={startupIndia} alt="Startup India" />
      <p className="partner-name">Startup India</p>
    </div>
    <div className="partner-logo">
      <img src={startupKarnataka} alt="Startup Karnataka" />
      <p className="partner-name">Startup Karnataka</p>
    </div>
    <div className="partner-logo">
      <img src={birac} alt="BIRAC" />
      <p className="partner-name">BIRAC</p>
    </div>
    <div className="partner-logo">
      <img src={nvidia} alt="Nvidia" />
      <p className="partner-name">Nvidia</p>
    </div>
    <div className="partner-logo">
      <img src={investIndia} alt="Invest India" />
      <p className="partner-name">Invest India</p>
    </div>
    <div className="partner-logo">
      <img src={ccmap} alt="C-CAMP" />
      <p className="partner-name">C-CAMP</p>
    </div>
  </div>
</section>
    </>
  );
}

export default ClientsAndPartners;