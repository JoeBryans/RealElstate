import { Link } from "react-router-dom";
import { useGetPropertyQuery } from "../Api/Api";
import Loading from "../components/Loading";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Buy = () => {
  const [show, setShow] = useState(false);
  const [property, setProperty] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(12);
  const { data, isLoading, error } = useGetPropertyQuery();
  const Buy = data && data.filter((items) => items.type === "sale");

  useEffect(() => {
    setProperty(Buy);
  }, [data]);

  const lastIndex = currentpage * page;
  const firstIndex = lastIndex - page;
  const currentListen = property?.slice(firstIndex, lastIndex);
  const totalListen = property?.length;

  let pages = [];
  for (let index = 1; index <= Math.ceil(totalListen / page); index++) {
    pages.push(index);
  }

  const HandleButton = () => {
    setShow(true);
  };
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-3  text-slate-700 px-4 sm:px-5 mt-20">
        <div className="hidden lg:inline">
          <SideBar />
        </div>
        <div className=" lg:hidden md:mx-16 -mx-10">
          <div className={show ? "inline " : "hidden"}>
            <SideBar />
          </div>
          <div className="md:mx-10 ">
            <button
              className={
                show
                  ? "hidden"
                  : " p-2 rounded-lg text-white text-center bg-primary hover:opacity-90  w-36 mt-5"
              }
              onClick={HandleButton}
            >
              Filter
            </button>
          </div>
        </div>
        <div className="relative text-slate-700">
          {isLoading && <Loading />}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4 ">
              {currentListen &&
                currentListen.map((items, i) => {
                  return (
                    <div
                      key={i}
                      className="w-44 md:w-60 mx-2 flex flex-col border  items-start md:items-center    overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
                    >
                      <div className="relative overflow-hidden">
                        <Link to={`/property-details/${items._id}`}>
                          <img
                            src={items.image[0].url}
                            alt=""
                            className="w-60 md hover:scale-150 transition-scale duration-300"
                          />
                        </Link>
                        <div className="absolute top-2 left-2 text-center">
                          <span className="bg-yellow-500 text-white px-2 rounded ">
                            Features
                          </span>
                        </div>
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
                        <div className="absolute top-10 left-2">
                          <span className="bg-green-600 text-white px-2 rounded ">
                            {items.propertyStatus}
                          </span>
                        </div>
                        <div className="absolute bottom-1 right-2">
                          <span className="font-semibold text-xl mb-1 p-1 cursor-pointer  line-clamp-1 bg-black opacity-60 ">
                            <FaIcons.FaHeart size={25} color="white" />
                          </span>
                        </div>
                        <div className="absolute bottom-1 left-2">
                          <span className="font-semibold text-xl mb-1 p-1 cursor-pointer  line-clamp-1 text-white ">
                            ${items.price}{" "}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full gap-1 p-3">
                        <Link
                          to={`/property-details/${items._id}`}
                          className="text-slate-700 hover:text-slate-500"
                        >
                          <span className="font-semibold text-xl mb-1  line-clamp-1">
                            {items.name}
                          </span>
                        </Link>
                        <span className="text-sm flex gap-2 items-center">
                          <MdIcons.MdLocationOn color="green" />
                          {items.address}{" "}
                        </span>{" "}
                        <span className="font-semibold text-md text-uppercase">
                          {items.propertyType}
                        </span>
                        <div className="flex justify-between items-center w-full">
                          <small className="flex items-center gap-2">
                            <FaIcons.FaBed color="green" />
                            {items.bedroom}
                          </small>
                          <small className="flex items-center gap-2">
                            <FaIcons.FaBath color="green" />
                            {items.bathroom}
                          </small>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>{" "}
            <div className="flex gap-3 mt-2 mx-10">
              {pages.map((page, i) => {
                return (
                  <Button key={i} onClick={() => setCurrentPage(page)}>
                    {page}
                  </Button>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
