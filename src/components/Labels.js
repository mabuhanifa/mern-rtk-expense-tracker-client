import React from "react";
const obj = [
    {
        type: "Savings",
        color: '#f9c74f',
        percent: 45
    },
    {
        type: "Investment",
        color: '#f9c74f',
        percent: 20
    },
    {
        type: "Expense",
        color:  'rgb(54, 162, 235)',
        percent: 10
    }
]
function LabelComponent() {
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: "#f9c74f" }}
        ></div>
        <h3 className="text-md">Savings</h3>
      </div>
      <h3 className="font-bold">45%</h3>
    </div>
  );
}
const Labels = () => {
  return (
    <>
      {obj.map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>)}
    </>
  );
};

export default Labels;