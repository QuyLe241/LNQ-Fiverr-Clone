import React from "react";

const ListLanguage = () => {
  return (
    <div>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span className="">
          <i class="fa-solid fa-check text-xs"></i>
        </span>{" "}
        English
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        {/* <span className="">
          <i class="fa-solid fa-check text-xs"></i>
        </span> */}
        VietNamese
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Duetsch
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Espanol
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Francais
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Portugues
      </button>
      <button
        className="w-full py-2 hover:bg-slate-100 font-semibold text-base"
        style={{ color: "#74767e" }}
      >
        <span></span> Italiano
      </button>
    </div>
  );
};

export default ListLanguage;
