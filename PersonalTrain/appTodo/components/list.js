import React from "react";

export default function List1() {
  const list = [
    { name: "enzo", age: 18 },
    { name: "theo", age: 14 },
    { name: "antoine", age: 12 },
  ];

  const listItem = list.map((item, index) => {
    return (
      <li key={index}>
        <p
          style={
            item.age >= 18
              ? { color: "green" }
              : { color: "red", fontWeight: "bold" }
          }
        >
          {item.name}, {item.age}
        </p>
      </li>
    );
  });

  return <ul>{listItem}</ul>;
}
