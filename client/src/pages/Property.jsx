import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useGetPropertyIdQuery } from "../Api/Api";
import Loading from "../components/Loading";
import axios from "axios";

const Property = () => {
  const param = useParams();
  // const { data, isLoading } = useGetPropertyIdQuery(param.id);
  // const property = data;
  const id = param.id;
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(property);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(property?.description);
  const handleClick = (i) => {
    setShow(true);
    setIndex(i);
  };

  const imageLength = property?.image?.length - 1;

  const HandleSlide = (direction) => {
    let slide;
    if (direction === "l") {
      slide = index === 0 ? imageLength : index - 1;
    } else {
      slide = index === imageLength ? 0 : index + 1;
    }
    setIndex(slide);
  };
  const handleClose = (i) => {
    setShow(false);
  };

  const fetchData = async () => {
    const res = await axios.get(`/api/property/estate/${id}`);
    setProperty(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  console.log(property);
  return (
    <div className="mx-auto relative">
      {/* {isLoading && <Loading />} */}
      <div
        className={
          show
            ? " mb-4  bg-black  -top-2 mt-2 fixed w-full flex justify-center items-center h-[100vh] opacity-95 z-40"
            : "hidden"
        }
      >
        <div className="fixed right-3 top-24">
          <MdIcons.MdClose
            size={30}
            strokeWidth={2}
            onClick={handleClose}
            className=" cursor-pointer"
          />
        </div>
        <img
          src={property?.image && property?.image[index].url}
          alt=""
          className="max-w-2xl h-[64vh] object-center "
        />
        <div className="flex absolute justify-between w-4/6 ">
          <FaIcons.FaArrowAltCircleLeft
            size={30}
            color="white"
            className="z-10 cursor-pointer"
            onClick={() => HandleSlide("l")}
          />
          <FaIcons.FaArrowAltCircleRight
            size={30}
            color="white"
            className="z-10 cursor-pointer"
            onClick={() => HandleSlide("r")}
          />
          {/* <FaIcons.FaCircle size={20} color="red" className="z-10" />
          <FaIcons.FaCircle size={20} color="red" className="z-10" />
          <FaIcons.FaCircle size={20} color="red" className="z-10" /> */}
        </div>
      </div>
      <Container>
        <div className="flex flex-wrap  justify-between gap-4 mt-20">
          <div className="w-[50rem] mx-auto flex flex-col gap-4 text-slate-700 mb-5">
            <div className="flex gap-2 -mt-4 mx-auto">
              {property?.image &&
                property.image.slice(0, 1).map((item, i) => {
                  return (
                    <div className="flex gap-2 justify-center " key={i}>
                      <img
                        className="sm:w-5/6 w-full "
                        src={item.url}
                        alt=""
                        onClick={() => handleClick(i)}
                      />
                    </div>
                  );
                })}{" "}
            </div>
            <h2>{property?.name}</h2>
            {/* <img
              className="w-5/6 "
              src={property?.image && property?.image[0]}
              alt=""
              onClick={() => handleClick()}
            /> */}
            <span className="w-fit bg-green-600 text-white px-2 rounded ">
              {property.propertyStatus}
            </span>
            <strong className="text-xl ">$ {property?.price}</strong>
            <span className="flex gap-1 font-medium">
              <MdIcons.MdLocationPin size={25} color="green" />{" "}
              {property?.address}
            </span>
            {property?.type === "sale" && (
              <Button
                variant="primary"
                className="text-white font-semibold w-fit px-2"
              >
                For Sell
              </Button>
            )}
            {property?.type === "rent" && (
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
                <span className="font-medium">
                  {`${property?.bedroom}bed`}{" "}
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-900">
                <FaIcons.FaBath size={25} color="green" />
                <span className="font-medium">{`${property?.bathroom}bath`}</span>
              </div>
              {property?.packing && (
                <div className="flex items-center gap-1 text-green-900">
                  <FaIcons.FaParking size={25} color="green" />
                  {property?.packing ? (
                    <span className="font-medium">Parking space</span>
                  ) : (
                    <span className="font-medium">No Parking</span>
                  )}
                </div>
              )}
              {property?.furnished && (
                <div className="flex items-center gap-1 text-green-900">
                  <FaIcons.FaChair size={25} color="green" />
                  {property?.furnished ? (
                    <span className="font-medium">Furnished</span>
                  ) : (
                    <span className="font-medium">Unfurnished</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-2xl ">Description </span>
              <span>{property?.description}</span>
            </div>
          </div>
          {/* Agent details */}
          <div className="flex flex-col items-center mx-auto gap-6 ">
            <div className=" w-full sm:w-80 h-96 flex flex-col gap-2 shadow-md py-4 px-4 text-slate-700 mx-auto md:mt-20">
              <img
                src={property?.userId?.picture[0]}
                alt="photo"
                className="w-24 h-24 rounded-full object-center self-center mb-3  "
              />
              <span className="font-bold text-nowrap self-center capitalize">
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

              <Link
                className="text-center mt-2 hover:text-blue-800"
                to={`/property/agent/${property?.userId?._id}`}
              >
                <span className="flex gap-1 line-clamp-1">
                  More properties from{" "}
                  <span className=" capitalize">{`${property?.userId?.username}`}</span>
                </span>
              </Link>
            </div>
            {/* Message Form */}
            <div className="w-80 h-96 flex flex-col gap-2 shadow-md py-4 px-4 text-slate-700 mx-auto md:mt-20">
              <input
                type="text"
                placeholder="Name "
                className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
              />
              <input
                type="text"
                placeholder="Phone "
                className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
              />
              <input
                type="text"
                placeholder="Email "
                className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border  "
              />
              <textarea
                name=""
                id=""
                cols="50"
                rows="20"
                placeholder="message"
                value={message}
                className=" rounded-lg focus:outline-none text-slate-700 font-medium border h-[100px] px-2 "
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className="flex  gap-2 m mt-2">
                <Button className="w-32 h-10">
                  <span className="flex items-center gap-2">
                    <FaIcons.FaMailBulk size={25} />
                    <Link
                      to={`mailto:${property?.userId?.email}?subject=Regarding to ${property?.name}&body=${message}`}
                    >
                      Equire
                    </Link>
                  </span>
                </Button>
                <Button variant="success" className="w-32 h-10">
                  <span className="flex items-center gap-2">
                    <FaIcons.FaWhatsapp size={25} />
                    Whatsapp
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Property;
