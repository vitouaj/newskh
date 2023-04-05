"use client";

import axios from "axios";
import React from "react";
import { Navbar, Footer } from "../../../utils/navbar";
import { dateToStringConverter } from "../../../helper/fetch";
import Link from "next/link";

export default function DetailPage({ params }) {
  const [data, setData] = React.useState({});
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState([]);

  React.useEffect(() => {
    axios({
      url: "http://localhost:8080/api/v1/news/" + params.news_id,
      method: "get",
    })
      .then((res) => {
        setData(res.data);
        setImageUrl(res.data.image_url);
        const [date, Time] = dateToStringConverter(res.data.date);
        setDate(date);
        setTime(Time);
      })
      .catch((e) => console.error(e));
    console.log(params.news_id);
    console.log(time);
  }, []);

  return (
    <div className="w-4/5 mx-auto text-center text-white">
      <Navbar />
      <div className="w-3/5 mx-auto">
        <div className="flex justify-between">
          <div className="pr-4 my-4 w-1/2 mr-6 flex">
            <Link className="bg-sky-500 w-fit p-3 mr-2" href="www.pornhub.com">
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </Link>
            <Link className="bg-sky-500 w-fit p-3 mx-2" href="">
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
              </svg>
            </Link>
            <Link className="bg-sky-500 w-fit p-3 mx-2" href="">
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </Link>
          </div>
          <div className="p-4 bg-red-500 my-4 w-fit ml-6 text-lg flex items-center">
            {data.type}
          </div>
        </div>
        <div>
          <div className="text-gray-500">
            <div className="text-left text-sm w-1/3 flex justify-between">
              <span>ថ្ងៃ៖ {date}</span>
              <span>ម៉ោង៖ {time}</span>
            </div>
            <p className="text-xl font-bold text-left mt-1 mb-5">
              <span className="text-xl text-red-500">ចំណងជើងមាតិកា៖ </span>
              {data.title}
            </p>
          </div>
          <div>
            {/* we can use looop images */}
            <div className="w-full">
              <img src={data.thumbnail}></img>
            </div>
          </div>

          <div className="text-gray-500 my-6">
            <p className="text-xl font-bold text-left mt-1 mb-5">
              <span className="text-xl text-red-500 font-khmer">មាតិកា៖ </span>
              {data.content}
            </p>
          </div>

          <div>
            {imageUrl.map((url) => {
              return (
                <div className="w-full my-4">
                  <img src={url}></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
