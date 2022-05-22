import type { NextPage } from "next";
import Link from "next/link";
import Image from "../components/Image";

const Home: NextPage = () => {
  return (
    <>
      <h2>hello world!!</h2>
      <Link href="/about">
        <a>About Pageへのリンク</a>
      </Link>
      <Image
        src="/sample.jpg"
        width={400}
        height={300}
        objectFit="contain"
        alt="sample"
      />
    </>
  );
};

export default Home;
