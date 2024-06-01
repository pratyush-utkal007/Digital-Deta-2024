function About() {
  return (
    <div className="main bg-[url('./Image/pattern-sample.jpg')] h-[200vh]  ">
      <div className="text-7xl font-bold text-[#101216] ms-28 px-10 pt-14 ">
        WHAT’LL YOU{" "}
        <span className="text-[#f05817ee] font-bold text-7xl">MAKE?</span>
      </div>
      <p className="font-serif text-2xl  w-6/12  mt-16 px-9 ms-28 leading-relaxed ">
        A remarkable career. Career in marketing & web designing. And tons of
        stuff we’ve never thought of. You’ll get one-on-one mentor interaction
        with broad problems to solve, then create outstanding, clever or
        commendable solutions. And don’t worry – we won’t take credit for your
        work. All achievements are your own.
      </p>

      <div className="Graphics flex justify-around pb-64 h-screen">
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <p className="font-serif text-xl px-40 pb-32 bg-[url('./Image/dialogbox.png')]">
            {" "}
            “ We create <p>our own own creators .</p> <p> So cool.”</p>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
