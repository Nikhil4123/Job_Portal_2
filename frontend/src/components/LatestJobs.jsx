/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-5xl text-center font-bold">
        <span className="text-center text-[#ba35f8] font-bold my-20 mx-auto p-8 text-center">
          Latest & Top
        </span>
        Job Opportunity
      </h1>

      <div className="my-20 mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-5 ">
            {randomJobs.map((item, index) => (
            <div>
                <LatestJobCards key={index} />
            </div>
            // This helps to check if cards are actually rendered
            ))}
      </div>
    </div>
  );
};

export default LatestJobs;
// {
//   /* Debugging Section */
// }
// {
//   /* Uncomment to visualize if cards are being rendered */
// }
// {
//   /* <div>
//         {randomJobs.map((item, index) => (
//           <p key={index}>Card {item}</p> // This helps to check if cards are actually rendered
//         ))}
//       </div> */
// }
