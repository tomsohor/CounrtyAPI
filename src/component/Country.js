import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Country = ({ darkC }) => {
  const [c_info, setC_info] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setC_info(data);
      });
  }, []);

  return (
    <div className="countries">
      {c_info &&
        c_info.map((c) => {
          return (
            <div className={`country${darkC}`} key={c.name}>
              <div className="flag">
                <img src={c.flag} alt="country_flag" />
              </div>
              <div className="subdetails">
                <h2 className="name">{c.name}</h2>
                <p className="popu ">
                  Population: <span>{c.population}</span>
                </p>
                <p className="region">
                  Regoin: <span>{c.region}</span>
                </p>
                <p className="capital">
                  Capital: <span>{c.capital}</span>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Country;
