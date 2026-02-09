// import { socialImgs } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="flex flex-col justify-center">
//           <p>Terms & Conditions</p>
//         </div>
//         <div className="socials">
//           {socialImgs.map((socialImg, index) => (
//             <div key={index} className="icon">
//               <img src={socialImg.imgPath} alt="social icon" />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center">
//           <p className="text-center md:text-end">
//             © {new Date().getFullYear()} Adrian Hajdin. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) =>
            socialImg.url ? (
              <a
                key={index}
                href={socialImg.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={socialImg.imgPath}
                  alt={socialImg.name}
                  className="w-8 h-8"
                />
              </a>
            ) : (
              <img
                key={index}
                src={socialImg.imgPath}
                alt={socialImg.name}
                className="w-8 h-8"
              />
            )
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Adrian Hajdin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
