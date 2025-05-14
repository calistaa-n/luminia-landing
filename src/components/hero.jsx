export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row h-[640px] bg-white bg-cover bg-center items-center justify-center lg:justify-between bg-[url('/banner.png')] px-6 lg:px-15 text-left">
      
      <div className="absolute inset-0 bg-black/30 lg:bg-transparent z-0" />

      <div className="relative z-10 max-w-2xl text-white">
        <h1 className="text-4xl lg:text-dGreen sm:text-5xl lg:text-7xl font-semibold mb-4 leading-snug lg:leading-tight drop-shadow-lg">
        Kulit Sehat Bukan dari Luar, Tapi dari Apa yang Kamu Minum.
        </h1>
        <p className="text-base lg:text-gray-700 sm:text-lg lg:text-xl drop-shadow-sm">
        Tampil makin glowing bareng Luminia - minuman segar penuh nutrisi yang bantu rawat kulit kamu dari dalam
        </p>
      </div>
    </section>
  );
}
