import React from "react";
import { Button } from "react-bootstrap";

const AddProperty = () => {
  return (
    <div className="text-slate-700 flex mt-10  ">
      <div className="w-4/5   mx-auto">
        <form
          action=""
          className="flex flex-col gap-3 mx-auto w-max md:w-[40rem] shadow-md p-4"
        >
          <input
            type="text"
            placeholder="Name "
            id="name"
            // value={searchForm.search}
            // onChange={HandleInput}
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          />
          {/* address
price
discountPrice */}
          <input
            type="number"
            placeholder="Price "
            id="price"
            // value={searchForm.search}
            // onChange={HandleInput}
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          />

          <select
            name=""
            id="propertyType"
            className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
            // onChange={HandleInput}
          >
            <option value="">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Property Type">Property Type</option>
            <option value="Property Type">Property Type</option>
          </select>
          <select
            name=""
            id="bedroom"
            // onChange={HandleInput}
            className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
          >
            <option value={0}>Bedroom</option>;<option value={1}>{1}</option>;
            <option value={2}>{2}</option>;<option value={3}>{3}</option>;
            <option value={4}>{4}</option>;<option value={5}>{5}</option>;
          </select>
          <select
            name=""
            id="bathroom"
            // onChange={HandleInput}
            className="p-2 rounded-lg text-slate-700 font-medium focus:outline-none capitalize border "
          >
            <option value={0}> Bathroom</option>;<option value={1}>{1}</option>;
            <option value={2}>{2}</option>;<option value={3}>{3}</option>;
            <option value={4}>{4}</option>;<option value={5}>{5}</option>;
          </select>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="descriptions"
            className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
          ></textarea>

          <div className="flex w-full gap-2 items-center">
            <label htmlFor=""></label>
            <input
              type="file"
              id="file"
              multiple={true}
              // value={searchForm.search}
              // onChange={HandleInput}
              className="p-2 rounded-lg focus:outline-none text-slate-700 font-medium border w-full  "
            />
            <Button>Upload</Button>
          </div>
          <div className="flex flex-wrap">
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="rent"
                className="w-5 h-5"
                // checked={searchForm.type === "rent"}
                // onChange={HandleInput}
              />
              <span className="font-semibold ">Rent</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="sale"
                className="w-5 h-5"
                // checked={searchForm.type === "sale"}
                // onChange={HandleInput}
              />
              <span className="font-semibold ">Sale</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="furnished"
                className="w-5 h-5"
                // checked={searchForm.furnished}
                // onChange={HandleInput}
              />
              <span className="font-semibold ">Furnished</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="offer"
                className="w-5 h-5"
                // checked={searchForm.offer}
                // onChange={HandleInput}
              />
              <span className="font-semibold ">Offer</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="parking"
                className="w-5 h-5"
                // checked={searchForm.parking}
                // onChange={HandleInput}
              />
              <span className="font-semibold ">Parking</span>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                name=""
                id="pool"
                className="w-5 h-5"
                // checked={searchForm.pool}
                // onChange={HandleInput}
              />
              <span className="font-semibold ">Pool</span>
            </div>
          </div>

          <Button>Create</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
