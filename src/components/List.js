import React from "react";
function Transaction({category}) {
  if (!category) return null;
  return (
    <div></div>
  );
}
const List = () => {
  const obj = [
    {
      name: "Savings",
      color: "#f9c74f",
    },
    {
      name: "Investment",
      color: "#f9c74f",
    },
    {
      name: "Expense",
      color: "rgb(54, 162, 235)",
    },
  ];
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
    </div>
  );
};

export default List;
