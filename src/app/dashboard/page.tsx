"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import NavLink from "../components/NavLink";
import RootLayout from "../layout";
import axios from "axios";

const page = () => {
  const [title, setTitle] = useState<string>("");
  const [data, setData] = useState([]);
  const submit = async (e) => {
    e.preventDefault();
    const send_todo = await axios.post("http://localhost:3000/api/todos", {
      title: title,
    });
    console.log(send_todo);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/todos");
      setData(response.data);
    };
    fetch();
  }, []);
  return (
    <>
      <NavLink />
      <div className="max-w-xl mx-auto mt-10">
        <p className="p-0 m-0 font-semibold text-center">
          Silahkan mengisi kegiatan anda !
        </p>
        <form
          className=" bg-gray-100 p-2 rounded-full flex mt-2"
          onSubmit={submit}
        >
          <Input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button title="Save" type="submit" />
        </form>
        <div className="mt-10">
          {data.map((item) => (
            <div className="shadow-md rounded-md w-full p-2 flex justify-between">
              <p>{item.title}</p>
              <span>{item.status == 1 ? "Active" : "Done"}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
