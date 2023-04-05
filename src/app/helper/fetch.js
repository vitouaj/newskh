import axios from "axios";

export default async function fetchNews(url) {
  // url: "/"
  try {
    const result = await axios.get("http://localhost:8080/api/v1" + url);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchNewsAdmin(url) {
  try {
    const result = await axios.get({
      url: "http://localhost:8080/api/v1/admin" + url,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authorization"),
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function dateToStringConverter(str) {
  var iso = new Date(str).toISOString(); // "2023-02-28T18:24:15.111Z"
  var parts = iso.split("T"); // ["2023-02-28", "18:24:15.111Z"]
  var date = parts[0]; // "2023-02-28"
  var time = parts[1].slice(0, 5); // "18:24"
  return [date, time];
}

export function formLogin() {
  axios
    .get("http://localhost:8080/api/v1/admin")
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
}
