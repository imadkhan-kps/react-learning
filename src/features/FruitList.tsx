import React from "react";

const FruitList: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const fruits: string[] = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <div>
      {isShow ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default FruitList;
