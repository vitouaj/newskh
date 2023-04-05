import { Navbar } from "../utils/navbar";

export default function About() {
  const book = {
    title: "titanic",
    year: "2001",
  };

  return (
    <>
      <Navbar />
      <h1>This is about page</h1>
    </>
  );
}
