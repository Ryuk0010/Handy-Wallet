import React from "react";
import IncomeList from "./_components/IncomeList";

function Income() {
  return (
    <div className="p-10 w-5/8 h-screen bg-slate-950 overflow-y-auto overflow-x-hidden">
      <h2 className="font-bold text-3xl">My Income Streams</h2>
      <IncomeList />
    </div>
  );
}

export default Income;
