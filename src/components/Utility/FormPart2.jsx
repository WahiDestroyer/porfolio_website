
import { useState } from 'react'
import SubmitBtn from './SubmitBtn'

const FormPart2 = () => {

  let [fullName, setFullName] = useState("")
  let [fullNameErr, setFullNameErr] = useState("")

  const handelSubmit = (e) => {
    e.preventdefault()
    if (!fullName) {
      alert("Name is required!")
    } else {
      alert("submitted");
    }
}
  
  

  return (
    <div>
      <p className="font-sans font-medium text-base leading-6 text-li-gray pb-12">
            There are many variations of passages of Lorem Ipsu available, but
            the majority have suffered alte.
          </p>
          <div>
            <form onSubmit={handelSubmit} className="grid gap-6">
              <input onChange={(e)=>setFullName(e.target.value)}
                type="text"
                placeholder="Name*"
                className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form"
              />
              <input
                type="text"
                placeholder="Location"
                className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="number"
                  placeholder="Budget*"
                  className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form max-w-50"
                />
                <input
                  type="text"
                  placeholder="Subject*"
                  className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form"
                />
              </div>
              <input
                type="text"
                placeholder="Message*"
                className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form"
                  />
                  <SubmitBtn/>
            </form>
          </div>
    </div>
  )
}

export default FormPart2
