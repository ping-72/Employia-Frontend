import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`h-[108.2px] flex-1 relative max-w-full text-left text-23xl-7 text-midnightblue font-europa-grotesk-sh ${className}`}
    >
      <div className="absolute h-[calc(100%_-_0.2px)] top-[0px] bottom-[0.2px] left-[85.5px] w-[403px] flex flex-row items-start justify-start">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-2.svg"
          />
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[4]"
            loading="lazy"
            alt=""
            src="/vector-2-1.svg"
          />
        </div>
      </div>
      <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[484.4px] max-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
          alt=""
          src="/./public/vector-1.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-9 px-[86px] pb-[16.2px] box-border max-w-full h-full">
          <i className="h-14 w-[274.7px] relative inline-block font-bold shrink-0 z-[6] mq450:text-7xl mq925:text-15xl">
            Employia
          </i>
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[5]"
              alt=""
              src="/vector-1-1.svg"
            />
            <img
              className="absolute top-[37.3px] left-[43.5px] w-[38.7px] h-[34.7px] z-[6]"
              loading="lazy"
              alt=""
              src="/../public/logo-employa.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0.5px] [backdrop-filter:blur(32.4px)] rounded-54xl bg-gray-1400 box-border w-full h-full z-[3] border-[1px] border-solid border-gray-1300" />
      <div className="absolute top-[0px] left-[681.5px] rounded-31xl bg-gray-700 w-[195px] flex flex-row items-start justify-start pt-[9px] px-1 pb-[7px] box-border z-[4]">
        <div className="h-[108px] w-[195px] relative rounded-31xl bg-gray-700 hidden" />
        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>

      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;