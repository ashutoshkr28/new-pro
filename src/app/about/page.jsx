import Image from "next/image";
import ozair from "@/app/image/ozairair.jpg";
import ramkishor from "@/app/image/rksir.jpg";

const AboutSection = () => {
  return (
    <div className="w-full py-10">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-4xl font-bold my-5 shadow-md">
        Neha Challenge Coaching Center Chhaurahi Dalokhar
      </h1>

      {/* Main Container */}
      <div className="bg-gray-900 py-10">
        {/* Flexbox container for images */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 px-4">
          {/* Ramkishor Sir Image and Description */}
          <div className="text-center">
            <Image
              src={ramkishor}
              alt="Ramkishor Sir"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-lg"
            />
            <p className="text-white mt-4 text-lg font-semibold">Ramkishor Sir</p>
            <p className="text-gray-400 text-md">Motivator & Director</p>
          </div>

          {/* Ozair Sir Image and Description */}
          <div className="text-center">
            <Image
              src={ozair}
              alt="Ozair Sir"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-lg"
            />
            <p className="text-white mt-4 text-lg font-semibold">Ozair Sir</p>
            <p className="text-gray-400 text-md">Motivator & Director</p>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-10 bg-blue-600 p-6 text-center text-white">
          <p className="text-sm md:text-lg">
            Welcome to Neha Challenge Coaching Center, where education meets excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
