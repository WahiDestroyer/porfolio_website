import { use, useState } from "react";
import { LiaLocationArrowSolid } from "react-icons/lia"
import { TbArrowBigRightLines } from "react-icons/tb";

const FormPart2 = () => {
  let [fullName, setFullName] = useState("");
  let [fullNameErr, setFullNameErr] = useState("");
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [location, setLocation] = useState("");
  let [locationErr, setLocationErr] = useState("");
  let [Submit, setSubmit] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!fullName) {
      setFullNameErr("Name is required!");
    } else if (!email) {
      setEmailErr("Email is required!");
    } else if (!location) {
      setLocationErr("Location is required!");
    } else {
      setSubmit("Submitted")
      setFullName(""), setEmail(""), setLocation("")
    }
  };

  return (
    <div>
      <p className="font-sans font-medium text-base leading-6 text-li-gray pb-12">
        There are many variations of passages of Lorem Ipsu available, but the
        majority have suffered alte.
      </p>
      <div>
        <form onSubmit={handelSubmit} className="grid gap-6">
          <input
            onChange={(e) => {
              setFullName(e.target.value);
              setFullNameErr("");
            }}
            type="text"
            value={fullName}
            placeholder="Name*"
            className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form outline-none"
          />
          {fullNameErr && (
            <p className="text-red-600 font-semibold font-sans">
              {fullNameErr}
            </p>
          )}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailErr("");
            }}
            type="email"
            placeholder="Email*"
            className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form outline-none"
          />
          {emailErr && (
            <p className="text-red-600 font-semibold font-sans">{emailErr}</p>
          )}
          <input
            onChange={(e) => {
              setLocation(e.target.value);
              setLocationErr("");
            }}
            type="text"
            placeholder="Location"
            className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form outline-none"
          />
          {locationErr && (
            <p className="text-red-600 font-semibold font-sans">
              {locationErr}
            </p>
          )}
          <div className="grid grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="Budget*"
              className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form max-w-50 outline-none"
            />

            <input
              type="text"
              placeholder="Subject*"
              className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Message*"
            className="border-b-2 hover:border-pink hover:placeholder-pink transition-all border-form placeholder-form outline-none"
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="max-w-fit py-3 px-6 bg-pink rounded-sm flex gap-2 items-center text-white"
            >
              Submit <LiaLocationArrowSolid className="rotate-90 text-xl" />
            </button>
            {Submit && (
              <p className="text-green-600 font-semibold font-sans mx-auto">
                {Submit}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPart2;
