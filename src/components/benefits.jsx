import fruitBowl from "/mixed-fruit-bowl.png";

export default function Benefits() {
  return (
    <section className="py-30 px-20 text-center">
      <h2 className="text-5xl font-bold text-dGreen mb-15">Why Drink Luminia</h2>
      
      <div className="flex flex-col lg:flex-row justify-between items-start gap-11 min-h-[310px]">
        {/* Image */}
          <div className="order-2 w-[270px] mx-auto">  
            <img 
             src={fruitBowl} 
             alt="Fruit bowl" 
             className="w-[270px] h-[270px] object-cover rounded-full" />
          </div>
          
          {/* Left Text */}
          <div className="order-1 flex flex-col gap-12 w-full lg:w-[calc(50%-135px)] items-start">
            <div className="text-left lg:text-right">
              <h4 className="pb-2 text-lg font-bold">100% Natural, Skin-Loving Ingredients</h4>
              <p>Made with premium, plant-based ingredients, Luminia contains no artificial additives, ensuring a safe and effective way to enhance your skin's health.</p>
            </div>
            <div className="text-left lg:text-right">
              <h4 className="pb-2 text-lg font-bold">Refreshing Taste, Powerful Benefits</h4>
              <p>Enjoy a delicious, revitalizing drink while giving your skin the nourishment it needs.</p>
            </div>
          </div>
          {/* Right Text */}
          <div className="order-3 flex flex-col gap-12 w-full lg:w-[calc(50%-135px)] items-start">
              <div className="text-left">
                <h4 className="pb-2 text-lg font-bold">Glow Naturally, Live Sustainably</h4>
                <p>Our formula is free from artificial additives and comes in biodegradable or recyclable materials, ensuring you can enjoy radiant skin guilt-free.</p>
              </div>
              <div className="text-left">
                <h4 className="pb-2 text-lg font-bold">Beauty That's Good for You and the Earth</h4>
                <p>Made with responsibly sourced ingredients and sustainable packaging, Luminia supports your skin's health while minimizing environmental impact.</p>
              </div>

          </div>
      </div>
    </section>
  );
}