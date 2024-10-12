import React, { useEffect, useState } from "react";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";
import userimg from "../assets/users.jpeg";
import { Button, Container } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetPropertyIdQuery } from "../Api/Api";

const Property = () => {
  const param = useParams();
  const { data } = useGetPropertyIdQuery(param.id);
  console.log(data);
  const property = data;

  const [index, setIndex] = useState(0);
  console.log(index);
  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-col mb-4 relative">
        <img
          src={property?.image && property?.image[index]}
          alt=""
          className="h-[60vh]"
        />
        {/* <div className="flex absolute bottom-5 left-[50%]">
          <FaIcons.FaCircle size={20} color="red" className="z-10" />
          <FaIcons.FaCircle size={20} color="red" className="z-10" />
          <FaIcons.FaCircle size={20} color="red" className="z-10" />
          <FaIcons.FaCircle size={20} color="red" className="z-10" />
          <FaIcons.FaCircle size={20} color="red" className="z-10" />
        </div> */}
      </div>
      <Container>
        <div className="flex flex-wrap  justify-between gap-4 ">
          <div className="w-[50rem] mx-auto flex flex-col gap-4 text-slate-700 mb-5">
            <div className="flex gap-2 -mt-4 mx-auto">
              {property?.image &&
                property.image.map((item, i) => {
                  return (
                    <div className="flex gap-2 justify-center ">
                      <img
                        className="w-12 h-12 "
                        src={item}
                        alt=""
                        onClick={() => handleClick(i)}
                      />
                    </div>
                  );
                })}{" "}
            </div>

            <div className="flex items-center gap-1 ">
              <h2>{property?.name}</h2>
              <b className="text-3xl ">-</b>
              <strong className="text-xl ">$ {property?.price}</strong>
            </div>
            <span className="flex gap-1 font-medium">
              <MdIcons.MdLocationPin size={25} color="green" />{" "}
              {property?.address}
            </span>
            {property?.type === "sale" ? (
              <Button
                variant="primary"
                className="text-white font-semibold w-fit px-2"
              >
                For Sell
              </Button>
            ) : (
              <Button
                variant="danger"
                className="text-white font-semibold w-fit px-2"
              >
                For Rent
              </Button>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-green-900">
                <FaIcons.FaBed size={25} color="green" />
                <span className="font-medium">{property?.bedroom} bed</span>
              </div>
              <div className="flex items-center gap-1 text-green-900">
                <FaIcons.FaBath size={25} color="green" />
                <span className="font-medium">{property?.bathroom} bath</span>
              </div>
              <div className="flex items-center gap-1 text-green-900">
                <FaIcons.FaParking size={25} color="green" />
                {property?.packing ? (
                  <span className="font-medium">Parking space</span>
                ) : (
                  <span className="font-medium">No Parking</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-green-900">
                <FaIcons.FaChair size={25} color="green" />
                {property?.furnished ? (
                  <span className="font-medium">Furnished</span>
                ) : (
                  <span className="font-medium">Unfurnished</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-2xl ">Description </span>
              <span>{property?.description}</span>
            </div>
          </div>
          {/* Agent details */}
          <div className="w-80 h-96 flex flex-col gap-2 shadow-md py-4 px-4 text-slate-700 mx-auto md:mt-20">
            <img
              src={userimg}
              alt=""
              className="w-24 h-24 rounded-full object-center self-center mb-3  "
            />
            <span className="font-semibold text-nowrap self-center">
              {property?.userId?.username}
            </span>
            <span className="font-medium flex justify-between items-center  ">
              <MdIcons.MdLocationOn size={20} /> city
            </span>
            <span className="font-medium flex justify-between items-center  ">
              <MdIcons.MdPhone size={20} /> {property?.userId?.mobile}
            </span>
            <span className="font-medium flex justify-between items-center ">
              <MdIcons.MdEmail size={20} /> {property?.userId?.email}
            </span>
            {/* <span className="font-medium flex justify-between items-center   ">
              Blair Owens
            </span> */}
            <div className="flex items-center gap-2 mx-auto mt-2">
              <div className="border p-2">
                <FaIcons.FaTwitter size={30} />
              </div>
              <div className="border p-2">
                {" "}
                <FaIcons.FaFacebook size={30} />
              </div>
              <div className="border p-2">
                {" "}
                <FaIcons.FaInstagram size={30} />
              </div>
              <div className="border p-2">
                {" "}
                <FaIcons.FaLinkedin size={30} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Property;
