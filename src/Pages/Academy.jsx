import leaves from "../Image/leaves-left.png";
import leaves2 from "../Image/leaves-right.png";

function Academy() {
  return (
    <div className="bg-[url('./Image/pattern-sample.jpg')] h-screen">
      <div className="main">
        <div className="flex justify-evenly">
          <img src={leaves} alt="" className="mt-20 ms-24 h-80" />
          <div className=" text-7xl font-bold text-[#1f232b] mt-20 text-center">
            WE CREATED
            <div className=" text-7xl text-[#d86628]">
              {" "}
              <span className="text-[#1F232B]">AN</span> ACADEMY.
            </div>
            <div className=" px-10 text-center  text-xl font-normal font-serif  mt-8">
              <div className="gap-14 mt-9 px-24">
                So, learners can dive into an immersive learning journey with
                interactive modules & friendly competitions along the way. Take
                a step towards advancing your expertise.
              </div>
              <div className="mt-12 px-24">
                Our mentors are ready to aid you in making meaningful progress
                so you standout to recruiters. Gain feedback and interview
                insights.
              </div>
              <div className="mt-14 px-24">
                All you gotta do is join us, show up and commit.
              </div>
              <div className="mt-14 px-24">
                And if you make it till the end of the course, you’ll have a
                portfolio, knowledge, and experience that will put you among the
                most sought-after coders, designers and marketers of the tech
                industry.
              </div>
            </div>
          </div>

          <img src={leaves2} alt="" className="mt-20 h-80 me-24" />
        </div>
      </div>
    </div>
  );
}

export default Academy;
