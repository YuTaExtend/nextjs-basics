import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <h2>About Page!!</h2>
      <Link href="/">
        <a>Home Pageへのリンク</a>
      </Link>
    </>
  );
};

export default About;
