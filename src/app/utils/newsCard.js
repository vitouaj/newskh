import React from "react";
import { dateToStringConverter } from "../helper/fetch";
import Link from "next/link";

export default function NewsCard(props) {
  props = props.data;

  const href = "/details/news/" + props.new_id;
  const [date, time] = dateToStringConverter(props.date);

  return (
    <div className="flex justify-center cursor-pointer">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <Link href={href} data-te-ripple-init data-te-ripple-color="light">
          <img className="rounded-t-lg" src={props.image_url[0]} alt="" />
        </Link>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.title}
          </h5>
          <p className="text-sm text-neutral-600">{date}</p>
          <p className="mb-4 text-sm text-base text-neutral-600 dark:text-neutral-200">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}
