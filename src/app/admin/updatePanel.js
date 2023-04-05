"use client";

import axios from "axios";
import React from "react";

export default function UpdateNews({
  id,
  setUpdatePanelAlive,
  updatePanelAlive,
}) {
  const [type, setType] = React.useState("");
  const [content, setContent] = React.useState("");
  const [url, setUrl] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const clear = () => {
    setContent("");
    setType("");
    setUrl([]);
    setThumbnail("");
  };

  const data = {
    type: type,
    title: title,
    content: content,
    image_url: url,
    thumbnail: thumbnail,
  };

  React.useEffect(() => {
    axios({
      url: "http://localhost:8080/api/v1/admin/published/" + id,
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authorization"),
      },
    })
      .then((res) => {
        setContent(res.data.content);
        setType(res.data.type);
        setUrl(res.data.image_url);
        setThumbnail(res.data.thumbnail);
        setTitle(res.data.title);

        console.log(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios({
      url: "http://localhost:8080/api/v1/admin/edit/" + id,
      method: "put",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authorization"),
      },
      data: data,
    })
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setUpdatePanelAlive(!updatePanelAlive);
      })
      .catch((e) => console.error(e));
  };

  const typeList = [
    {
      id: "international",
      value: "INTERNATIONAL",
      content: "International",
    },
    {
      id: "local",
      value: "LOCAL",
      content: "Local",
    },
    {
      id: "sport",
      value: "SPORT",
      content: "Sport",
    },
    {
      id: "health",
      value: "HEALTH",
      content: "Health",
    },
  ];

  return (
    <div className="w-full mr-4 mt-20">
      <button
        className="bg-yellow-500 text-white px-3 py-1 hover:bg-yellow-400 mb-10"
        onClick={clear}
      >
        Clear
      </button>
      {success && (
        <p className="text-red-500 p-4">
          news successfully updated news with the given id...
        </p>
      )}
      <ul class="grid w-full gap-6 md:grid-cols-2">
        {typeList.map((typ) => {
          return (
            <li>
              <input
                onChange={(e) => setType(e.target.value)}
                type="radio"
                id={typ.id}
                name="hosting"
                value={type}
                class="hidden peer"
                required
              />
              <label
                for={typ.id}
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">{typ.content}</div>
                  {/* <div class="w-full">Good for small websites</div> */}
                </div>
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="">
        <div class="justify-center mt-10">
          <div
            class="relative mb-3 xl:w-96 border-2"
            data-te-input-wrapper-init
          >
            <textarea
              class="h-20 peer block min-h-[auto] w-full rounded border-3 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="1"
              value={title}
              rows="3"
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
            <label className="text-sm text-red-500" for="1">
              Title...
            </label>
          </div>
          <div
            class="relative mb-3 xl:w-96 border-2"
            data-te-input-wrapper-init
          >
            <textarea
              class="h-48 peer block min-h-[auto] w-full rounded border-3 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1"
              value={content}
              rows="3"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label
              className="text-sm text-red-500"
              for="exampleFormControlTextarea1"
            >
              Content...
            </label>
          </div>
          <div
            class="relative mb-3 xl:w-96 border-2"
            data-te-input-wrapper-init
          >
            <input
              class="peer block min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea2"
              onChange={(e) => setThumbnail(e.target.value)}
              value={thumbnail}
              rows="3"
            ></input>
            <label
              for="exampleFormControlTextarea2"
              className="text-sm text-red-500"
            >
              Thumbnail...
            </label>
          </div>

          {/* this is urlList , we can't update image_url just yet ;-; */}
          {url.map((url) => {
            return (
              <div
                class="relative mb-3 xl:w-96 border-2"
                data-te-input-wrapper-init
              >
                <input
                  class="peer block min-h-[auto] w-full bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea2"
                  // onChange={(e) => setThumbnail(e.target.value)}
                  value={url}
                  rows="3"
                ></input>
                <label
                  for="exampleFormControlTextarea2"
                  className="text-sm text-red-500"
                >
                  url...
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center mb-3 xl:w-96 mt-6">
        <button
          onClick={onSubmitHandler}
          className="bg-green-500 text-white px-3 py-1 hover:bg-green-400"
        >
          Confirm Update
        </button>
      </div>
    </div>
  );
}
