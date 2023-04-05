import axios from "axios";
import React from "react";

export default function AdminCard({
  data,
  setUpdate,
  update,
  setUpdatePanelAlive,
  updatePanelAlive,
  setId,
}) {
  const deleteNews = (id) => {
    axios
      .delete("http://localhost:8080/api/v1/admin/delete/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authorization"),
        },
      })
      .then((res) => {
        setUpdate(!update);
        console.log(res);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={data.image_url[0]}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.type}
            </h5>
            <div className="flex">
              <button
                onClick={() => deleteNews(data.new_id)}
                className="border-2 hover:bg-red-300 px-2 text-sm p-0 text-red-500 mx-2"
              >
                Delete
              </button>
              <button
                className="border-2 px-2 text-sm p-0 text-green-500 mx-2 hover:bg-green-300"
                onClick={() => {
                  setId(data.new_id);
                  setUpdatePanelAlive(!updatePanelAlive);
                }}
              >
                Update
              </button>
            </div>
          </div>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.title}
          </p>
        </div>
      </a>
    </div>
  );
}
