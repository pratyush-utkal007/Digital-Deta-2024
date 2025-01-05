/* eslint-disable react/no-unescaped-entities */
import img from "../Image/Kasturika.png";
import img2 from "../Image/dialogbox.png";
import img3 from "../Image/qmark.png";

function About() {
  return (
    <div className="main bg-[url('./Image/pattern-sample.jpg')] h-[400vh]">
      <div className="text-7xl font-bold text-[#101216] ms-28 px-10 pt-14">
        WHAT’LL YOU{" "}
        <span className="text-[#f05817ee] font-bold text-7xl">MAKE?</span>
      </div>
      <p className="font-serif text-2xl w-6/12 mt-16 px-9 ms-28 leading-relaxed">
        A remarkable career. Career in marketing & web designing. And tons of
        stuff we’ve never thought of. You’ll get one-on-one mentor interaction
        with broad problems to solve, then create outstanding, clever or
        commendable solutions. And don’t worry – we won’t take credit for your
        work. All achievements are your own.
      </p>

      <div className="Graphics flex px-9 justify-around h-screen">
        <div>
          <img src={img} alt="" className="ms-48" />
        </div>

        <div className="relative px-24 ">
          <img src={img2} alt="" className="px-3 z-30 " />
          <p className="font-serif text-4xl absolute top-10 left-72 font-medium w-6/12 text-center">
            “We create <p>our own creators.</p> So cool.”
          </p>
        </div>
      </div>
      {/* Web development */}
      <div className="text-7xl font-bold text-[#101216] ms-28 px-10 pt-14">
        WHO WILL{" "}
        <span className="text-[#f05817ee] font-bold text-7xl">TEACH</span> YOU ?{" "}
      </div>
      <p className="font-serif text-2xl w-6/12 mt-16 px-9 ms-28 leading-relaxed">
        Us. Web developers. Graphic designers. Founders. Marketers. Even Tapas
        Kumar Rout, Manoj Kumar Panda & Kasturika Nayak in between client
        meetings, new business pitches, and a whole lot more.
      </p>
      <div className="Web Developer flex text-center px-32 justify-between">
        <div className="ms-48 mt-32">
          <img src={img} alt="" className="" />
          <div className="font-medium text-xl text-[#d86628] w-72">
            MONALISA BEHERA
          </div>
          <div className="font-serif   text-xl">Web Development Mentor</div>
        </div>

        <p className="font-serif text-xl text-center px-56 leading-7 mt-56">
          <p className=" font-semibold">This is Web development’s mentor.</p>{" "}
          Our full-time educator. And your go-to guy. With years of educating
          and elevating some of the finest developers and coders, he’s literally
          made his career out of making other people’s careers. And now he wants
          to make yours.
        </p>
      </div>

      {/* About The Developer */}
      <div className="flex justify-around">
        <div className="text-6xl font-bold text-[#101216] ms-44 px-10 pt-14">
          WHAT'S A{" "}
          <div className="text-[#f05817ee] font-bold text-6xl">John Due
          
          </div>{" "}
          <p className="font-serif font-normal text-3xl mt-16  me-40">
            This is Web development’s mentor. Our full-time educator. And your
            go-to guy. With years of educating and elevating some of the finest
            developers and coders, he’s literally made his career out of making
            other people’s careers. And now he wants to make yours.
          </p>
        </div>
        <img src={img3} alt="" className="px-32 h-[600px] mt-32" />
      </div>
    </div>
  );
}

export default About;
