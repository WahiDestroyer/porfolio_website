import React from 'react'
import Process from '../Utility/Process'
import { CgNotes } from 'react-icons/cg'
import { IoMdAnalytics } from 'react-icons/io'
import { TbPencil } from 'react-icons/tb'
import { LiaLaptopSolid } from 'react-icons/lia'

const Work = () => {
  return (
    <section className="bg-[#F0F1F3]">
      <div className="container pt-62 flex justify-between pb-35">
        <div className="max-w-lg my-auto">
          <h2 className="font-semibold text-5xl font-sans text-primary leading-14 pb-6">
            Work Process
          </h2>
          <p className="text-[#697484] font-sans font-normal text-base leading-6 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className="text-[#697484] font-sans font-normal text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 ">
          <Process
            icon={<CgNotes />}
            title="1. Research"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
          />
          <div className='mt-8'>
            <Process
              icon={<IoMdAnalytics />}
              title="2. Analyze"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
          </div>
          <Process
            icon={<TbPencil />}
            title="3. Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
          />

          <Process
            icon={<LiaLaptopSolid />}
            title="4. Launch"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
          />
        </div>
      </div>
    </section>
  );
}

export default Work
