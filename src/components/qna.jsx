import React from 'react'
import QuestionComponent from './GroupComponent2'
import { Link } from 'react-router-dom'

function QnA() {
  return (
    <>
    <div className="absolute top-[473rem] left-[8.688rem] shadow-[-128px_-660px_188px_rgba(160,_50,_251,_0),_-82px_-423px_172px_rgba(160,_50,_251,_0.01),_-46px_-238px_145px_rgba(160,_50,_251,_0.05),_-20px_-106px_108px_rgba(160,_50,_251,_0.09),_-5px_-26px_59px_rgba(160,_50,_251,_0.1)] rounded-68xl bg-white w-[100rem] h-[70.688rem]" />
      <div className="absolute top-[475.813rem] left-[calc(50%_-_591px)] text-[3rem] leading-[130.42%] font-extrabold text-left inline-block w-[25.563rem]">
        <p className="m-0">Your questions?</p>
        <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(90deg,_#b1afaf,_#d0acff_51.4%,_#9747ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          our solutions!
        </p>
      </div>
      <div className="absolute top-[493.563rem] left-[14.688rem] rounded-13xl box-border w-[41.688rem] h-[39.5rem] border-[3px] border-solid border-darkgray" />
      <div className="absolute top-[496.563rem] left-[61.813rem] w-[27.206rem] h-[28rem] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[1rem] top-[3.5rem] [transform:scale(1.471)]"
          alt=""
          src="/rectangle-811@2x.png"
        />
      </div>
      <div className="absolute top-[538.563rem] left-[77.75rem] w-[19.831rem] h-[3.5rem] text-left text-[2.669rem] text-midnightblue font-europa-grotesk-sh">
        <i className="absolute top-[0rem] left-[2.669rem] inline-block font-bold w-[17.169rem] h-[3.5rem]">
          Employia
        </i>
        <img
          className="absolute top-[0.081rem] left-[0rem] w-[2.419rem] h-[2.169rem]"
          alt=""
          src="./../../public/logo-employa.svg"
        />
      </div>
      <QuestionComponent />
      <QuestionComponent propTop="503.063rem" />
      <QuestionComponent propTop="510.063rem" />
      <QuestionComponent propTop="517.063rem" />
      <QuestionComponent propTop="524.063rem" />
      <div className="absolute top-[536.375rem] left-[20.313rem] w-[30.463rem] h-[3.688rem] text-[1.606rem] text-gray-900 font-inter">
        <div className="absolute h-full w-full top-[0%] left-[0%] leading-[1.283rem] inline-block">
          <span>{`Havent seen yours? `}</span>
          <Link  className="text-gray-1000">ask one</Link>
        </div>
      </div>
    </>
  )
}

export default QnA
