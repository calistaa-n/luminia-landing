import bottlesImg from '/bottles.png';

export default function Products() {
  return (
    <section id="products" className="bg-white text-center p-20 ">
      <h2 className="text-5xl font-bold text-dGreen mb-15">Our Products</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-15">
        {/* Image with decorative border */}
        <div className="">
          <div className="w-full h-full"></div>
          <img
            src={bottlesImg}
            alt="Luminia Bottles"
            className="w-4/5 h-auto mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="text-left max-w-md">
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-dGreen">Glow Green</h3>
            <p className="text-dGray">
              A refreshing juice that detoxifies, treats acne-prone skin, and prevents premature aging.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-4xl font-bold text-dGreen">Glow Orange</h3>
            <p className="text-dGray">
              A refreshing blend rich in vitamin C and E to boost collagen, hydrate skin, and enhance your natural glow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
