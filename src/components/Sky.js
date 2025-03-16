import { useState, useEffect } from "react";

const Sky = () => {
  const snow = [
    { id: "snow1", gridColumn: "1 / 2", zIndex: '101' },
    { id: "snow2", gridColumn: "2 / 4",  zIndex: '101'},
    { id: "snow3", gridColumn: "4 / 5",  zIndex: '201' },
    { id: "snow4", gridColumn: "5 / 6",  zIndex: '99'},
    { id: "snow5", gridColumn: "6 / 7",  zIndex: '201' },
    { id: "snow6", gridColumn: "7 / 8",  zIndex: '101' },
    { id: "snow7", gridColumn: "8 / 9",  zIndex: '99' },
  ];


  const [delays, setDelays] = useState([]);

  useEffect(() => {
    setDelays(snow.map(() => `${Math.random() * 10}s`));
  }, []); 

  return (
    <div className="sky">
      <div className="sun"></div>
      {snow.map((i, index) => (
        <div
          key={i.id}
          className="snow"
          style={{
            animation: `snow 11s linear infinite`,
            animationDelay: delays[index],
            gridColumn: i.gridColumn,
            zIndex: i.zIndex
          }}
        ></div>
      ))}
    </div>
  );
};

export default Sky;
