import React from "react";

const ListCurrency = () => {
  return (
    <div>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span className="">
          <i class="fa-solid fa-check text-xs"></i>
        </span>{" "}
        United State Dollar (USD - US$)
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Euro (EUR - €)
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> British Pound (GBP - £)
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Australian Dollar (AUD - A$)
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Israeli Shekel (ILS - ₪)
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Brazillan Real (HKD - HK$)
      </button>
    </div>
  );
};

export default ListCurrency;
