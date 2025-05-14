import Testimony from "./testimony-card";

export default function Testimonies (){
    return (
        <section className="py-20 px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-bold text-dGreen mb-12">Glow Journey</h2>
        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-screen-lg mx-auto lg:px-20 justify-items-center">  
          <Testimony 
            title="Luminia is Part of My Daily Life"
            description="Luminia has become a part of my daily self-care ritual. It's not just a beauty drink—it's a lifestyle change. Since incorporating it into my routine, my skin looks healthier, and I feel more energized. I highly recommend it to anyone who wants to achieve that natural, effortless glow!"
            image="/sarah.png"
            name="Sarah Miller"
          />
          <Testimony 
            title="Got My Glow Back with Luminia"
            description="I’ve always struggled with dull and tired-looking skin, especially due to my hectic work schedule. After just a few weeks of drinking Luminia, I noticed my complexion becoming brighter and more even. People started complimenting my glow, and I love that it’s made with natural ingredients!"
            image="/tony.png"
            name="Tony Lewis"
          />
          <Testimony 
            title="Good for My Skin & the Planet!"
            description="I never thought a drink could make such a difference in my skin’s health! Luminia has helped improve my skin’s elasticity and hydration, making it look smoother and more youthful. I also love that it comes in eco-friendly packaging—it’s great for my skin and the planet!"
            image="/mia.png"
            name="Mia Petrova"
          />
        </div>
      </section>
    );
}