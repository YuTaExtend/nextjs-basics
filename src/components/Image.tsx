import NextImage from "next/image";

const customLoader = ({ src }: any) => {
  return src;
};
const Image = ({ ...props }: any) => {
  return <NextImage {...props} loader={customLoader} />;
};

export default Image;
