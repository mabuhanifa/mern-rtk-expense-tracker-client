import React from "react";
import { VscTrash } from "react-icons/vsc";
function Transaction({ category }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <span className="text-red-500 text-2xl">
          <VscTrash />
        </span>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
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
      {obj.map((v, i) => (
        <Transaction key={i} category={v}></Transaction>
      ))}
    </div>
  );
};

export default List;
