"use client";

import axios from "axios";
import React from "react";
import { Navbar } from "../../utils/navbar";

export default function CreateNews() {
  const [type, setType] = React.useState("");
  const [content, setContent] = React.useState("");
  const [urlList, setUrlList] = React.useState([]);
  const [url, setUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [tbn, setTbn] = React.useState("");

  const [success, setSuccess] = React.useState(false);

  const clearForm = () => {
    setContent("");
    setTbn("");
    setTitle("");
    setUrl("");
    setType("");
  };

  const data = {
    type: type,
    title: title,
    content: content,
    image_url: urlList.filter((url) => url !== ""),
    thumbnail: tbn,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios({
      url: "http://localhost:8080/api/v1/admin/publish",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authorization"),
      },
      data: data,
    })
      .then((res) => {
        clearForm();
        setSuccess(true);
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
    <div className="w-3/4 mx-auto">
      <Navbar />
      <button className="bg-yellow-500 text-white px-3 py-1 hover:bg-yellow-400 mb-10">
        <a href="/admin">Back</a>
      </button>
      {success && (
        <p className="text-red-500 p-4">news successfully created...</p>
      )}
      <div class="mx-auto w-full mb-20">
        <table class="w-full">
          <tr class="pb-6 h-12">
            <th class="w-1/3 align-top">
              <p class="text-right mr-6">Type:</p>
            </th>
            <th class="w-full align-top h-full flex justify-between">
              <div class="align-top">
                <input
                  class=""
                  type="radio"
                  name="new_type"
                  id="1"
                  value="LOCAL"
                  onChange={(e) => setType(e.target.value)}
                />
                <label class="" for="1">
                  Local
                </label>
              </div>
              <div class="align-top">
                <input
                  class=""
                  type="radio"
                  name="new_type"
                  id="2"
                  value="INTERNATIONAL"
                  onChange={(e) => setType(e.target.value)}
                />
                <label class="" for="2">
                  International
                </label>
              </div>
              <div class="align-top">
                <input
                  class=""
                  type="radio"
                  name="new_type"
                  id="3"
                  value="SPORT"
                  onChange={(e) => setType(e.target.value)}
                />
                <label class="" for="3">
                  Sport
                </label>
              </div>
              <div class="align-top">
                <input
                  class=""
                  type="radio"
                  name="new_type"
                  id="4"
                  value="HEALTH"
                  onChange={(e) => setType(e.target.value)}
                />
                <label class="" for="4">
                  Health
                </label>
              </div>
            </th>
          </tr>

          <tr class="pb-6 h-48">
            <th class="w-1/3 align-top">
              <p class="text-right mr-6">Title:</p>
            </th>
            <th class="w-2/3 align-top h-full">
              <textarea
                onChange={(e) => setTitle(e.target.value)}
                class="border-2 border-black-500 resize-y w-full h-48"
              ></textarea>
            </th>
          </tr>

          <tr>
            <th class="w-1/3 align-top">
              <p class="text-right mr-6">Content:</p>
            </th>
            <th class="w-2/3 align-top h-full">
              <textarea
                onChange={(e) => setContent(e.target.value)}
                class="border-2 border-black-500 resize-y w-full h-48"
              ></textarea>
            </th>
          </tr>

          <tr class="pb-6 h-12">
            <th class="w-1/3 align-top">
              <p class="text-right mr-6">Thumbnail:</p>
            </th>
            <th class="w-2/3 align-top h-full">
              <input
                onChange={(e) => setTbn(e.target.value)}
                class="border-2 border-black-500 resize-y w-full"
              ></input>
            </th>
          </tr>

          <tr class="pb-6 h-12">
            <th class="w-1/3 align-top">
              <p class="text-right mr-6">Image Url:</p>
            </th>
            <th class="w-2/3 align-top h-full">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                class="border-2 border-black-500 resize-y w-full"
              ></input>
            </th>
          </tr>


          

          <tr class="pb-6 h-24 ">
            <th class="w-1/3 align-top">
              {urlList.map((u) => {
                return (
                  <p key={u} class="text-right mr-6">
                    {u}
                  </p>
                );
              })}
            </th>
            <th class="w-2/3 align-top h-full text-right">
              <button
                onClick={() => {
                  setUrl("");
                  urlList.filter((e) => e !== "");
                  setUrlList([...urlList, url]);
                }}
                class="px-4 border-2 border-yellow-500 text-yellow-500 hover:border-yellow-200 hover:text-yellow-200 "
              >
                Add
              </button>
            </th>
          </tr>

          <tr class=" pb-6 h-20">
            <th class="w-1/3 align-top">
              <p class="text-right mr-6"></p>
            </th>
            <th class="w-2/3 align-top h-full text-right">
              <button
                onClick={onSubmitHandler}
                class="px-4 border-2 border-green-500 text-green-500 hover:border-green-200 hover:text-green-200"
              >
                Publish
              </button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
}
