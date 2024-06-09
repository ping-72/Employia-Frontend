import { useMemo } from "react";
import PropTypes from "prop-types";

const QuestionComponent = ({ className = "", propTop }) => {
  const groupDiv29Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[496.063rem] left-[13.5rem] w-[40.5rem] h-[5.375rem] text-center text-[1.575rem] text-gray-1000 font-inter ${className}`}
      style={groupDiv29Style}
    >
      <div className="absolute h-[93.02%] w-[91.2%] top-[0%] right-[0%] bottom-[6.98%] left-[8.8%] rounded-lg bg-gainsboro-300 box-border border-[2px] border-solid border-black" />
      <img
        className="absolute h-[18.37%] w-[1.22%] top-[37.21%] right-[4.95%] bottom-[44.42%] left-[93.83%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="./../../public/vector-1.svg"
      />
      <b className="absolute h-[67.44%] w-[84.72%] top-[32.56%] left-[0%] leading-[1.261rem] inline-block">
        lets help you figure out what ?
      </b>
    </div>
  );
};

QuestionComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default QuestionComponent;
