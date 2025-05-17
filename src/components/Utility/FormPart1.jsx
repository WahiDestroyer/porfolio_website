
import { Link } from 'react-router'

const FormPart1 = ({icon, title, letter}) => {
  return (
    <div className="bg-white p-6 hover:saya transition-all duration-300 group rounded-lg max-w-[336px] flex gap-3">
      <Link
        to="/"
        className="p-3 rounded-md group-hover:bg-pink transition-all duration-300"
      >
        <h3 className="w-5 h-5 text-pink group-hover:text-white">{icon}</h3>
      </Link>
      <div >
        <p className='font-sans font-normal text-sm text-gray'>{title}</p>
        <h5 className='font-sans font-medium text-base text-primary leading-6'>{letter}</h5>
      </div>
    </div>
  );
} 

export default FormPart1
