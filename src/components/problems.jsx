// export default function Problems() {
//   return (
//     <section id="products" className="bg-white text-center p-20">
//       <h2 className="text-5xl font-bold text-dGreen mb-15">Our Products</h2>

//       <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

//         {/* Plastic Waste */}
//         <div className="text-left max-w-md">
//           <div className="relative w-full h-64">
//             <img 
//               src="/plastic.jpg" 
//               alt="plastic bottles" 
//               className="w-full h-64 object-cover rounded-xl" 
//             />
//           </div>
//           <h3 className="text-4xl font-bold text-dGreen mt-4">Plastic Waste</h3>
//           <p className="text-dGray">
//             Our eco-conscious packaging reduces plastic waste.
//           </p>
//         </div>

//         {/* Skin Problems */}
//         <div className="text-left max-w-md">
//           <div className="relative w-full h-64 space-x-10">
//             <img 
//               src="/acne.jpeg" 
//               alt="a woman with acne" 
//               className="w-full h-64 object-cover rounded-xl" 
//             />
//           </div>
//           <h3 className="text-4xl font-bold text-dGreen mt-4">Skin Problems</h3>
//           <p className="text-dGray">
//             Combat acne, dryness, and dullness with our nutrient-rich drinks.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

export default function Problems() {
  return (
    <section id="products" className="bg-white text-center p-20">
      <h2 className="text-5xl font-bold text-dGreen mb-15">Our Products</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-30 gap-y-15">
        
        {/* Plastic Waste */}
        <div className="text-center max-w-sm w-full">
          <img 
            src="/plastic.jpg" 
            alt="plastic bottles" 
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h3 className="text-4xl font-bold text-dGreen">Plastic Waste</h3>
          <p className="text-dGray mt-2 w-full">
            Our eco-conscious packaging reduces plastic waste.
          </p>
        </div>

        {/* Skin Problems */}
        <div className="text-left max-w-sm w-full">
          <img 
            src="/acne.jpeg" 
            alt="a woman with acne" 
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h3 className="text-4xl font-bold text-dGreen">Skin Problems</h3>
          <p className="text-dGray mt-2">
            Combat acne, dryness, and dullness with our nutrient-rich drinks.
          </p>
        </div>

      </div>
    </section>
  );
}
