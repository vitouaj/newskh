"use client";

import React from "react";
import fetchNews, { fetchNewsAdmin } from "../../helper/fetch";

export default function Test() {
  //   React.useEffect(() => {
  //     fetchNews("/homepage")
  //       .then((res) => console.log(res))
  //       .catch((e) => console.error(e));
  //   }, []);

  React.useEffect(() => {
    fetchNewsAdmin("/published")
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  }, []);

  return <p>hello from test</p>;
}
