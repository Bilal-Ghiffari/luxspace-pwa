import React from "react";

export default function DetailsCart() {
  return (
    <div className="border-b border-gray-200 mb-4 hidden md:block">
      <div className="flex flex-start items-center pb-2 -mx-4">
        <div className="px-4 flex-none">
          <div className="" style={{ width: "90px" }}>
            <h6>Photo</h6>
          </div>
        </div>
        <div className="px-4 w-5/12">
          <div className="">
            <h6>Product</h6>
          </div>
        </div>
        <div className="px-4 w-5/12">
          <div className="">
            <h6>Price</h6>
          </div>
        </div>
        <div className="px-4 w-2/12">
          <div className="text-center">
            <h6>Action</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
