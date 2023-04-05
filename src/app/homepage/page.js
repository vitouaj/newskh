"use client";

import { Navbar, Footer } from "../utils/navbar";
import React from "react";
import NewsCard from "../utils/newsCard";
import axios from "axios";

import fetchNews from "../helper/fetch";

export default function Home() {
  const [data, setData] = React.useState([]);

  function fetchFunc() {
    axios
      .get("http://localhost:8080/api/v1/admin/published", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("authorization"),
        },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  React.useEffect(() => {
    fetchNews("/homepage")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <body className="mx-auto w-4/5">
      <Navbar name="HomePage" />

      <div className="grid grid-cols-3 gap-10">
        {data.map((dt) => {
          return <NewsCard key={dt.id} data={dt} />;
        })}
      </div>

      <Footer />
    </body>
  );
}
