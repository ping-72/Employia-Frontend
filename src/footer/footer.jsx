import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1732.8px] max-w-full h-[539px] text-left text-9xl text-white font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_866.4px)] w-[1732.8px] h-[539px] text-base-8 text-whitesmoke-100">
        <div className="absolute top-[0px] left-[calc(50%_-_866.4px)] bg-black w-[1732.8px] h-[539px]" />
        <div className="absolute top-[478px] left-[calc(50%_-_198.4px)] leading-[24.07px] inline-block w-[397px] h-[27px]">
          Copyright © 2024 employia.ltd All rights reserved
        </div>
        <div className="absolute top-[356px] left-[calc(50%_-_729.4px)] text-11xl leading-[26.24px] font-semibold inline-block w-[730px] h-[28.4px] text-white">
          <span>{`Made with `}</span>
          <span className="text-red-200">❤</span>
          <span>️ from india for the World 🇮🇳</span>
        </div>
      </div>
      <b className="absolute top-[68px] left-[139px] leading-[36.82px] inline-block w-[210.4px]">
        Product
      </b>
      <b className="absolute top-[68px] left-[551px] leading-[36.82px] inline-block w-[210.4px]">
        Resources
      </b>
      <b className="absolute top-[68px] left-[983px] leading-[36.82px] inline-block w-[210.4px]">
        Company
      </b>
      <b className="absolute top-[68px] left-[1408px] leading-[36.82px] inline-block w-[210.4px]">
        Legal
      </b>
      <div className="absolute top-[119px] left-[139px] w-[210.4px] h-[121px] text-5xl text-gray-200">
        <div className="absolute top-[0px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Features
          </div>
        </div>
        <div className="absolute top-[40px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Integration
          </div>
        </div>
        <div className="absolute top-[84px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Pricing
          </div>
        </div>
      </div>
      <div className="absolute top-[120px] left-[551px] w-[235px] h-[120px] text-5xl text-gray-200">
        <div className="absolute top-[0px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Content Hub
          </div>
        </div>
        <div className="absolute top-[40px] left-[0px] w-[235px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            API documentation
          </div>
        </div>
        <div className="absolute top-[83px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Pricing
          </div>
        </div>
      </div>
      <div className="absolute top-[120px] left-[1407px] w-[235px] h-[120px] text-5xl text-gray-200">
        <div className="absolute top-[0px] left-[0px] w-[235px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">{`Terms & Conditions`}</div>
        </div>
        <div className="absolute top-[40px] left-[0px] w-[235px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">{`Privacy Policy `}</div>
        </div>
        <div className="absolute top-[83px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Refund policy
          </div>
        </div>
      </div>
      <div className="absolute top-[119px] left-[983px] w-[235px] h-[163px] text-5xl text-gray-200">
        <div className="absolute top-[0px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            About us
          </div>
        </div>
        <div className="absolute top-[40px] left-[0px] w-[235px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Contact us
          </div>
        </div>
        <div className="absolute top-[83px] left-[0px] w-[210.4px] h-[37px]">
          <div className="absolute w-full top-[0%] left-[0%] leading-[36.82px] font-medium inline-block">
            Partnerships
          </div>
        </div>
        <div className="absolute w-[89.53%] top-[77.3%] left-[0%] leading-[36.82px] font-medium inline-block">
          Carrers
        </div>
      </div>
      <div className="absolute top-[344px] left-[1379px] w-[317.3px] h-14 text-23xl-7 font-europa-grotesk-sh">
        <i className="absolute top-[0px] left-[42.7px] inline-block font-bold w-[274.7px] h-14">
          Employia
        </i>
        <img
          className="absolute top-[1.3px] left-[0px] w-[38.7px] h-[34.7px]"
          alt=""
          src="/vector3.svg"
        />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
