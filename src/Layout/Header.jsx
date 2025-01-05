import img from "..//Image/arrow.gif";
export const Header = () => {
  return (
    <div className="max-w-[1300] h-screen bg-black px-40">
      <div
        className="flex justify-around gap-11 
          "
      >
        <img
          src="https://theacademy.goodbysilverstein.com/public/theme/images/logo-gsp.png"
          alt=""
          height={400}
          width={400}
          className="mt-28 ps-16 "
        />
        <div className="mt-28">
          <div className="text-white text-7xl tracking-wide leading-tight font-bold">
            EMBARK{" "}
          </div>
          <div className="text-white text-7xl tracking-wide leading-tight font-bold">
            ON A JOURNEY{" "}
          </div>
          <div className="text-white text-7xl tracking-wide leading-tight font-bold">
            OF DIGITAL{" "}
          </div>
          <div className="text-white text-7xl tracking-wide leading-tight font-bold">
            MASTERY
          </div>
        </div>
        <button className="text-white font-bold text-xl fixed z-50 bg-[#d86628] shadow-lg shadow-black text  h-14 w-32 mt-4 rounded-sm ms-[90%] ">
          Apply
        </button>
      </div>
      <div className="flex justify-center">
        <img className="h-52 " src={img} alt="" />
        <div className=" font-serif text-3xl mt-9 text-[rgb(216,102,40)]">
          <div>Join </div>
          <div>The Community </div>
          <div>Of Learners.</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
