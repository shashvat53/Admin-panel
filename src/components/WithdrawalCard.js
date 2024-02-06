import React from "react";

const WithdrawalCard = ({ title, subTitle, num, theme2, theme3, theme1 }) => {
  return (
    <>
      <div
        className={`${theme2} ${theme3}  ${theme1} p-[20px_30px] w-full sm:w-[390px] text-white rounded-md`}
      >
        <div className="flex flex-col items-center pb-2 gap-2">
          <i className="fa-solid fa-money-bill-1 text-3xl"></i>
          {/* <p>\f0d6</p> */}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        <div class="border-t border-gray-300"></div>

        <div className="flex flex-col  items-center pt-2 gap-2">
          <p className="text-lg">{subTitle}</p>
          <p className="font-bold">{num}</p>
        </div>
      </div>
    </>
  );
};

export default WithdrawalCard;
