import React, { useEffect, useState } from "react";

import * as MdIcons from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetPropertyQuery } from "../Api/Api";
const Properties = () => {
  const { data, error, isLoading } = useGetPropertyQuery();
  const [property, setProperty] = useState([]);
  console.log(property);
  useEffect(() => {
    setProperty(data);
  }, [data]);
  return (
    <div>
      {" "}
      <div className="text-slate-800 text-center flex flex-col justify-center ml-9 md:ml-0 mb-16 mt-5">
        {/* <h1 className="mb-5">Feature home</h1> */}
        <div className="flex flex-wrap gap-4 ">
          {property &&
            property.map((items, i) => {
              return (
                <div
                  key={i}
                  className="w-44 md:w-60  flex flex-col border  items-start md:items-center mx-auto  overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/property-details/${items._id}`}>
                      <img
                        src={items.image[0]}
                        alt=""
                        className="w-60 md hover:scale-150 transition-scale duration-300"
                      />
                    </Link>
                    <div className="absolute top-2 right-2">
                      {items.type === "sale" ? (
                        <span className="bg-blue-500 text-white px-2 rounded ">
                          Sale
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white px-2 rounded ">
                          Rent
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-1 p-3">
                    <div className="flex flex-col mb-3 items-start">
                      <span className="font-semibold text-xl mb-2">
                        {`${items.name.slice(30)}...`}
                        {/* {items.name.toString(20)} */}
                      </span>
                      <span className="text-sm flex gap-2 items-center">
                        <MdIcons.MdLocationOn color="green" />
                        {items.address}{" "}
                      </span>
                    </div>

                    <div className="md:w-52 flex flex-wrap justify-between">
                      <span>{`${items.bedroom} bedroom`}</span>
                      <span>{`${items.bathroom} bathroom`}</span>
                    </div>
                    <Button>${items.price}</Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
