import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://combotour.net/wp-content/uploads/2021/06/bien-4combotour.net_.jpg"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With WeekAway</h2>
          <p>
            Welcome to the Weekaway website. Contained within is a brief
            introduction to the Weekaway Recreational Camp. Nestled in the quiet
            Benloch valley. Weekaway aims to provide an experience not only for
            the time of your stay, but an experience for life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
