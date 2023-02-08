import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiFillMinusCircle, AiOutlineMinus, AiOutlineArrowRight } from "react-icons/ai";
import Header from "../components/Header";
import Button from "../components/UI/Button/Button";

const AddRoute = () => {
  const [selectCount, setSelectCount] = useState(1);
  const [options, setOptions] = useState([
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ]);

  const addSelect = () => {
    setSelectCount(selectCount + 1);
  };

  const removeSelect = () => {
    setSelectCount(selectCount - 1);
  };

  return (
    <>
      <Header category="Page" title="Add Route" />
      <div>
      <div className="m-12">
          <button
            onClick={removeSelect}
            className="rounded-full bg-hover-bg p-1 hover:bg-[#3497c1] mr-2 "
          >
            <AiOutlineMinus className="text-3xl" />
          </button>
          <button
            onClick={addSelect}
            className="rounded-full bg-hover-bg p-1 hover:bg-[#3497c1] mr-2"
          >
            <IoMdAdd className="text-3xl" />
          </button>
        </div>
        <form className="ml-12 flex flex-wrap">
          {Array.from({ length: selectCount }, (_, index) => (
            <>
            <select
              key={index}
              className="rounded-lg text-base md:text-lg px-[5%] py-4 mr-2 mt-2"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div>
            < AiOutlineArrowRight className="relative left-0 top-7 text-md"/>
            </div>
            </>
          ))}
        </form>
      </div>
      <Button
        type="submit"
        className="absolute bottom-0 left-0 m-12"
        onClick={() => apicall({ route: JSON.stringify(route) })}
      >
        Create
      </Button>
    </>
    // <>
    //     <div>
    //       <Header category="Page" title="Add Route" />
    //       <h1 className="pl-12 pt-6 pb-4">Select Route</h1>
    //       <div>
    //         <form className="inline-flex items-center w-1/2 ml-12" onSubmit={handleSubmit}>
    //         <select>
    //     {options.map(option => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </select>
    //         {/* <select className="rounded-lg text-base md:text-lg px-[5%] py-4 mr-12 "
    //         value={inputValue} onChange={handleChange}
    //         >
    //           <option>1</option>
    //           <option>2</option>
    //           <option>3</option>
    //         </select>
    //         <select className="rounded-lg text-base md:text-lg px-[5%] py-4 mr-12 "
    //         value={inputValue} onChange={handleChange}
    //         >
    //           <option>1</option>
    //           <option>2</option>
    //           <option>3</option>
    //         </select>
    //         <select className="rounded-lg text-base md:text-lg px-[5%] py-4 mr-12 "
    //         value={inputValue} onChange={handleChange}
    //         >
    //           <option>1</option>
    //           <option>2</option>
    //           <option>3</option>
    //         </select>
    //         <select className="rounded-lg text-base md:text-lg px-[5%] py-4 mr-12 "
    //         value={inputValue} onChange={handleChange}
    //         >
    //           <option>1</option>
    //           <option>2</option>
    //           <option>3</option>
    //         </select> */}
    //         <button
    //           type="submit"
    //           className="rounded-full bg-hover-bg p-2 hover:bg-[#3497c1] m-2"
    //         >
    //           <AiOutlineMinus className="text-3xl" />
    //         </button>
    //         <button
    //           type="submit"
    //           className="rounded-full bg-hover-bg p-2 hover:bg-[#3497c1] m-2 "
    //         >
    //           <IoMdAdd className="text-3xl" />
    //         </button>
    //         </form>
    //       </div>
    //       <Button
    //           type="submit"
    //           className="absolute bottom-0 left-0 m-12"
    //           onClick={() => apicall({ route: JSON.stringify(route) })}
    //         >
    //           Create
    //         </Button>
    //     </div>
    // </>
  );
};

export default AddRoute;
