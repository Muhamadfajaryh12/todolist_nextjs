"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import NavLink from "../components/NavLink";

import axios from "axios";
import { TodosType } from "../types/todos";
import Todos from "../components/Todos";

const page = () => {
  const [title, setTitle] = useState<string>("");
  const [data, setData] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const send_todo = await axios.post("http://localhost:3000/api/todos", {
      title: title,
    });
    console.log(send_todo);
    fetch();
  };

  const fetch = async () => {
    const response = await axios.get("http://localhost:3000/api/todos");
    setData(response.data);
  };

  const update = async (id: number) => {
    const response = await axios.put(`http://localhost:3000/api/todos/${id}`);
    console.log(response);
  };

  const deleteHandle = async (id: number) => {
    const response = await axios.delete(
      `http://localhost:3000/api/todos/${id}`
    );
    console.log(response);
  };
  useEffect(() => {
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
          <Button title="Save" type="submit" className="bg-orange-300" />
        </form>
        <div className="mt-10">
          {data?.map((item: TodosType) => (
            <Todos
              title={item.title}
              key={item.id}
              status={item.status}
              handlePUT={() => update(item.id)}
              handleDelete={() => deleteHandle(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
