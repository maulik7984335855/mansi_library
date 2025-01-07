import React, { useState } from "react";
import { books } from "./books.js";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";
import { motion } from "motion/react";

const Store = () => {
  // console.log(books);
  const dispatch = useDispatch();

  const [filteredCategory, setFilteredCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      filteredCategory === "All" || book.category === filteredCategory;
    const matchesSearch = book.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <>
      <div className="pt-20 pb-12 px-4 w-full flex lg:flex-row flex-col">
        <div className="lg:w-1/6 w-full ">
          <span className="underline font-medium text-xl">Categories</span>
          <ul className="flex lg:flex-col flex-row flex-wrap mt-4 items-start gap-3 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("All")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              All
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("sport")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              Sport
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("cartoon")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              Cartoon
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("motivation")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              Motivation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("dreams")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              Dreams
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("health")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              Health
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("python")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              Python
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilteredCategory("java")}
              className="bg-blue-500 w-[100px] text-white p-2 rounded-lg"
            >
              Java
            </motion.button>
          </ul>
        </div>
        <div className="lg:w-5/6 lg:mt-0 mt-5 w-full">
          <input
            type="text"
            className="lg:w-[450px] w-[90%] px-3 py-2 bg-white text-black border border-blue-500 rounded-md outline-none"
            placeholder="Search book by name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="flex flex-wrap mt-4 items-center gap-3 justify-center">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div key={book?.id}>
                  <div className="slide bg-blue-300 lg:w-auto w-[270px] rounded-xl flex items-center flex-col pt-3 ">
                    <div className="w-fit p-2 rounded-full">
                      <img
                        src={book.img_url}
                        alt="image"
                        className="w-20 h-[150px]"
                      />
                    </div>
                    <div className="bg-white lg:w-auto w-[200px] m-1 mt-5 rounded-xl p-4">
                      <div className="flex justify-between gap-4">
                        <h2 className="font-medium text-[18px]">
                          {book?.name}
                        </h2>
                        <span className="text-blue-500">₹{book.price}</span>
                      </div>
                      <h3 className="font-normal text-[14px]">
                        {book.description}
                      </h3>
                      <button
                        onClick={() => handleAddToCart(book)}
                        className="mt-4 p-2 text-[15px] rounded-xl border border-blue-400"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No books found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
