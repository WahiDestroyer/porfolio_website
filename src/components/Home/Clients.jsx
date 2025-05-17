import React from "react";

const Clients = () => {
  return (
    <section>
      <div className="container py-25 flex flex-col items-center">
        <div className="flex flex-col text-center max-w-xl">
          <h2 className="font-sans font-semibold text-5xl leading-14 text-primary pb-6">
            Happy Clients
          </h2>
          <p className="font-sans font-normal text-li-gray text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="flex justify-between pt-6">
          <img src="c1.png" alt="media" />
          <img src="c2.png" alt="media" />
          <img src="c3.png" alt="media" />
          <img src="c4.png" alt="media" />
          <img src="c5.png" alt="media" />
          <img src="c6.png" alt="media" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
