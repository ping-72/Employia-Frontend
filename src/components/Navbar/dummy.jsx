import { Button } from "@mui/material";
import FrameComponent from "./framecomponent";
import PropTypes from "prop-types";

const Dummy = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-darkslateblue overflow-hidden flex flex-col items-center justify-start pt-[104px] px-5 pb-[3430px] box-border gap-[82.8px] leading-[normal] tracking-[normal] text-center text-[70px] text-white font-poppins mq450:gap-[21px] mq925:gap-[41px] ${className}`}
    >
      <div className="w-[878.5px] rounded-54xl bg-gray-1200 flex flex-row items-start justify-start max-w-full">
        <div className="self-stretch w-[878px] relative rounded-54xl bg-gray-1200 hidden max-w-full" />
        <FrameComponent />
      </div>
      <div className="w-[880px] flex flex-row items-start justify-start py-0 pr-3 pl-2.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 self-stretch h-[201px] relative text-inherit leading-[130.42%] font-extrabold font-inherit inline-block shrink-0 mq450:text-[42px] mq450:leading-[55px] mq925:text-[56px] mq925:leading-[73px]">
              <p className="m-0">World's First Candidate</p>
              <p className="m-0">Tracking Software.</p>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-[31px]">
              <div className="h-[69px] flex-1 relative leading-[130.42%] font-light inline-block max-w-full mq450:text-[19px] mq450:leading-[24px] mq925:text-[25px] mq925:leading-[32px]">
                Check with our CTS whether you should HIRE or NOT!
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-purple-800 transition-colors duration-300 ease-out border-2 border-purple-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-purple-600 group-hover:-rotate-180 ease"></span>
<span class="relative">Get Started</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Dummy.propTypes = {
  className: PropTypes.string,
};

export default Dummy;
