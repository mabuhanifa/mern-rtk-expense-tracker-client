import React from "react";
import { VscTrash } from "react-icons/vsc";
import apiSlice from "../store/apiSlice";

export default function List() {
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetLabelsQuery();
  const [deleteTransaction] = apiSlice.useDeleteTransactionMutation();
  let Transactions;

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
  };

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = data.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick}></Transaction>
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transactions}
    </div>
  );
}

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
