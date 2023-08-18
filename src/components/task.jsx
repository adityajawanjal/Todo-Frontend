"use client";

import { useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = async () => {
    const res = await fetch('pages/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `Test`,
        desc: `test`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className=" flex flex-col justify-center m-8">
      <h2 className=" text-amber-700 text-center text-4xl font-bold">
        Add New Task
      </h2>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter Title..."
        className=" w-96 mt-10 h-14 text-md px-2 py-1 border-red-500 border-2 outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="5"
        placeholder="Enter Description..."
        className="px-2 py-1 border-red-500 border-2 outline-none mt-5"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="mt-5 bg-green-300 hover:bg-slate-200 hover:cursor-pointer h-10"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
};
export default AddTask;
