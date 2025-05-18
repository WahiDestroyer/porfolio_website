import { Link } from "react-router";

const FormPart1 = ({ icon, title, letter }) => {
  return (
    <Link
      to="/"
      className="bg-white p-6 hover:saya transition-all duration-800 group rounded-lg max-w-[336px] flex gap-3"
    >
      <div className="p-3 rounded-md group-hover:bg-pink transition-all duration-800  ">
        <h3 className="w-6 h-6 text-pink group-hover:text-white flex items-center justify-center text-2xl">
          {icon}
        </h3>
      </div>
      <div>
        <p className="font-sans font-normal text-sm text-gray">{title}</p>
        <h5 className="font-sans font-medium text-base text-primary leading-6">
          {letter}
        </h5>
      </div>
    </Link>
  );
};

export default FormPart1;
