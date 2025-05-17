import React from 'react'

const BlogPart = ({image}) => {
  return (
      <div className="bg-white saya max-w-[312px] rounded-2xl overflow-hidden">
          <div className='overflow-hidden'>
              
      <img
        src={image}
        alt="Blog"
        className="hover:scale-110 transition-all duration-800"
      />
          </div>
      <div className="p-6">
        <small className="text-li-gray">22 Oct, 2020 / 246 Comments</small>
        <h4 className="text-nav font-medium font-sans text-lg leading-6">
          Lorem ipsum dolor sit consea. Nulla purus arcu
        </h4>
      </div>
    </div>
  );
}

export default BlogPart
