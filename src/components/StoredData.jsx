import React from "react";

function StoredData({ data }) {
  return (
    <div className="w-screen h-screen   ">
      <div className="  top-10">
        <div >
          <div className="w-full flex justify-center items-center">
            <h1 className="font-bold text-[28px]">Stored Data</h1>
          </div>
          <div className="w-full  flex  mx-28">
            {
              <div>
                <div className="flex  left-8  flex-col justify-start  items-start">
                  {data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex left-12 flex-col   justify-start  w-[45rem] border-b-2 border-black mt-5 items-start"
                      >
                        <p>Title: {item.title}</p>
                        <p>Author: {item.author}</p>
                        <p>Description: {item.description}</p>
                        <p>Price: {item.price}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            }
          </div>
        </div>
        <div className="fixed top-[10rem] right-20">
          <img className="w-[30rem] " src="./Stored.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default StoredData;
