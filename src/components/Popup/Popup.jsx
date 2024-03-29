import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Icons
import { GrClose } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";

export default function Popup() {
  const [isPopup, setIsPopup] = useState(true);

  return (
    <>
      {isPopup && (
        <section className="fixed top-0 left-0 h-screen w-screen bg-white bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-[9999]">
          <div className="sm:w-[80vw] md:w-[40vw] h-fit bg-white border border-red-600 relative">
            <div>
              <div>
                <Image
                  src={
                    "https://images.pexels.com/photos/10309762/pexels-photo-10309762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                  width={4912}
                  height={3264}
                  className="sm:w-[80vw] md:w-[40vw] sm:h-[20vh] md:h-[30vh] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-[#DC2C2C] mt-4">
                <h1 className="sm:text-xl md:text-3xl mb-4 text-center footer-font">
                  Help us improve
                </h1>
                <p className="sm:w-64 md:w-96 text-center">
                  We need your valuable feedback to improve our fitting service!
                </p>

                <div className="mt-4 pb-8">
                  <Link
                    href={"https://forms.office.com/r/x2rmNmLSQ7"}
                    className="bg-[#DC2C2C] text-white flex justify-center items-center gap-2 p-4 rounded-sm text-sm"
                  >
                    <VscFeedback className="text-xl" /> Feedback
                  </Link>
                </div>
              </div>
            </div>

            <GrClose
              className="absolute top-5 right-5 text-white cursor-pointer"
              onClick={() => setIsPopup(false)}
            />
          </div>
        </section>
      )}
    </>
  );
}
