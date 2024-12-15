// import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SponsorsSection from "./components/SponsorsSection";
import Footer from "./components/Footer";


export default function Home() {
	return (
		<div className="bg-[#043873]">
			<Navbar />
      <HeroSection/>
	  <SponsorsSection/>
	  <Footer/>
	 
		</div>
	);
}