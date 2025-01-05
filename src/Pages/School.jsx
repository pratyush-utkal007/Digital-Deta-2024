const School = () => {
  return (
    <div>
      <div className="bg-[url('./Image/pattern-sample.jpg')] h-full py-10">
        <div className="pl-[660px]">
          <img
            src="../src/Image/logo_blue.png"
            alt="..."
            className=" h-40 w-52"
          />
        </div>

        <div className="flex justify-center">
          <div className="pl-20 ">
            <img
              src="../src/Image/leaves-left.png"
              alt="..."
              className="h-[350px] w-[350px]"
            />
          </div>
          <div>
            <div className="text-[#1F232B] text-center px-30  font-extrabold text-7xl pb-10">
              WE CREATED
              <div className="flex gap-5 text-center pl-[250px]">
                <p> AN </p>
                <p className="text-[#D86628] "> ACADEMY.</p>
              </div>
            </div>
            <div className="text-center px-[200px]  font-serif  text-xl font-medium leading-normal ">
              <p className="pb-6">
                So, learners can dive into an immersive learning journey with
                interactive modules & friendly competitions along the way. Take
                a step towards advancing your expertise.
              </p>
              <p className="pb-6">
                Our mentors are ready to aid you in making meaningful progress
                so you standout to recruiters. Gain feedback and interview
                insights.
              </p>
              <p className="pb-6">
                All you gotta do is join us, show up and commit.
              </p>
              <p className="pb-6">
                And if you make it till the end of the course, you’ll have a
                portfolio, knowledge, and experience that will put you among the
                most sought-after coders, designers and marketers of the tech
                industry.
              </p>
            </div>
          </div>
          <div className="pr-20">
            <img
              src="../src/Image/leaves-right.png"
              alt="..."
              className="h-[350px] w-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
