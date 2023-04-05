"use client";

import { Navbar, Footer } from "../utils/navbar";
import React from "react";
import NewsCard from "../utils/newsCard";
import fetchNews from "../helper/fetch";

export default function Local() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchNews("/entertainment")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <body className="mx-auto w-4/5">
      <Navbar name="Entertainment" />
      {data.map((dt) => {
        return <NewsCard key={dt.id} data={dt} />;
      })}
      <Footer />
    </body>
  );
}
