import { Link } from "react-router";

const BtnPrimary = ({ path, title, icon }) => {
  return (
    <Link
      to={path}
      className="flex w-fit items-center gap-2 py-3 px-6 bg-pink font-semibold font-sans text-white text-base rounded-sm hover:bg-black transition-all duration-300"
    >
      {title}
      {icon}
    </Link>
  );
};

export default BtnPrimary;
