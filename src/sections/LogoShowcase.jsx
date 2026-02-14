import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

// const LogoShowcase = () => (
//   <div className="md:my-20 my-10 relative">
//     <div className="gradient-edge" />
//     <div className="gradient-edge" />

//     <div className="marquee h-52">
//       <div className="marquee-box md:gap-12 gap-5">
//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}

//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default LogoShowcase;
const LogoShowcase = () => (
  <div className="md:my-20 my-10 px-5 md:px-20">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
      {logoIconsList.map((icon, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={icon.imgPath}
            alt="skill"
            className="h-16 md:h-20 lg:h-24 object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);
export default LogoShowcase;