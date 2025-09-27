import Navbar from "./Navbar";
import Makup from '../assets/makup.jpg';
import Men from '../assets/men.jpg';
import Electronic from '../assets/electronic.jpg';
import Women from '../assets/women.jpg';
import Footer from "./footer";

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 space-y-10">
        
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#CB9C5E]">About Our E-Commerce Website</h1>
          <p className="text-[#CB9C5E] text-base md:text-lg">
            We are committed to providing high-quality products across various categories including fashion, electronics, and cosmetics. 
            Our mission is to combine great service with unbeatable prices so that every customer feels valued and satisfied.  
            We focus on authenticity, reliability, and user-friendly shopping experience.
          </p>
        </div>

        
        <div className="space-y-10">
          {/* Men Fashion */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <img src={Men} alt="Men Fashion" className="w-full md:w-2/5 h-auto rounded-lg object-cover"/>
            <p className="text-base md:text-lg md:w-3/5">
              Our men’s fashion collection features a wide range of stylish and comfortable clothing for all occasions. 
              From casual wear to formal attire, we make sure every piece is trendy, durable, and affordable. 
              Stay fashionable with our curated selections that suit every lifestyle.
            </p>
          </div>

      
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
            <img src={Makup} alt="Makeup Collection" className="w-full md:w-2/5 h-auto rounded-lg object-cover"/>
            <p className="text-base md:text-lg md:w-3/5">
              Discover our premium makeup products designed to enhance your natural beauty. 
              From foundation, lipsticks, and eyeshadows to skincare essentials, we offer a complete range 
              for every look. Our collection is perfect for daily wear or special occasions.
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <img src={Women} alt="Women Fashion" className="w-full md:w-2/5 h-auto rounded-lg object-cover"/>
            <p className="text-base md:text-lg md:w-3/5">
              Our women’s fashion range includes elegant, casual, and formal pieces that are both stylish and comfortable. 
              We carefully select products that cater to all tastes and ensure that quality and affordability go hand in hand. 
              Discover dresses, tops, and accessories that elevate your wardrobe.
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
            <img src={Electronic} alt="Electronics" className="w-full md:w-2/5 h-[280px] rounded-lg object-cover"/>
            <p className="text-base md:text-lg md:w-3/5">
              Our electronics category brings you the latest gadgets and devices at competitive prices. 
              From smartphones, headphones, and smart home devices to essential accessories, 
              we ensure quality, warranty, and excellent customer support for all products.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
