import React from 'react'
import SocialSites from '../Utility/SocialSites'
import FormPart1 from '../Utility/FormPart1'
import BtnPrimary from '../Utility/BtnPrimary'
import FormPart2 from '../Utility/FormPart2'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'

const FormV = () => {
  return (
    <section className="translate-y-28 z-10">
      <div className="container flex justify-between rounded-2xl saya p-22">
        <div>
          <h3 className="font-sans font-semibold text-4xl text-primary leading-12 pb-4">
            Let’s discuss your Project
          </h3>
          <p className="font-sans font-normal text-lg text-li-gray leading-6 max-w-[481px]">
            There are many variations of passages of Lorem Ipsu available. but
            the majority have suffered alte.
          </p>
          <div className="py-9 grid grid-rows-3 gap-3">
            <FormPart1
              icon={<IoLocationOutline />}
              title="Address:"
              letter="New Mexico 31134"
            />
            <FormPart1
              icon={<MdOutlineAlternateEmail />}
              title="My Email:"
              letter="mymail@mail.com"
            />
            <FormPart1
              icon={<FaPhone />}
              title="Call Me Now:"
              letter="00-1234 00000"
            />
          </div>
          <SocialSites />
        </div>
        <div className="max-w-[560px]">
          <FormPart2 />
        </div>
      </div>
    </section>
  );
}

export default FormV
