import React, { useEffect, useState } from "react";

import * as MdIcons from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetPropertyQuery } from "../Api/Api";
import Loading from "./Loading";
const Feature = () => {
  const { data, error, isLoading } = useGetPropertyQuery();
  const [property, setProperty] = useState([]);
  console.log(property);
  useEffect(() => {
    setProperty(data);
  }, [data]);

  return (
    <>
      {" "}
      {isLoading && <Loading />}
      <div className="text-slate-800  flex flex-col justify-center ml-9 md:ml-0 mb-16 ">
        <h1 className="mb-5">Feature home</h1>
        <div className="flex flex-wrap gap-4 ">
          {property &&
            property.slice(0, 6).map((items, i) => {
              return (
                <div
                  key={i}
                  className="w-44 md:w-96  flex flex-col border  items-start md:items-center mx-auto  overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/property-details/${items._id}`}>
                      <img
                        src={items.image[0]}
                        alt=""
                        className="w-96 md hover:scale-150 transition-scale duration-300"
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
                  <div className="flex flex-col items-start w-full gap-1 p-3">
                    <span className="font-semibold text-xl mb-1  line-clamp-1">
                      {items.name}
                    </span>
                    <span className="text-sm flex gap-2 items-center">
                      <MdIcons.MdLocationOn color="green" />
                      {items.address}{" "}
                    </span>{" "}
                    <span className="font-semibold text-md text-uppercase">
                      {items.propertyType}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>{" "}
    </>
  );
};

export default Feature;
