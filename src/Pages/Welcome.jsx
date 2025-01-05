import welcome from "../Image/welcome.png";
const Welcome = () => {
  return (
    <div className="bg-black border-b px-36 h-screen">
      <div className="text-[#D86628] px-56 mb-20">
        {" "}
        <img src={welcome} alt="" className="pt-32" />
      </div>
      <div className="text-center  items-center px-80 font-serif text-white text-3xl ">
        {" "}
        <p>
          Coders. Creators. Artists. Strategists. Innovators. Digital wizards.
          People who aspire to create wonders.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
