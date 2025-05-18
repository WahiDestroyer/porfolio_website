import BtnThird from './BtnThird'

const PortPart = ({image, title}) => {
  return (
    <div className="bg-white rounded-lg max-w-fit saya hover:scale-105 overflow-hidden transition-all duration-800">
      <img src={image} alt="Porfolio" />
      <div className='p-8'>
        <small className="font-sans font-medium text-xs text-li-gray">
          UI-UX DESIGN
        </small>
        <h3 className="font-sans font-semibold text-lg leading-6 text-primary pt-1 pb-3">
          {title}
        </h3>
        <p className="font-sans font-normal text-sm text-secondary leading-5 pb-5">
          Vivamus eleifend convallis ante, non pharetra libero<br/> molestie laoreet.
          Donec id imperdiet lacus.
        </p>
        <BtnThird path="/" btnName="Case Study"/>
      </div>
    </div>
  );
}

export default PortPart
