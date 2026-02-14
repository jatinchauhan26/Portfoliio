// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const rydeRef = useRef(null);
//   const libraryRef = useRef(null);
//   const ycDirectoryRef = useRef(null);

//   useGSAP(() => {
//     // Animation for the main section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     // Animations for each app showcase
//     const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3 * (index + 1),
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom-=100",
//           },
//         }
//       );
//     });
//   }, []);

  

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <div className="showcaselayout">

//           {/* ===== First Project : PulseCrypto ===== */}
//           <div ref={rydeRef} className="first-project-wrapper">
//             <div className="image-wrapper">
//               <img
//                 src="/images/project1.png"
//                 alt="PulseCrypto App Interface"
//               />
//             </div>

//             <div className="text-content">
//               <h2>
//                 PulseCrypto – Real-Time Cryptocurrency Tracking Made Simple
//               </h2>

//               <p className="text-white-50 md:text-xl">
//                 A cryptocurrency tracking web app providing real-time prices,
//                 trends, and market insights for digital assets.
//               </p>

//               <a
//                 href="https://pulsecrypto.vercel.app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative z-20 inline-block mt-4 text-blue-400 hover:underline"
//               >
//                 View Live Project →
//               </a>
//             </div>
//           </div>

//           {/* ===== Other Projects ===== */}
//           <div className="project-list-wrapper overflow-hidden">

//             <div className="project" ref={libraryRef}>
//               <div className="image-wrapper bg-[#FFEFDB]">
//                 <img
//                   src="/images/project2.png"
//                   alt="Library Management Platform"
//                 />
//               </div>
//               <h2>The Library Management Platform</h2>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <div className="image-wrapper bg-[#FFE7EB]">
//                 <img
//                   src="/images/project3.png"
//                   alt="YC Directory App"
//                 />
//               </div>
//               <h2>YC Directory – A Startup Showcase App</h2>
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Prevent mobile resize recalculations (improves performance)
ScrollTrigger.config({
  ignoreMobileResize: true,
});

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(
    () => {
      const cards = [
        rydeRef.current,
        libraryRef.current,
        ycDirectoryRef.current,
      ];

      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true, // runs only once (important for performance)
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          
          {/* ===== First Project ===== */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/images/project1.png"
                alt="PulseCrypto App Interface"
                loading="lazy"
              />
            </div>

            <div className="text-content">
              <h2>
                PulseCrypto – Real-Time Cryptocurrency Tracking Made Simple
              </h2>

              <p className="text-white-50 md:text-xl">
                A cryptocurrency tracking web app providing real-time prices,
                trends, and market insights for digital assets.
              </p>

              <a
                href="https://pulsecrypto.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-block mt-4 text-blue-400 hover:underline"
              >
                View Live Project →
              </a>
            </div>
          </div>

          {/* ===== Other Projects ===== */}
          <div className="project-list-wrapper overflow-hidden">
            
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  loading="lazy"
                />
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/project3.png"
                  alt="YC Directory App"
                  loading="lazy"
                />
              </div>
              <h2>YC Directory – A Startup Showcase App</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

///////NOT change make it comment
// export default AppShowcase;
//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <div className="showcaselayout">
//           <div ref={rydeRef} className="first-project-wrapper">
//             <div className="image-wrapper">
//               <img src="/images/project1.png" alt="Ryde App Interface" />
//             </div>
//             <div className="text-content">
//               <h2>
//                 On-Demand Rides Made Simple with a Powerful, User-Friendly App
//                 called Ryde
//               </h2>
//               <p className="text-white-50 md:text-xl">
//               Cryptocurrency
//               </p>
//             </div>
//           </div>
          

//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={libraryRef}>
//               <div className="image-wrapper bg-[#FFEFDB]">
//                 <img
//                   src="/images/project2.png"
//                   alt="Library Management Platform"
//                 />
//               </div>
//               <h2>The Library Management Platform</h2>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <div className="image-wrapper bg-[#FFE7EB]">
//                 <img src="/images/project3.png" alt="YC Directory App" />
//               </div>
//               <h2>YC Directory - A Startup Showcase App</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppShowcase;

