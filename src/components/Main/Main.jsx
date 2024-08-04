import Hero from "../Hero/Hero"; // Ensure the path is correct
import LoginPopup from "../LoginPopup/LoginPopup"; // Ensure the path is correct
import BgImage from "../../assets/bg.jpg"; // Ensure the path is correct

const Main = () => {
  const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <>
      <main style={bgImage} className="md:grid grid-cols-3 p-20 ">
        <LoginPopup />
        <Hero />
      </main>
    </>
  );
};

export default Main;
