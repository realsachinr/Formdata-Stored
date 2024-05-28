import { useEffect, useState } from "react";

function Home({addData}) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    author: "",
  });

  // console.log(formDataArray);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
  // }, [formDataArray]);

  // console.log(localStorage);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData) {
      addData(formData);
      setFormData({ title: "", price: "", description: "", author: "" });
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
  //   console.log(formDataArray);
  // }, [formDataArray]);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-slate-400 ">
      <div className="flex max-w-[1400px] justify-between items-center">
        <div className=" flex justify-center  items-center">
          <div className="flex mx-8 flex-col justify-start items-start">
            <h1 className="font-bold text-[28px]  ">CheckOut</h1>
            <form onSubmit={submitHandler} className="flex   flex-col ">
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="title">Title</label>
                <input
                  className="border px-2 h-[2rem] w-[20rem] border-black rounded-lg"
                  type="text"
                  value={formData.title}
                  name="title"
                  placeholder="Enter Your Title"
                  onChange={changeHandler}
                  id="title"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="author">Author</label>
                <input
                  className="border px-2 h-[2rem] w-[20rem] border-black rounded-lg"
                  type="text"
                  value={formData.author}
                  name="author"
                  placeholder="Enter Author"
                  onChange={changeHandler}
                  id="author"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="description">Description</label>
                <input
                  className="border px-2 h-[2rem] w-[20rem] border-black rounded-lg"
                  type="text"
                  value={formData.description}
                  name="description"
                  placeholder="Enter Your Description"
                  onChange={changeHandler}
                  id="description"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="price">Price</label>
                <input
                  className="border px-2 h-[2rem] w-[20rem] border-black rounded-lg"
                  type="text"
                  placeholder="Enter Your Price"
                  name="price"
                  onChange={changeHandler}
                  value={formData.price}
                  id="price"
                />
              </div>
              <div>
                <button className="justify-start items-start w-[200px] h-[2rem] mt-7 hover:bg-white  rounded-lg  bg-slate-600">
                  Submit
                </button>
              </div>
            </form>

           
          </div>
        </div>
        <div>
          <img
            className="w-[30rem] "
            src="./2685923_391278-PCI1QE-43.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
