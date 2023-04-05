"use client";

import React from "react";
import axios from "axios";
import AdminCard from "./adminCard";
import UpdateNews from "./updatePanel";

export default function AdminPanel(props) {
  const [array, setArray] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const [updatePanelAlive, setUpdatePanelAlive] = React.useState(false);

  const [id, setId] = React.useState(null);

  const fetch = () => {
    axios
      .get("http://localhost:8080/api/v1/admin/published", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authorization"),
        },
      })
      .then((res) => {
        let temp = res.data;
        setArray(temp);
      })
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    fetch();
  }, [update]);
  return (
    <div className="">
      <div className="flex justify-between w-1/2 mx-auto">
        <button className="bg-green-500 rounded px-1 text-white mx-2">
          <a href="/admin/create">Create News</a>
        </button>
        <button
          onClick={fetch}
          className="bg-green-500 rounded p-1 text-white mx-2"
        >
          Refresh
        </button>
        <button className="bg-yellow-500 rounded px-1 text-white mx-2">
          <a href="/homepage">Homepage</a>
        </button>
      </div>

      {updatePanelAlive && (
        <div className="mr-4">
          <UpdateNews
            id={id}
            setUpdatePanelAlive={setUpdatePanelAlive}
            updatePanelAlive={updatePanelAlive}
          />
        </div>
      )}

      <div className="mx-4 my-6">
        {array.map((news) => {
          return (
            <AdminCard
              key={news.news_id}
              data={news}
              setUpdate={setUpdate}
              update={update}
              setUpdatePanelAlive={setUpdatePanelAlive}
              updatePanelAlive={updatePanelAlive}
              setId={setId}
            />
          );
        })}
      </div>
    </div>
  );
}
