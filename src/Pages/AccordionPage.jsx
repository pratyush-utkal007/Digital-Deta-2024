import Accordion from "../Layout/Accordion";

const faqItems = [
  {
    title: "WHAT IS DIGITAL DETA LABS ?",
    content:
      "Digital Deta Labs specializes in web development, graphic designing, and offers a combined course in strategic marketing and AI. We provide comprehensive solutions for businesses and individuals seeking to enhance their digital presence and skills.",
  },
  {
    title: "WHO CAN BENEFIT FROM THE COURSES AT DIGITAL DETA LABS ?",
    content:
      "Our courses are designed for a wide range of learners, including beginners, professionals looking to upskill, and businesses seeking to enhance their team's capabilities in web development, graphic design, and strategic marketing with AI.",
  },
  {
    title: "WHAT TYPES OF WEB DEVELOPMENT SERVICES DO YOU PROVIDE ?",
    content:
      "We offer a full range of web development services, including website design and development, e-commerce solutions, content management systems (CMS), and custom web applications tailored to meet specific business needs. Our course includes HTML, CSS as well as JavaScript.",
  },
  {
    title: "WHAT GRAPHIC DESIGN SERVICES ARE AVAILABLE AT DIGITAL DETA LABS ?",
    content:
      "Our graphic design services include logo design, branding, print and digital media design, user interface (UI) design, and visual content creation for marketing campaigns. We use industry-standard design software like Adobe Photoshop, Illustrator, etc. and make the learners work hands-on to create digital artwork for projects.",
  },
  {
    title: "CAN YOU EXPLAIN YOUR COURSE ON STRATEGIC MARKETING AND AI ?",
    content:
      "Our strategic marketing and AI course covers the integration of AI technologies with marketing strategies. Topics include data-driven marketing, machine learning for customer insights, predictive analytics, and automating marketing processes using AI.",
  },
  {
    title: "WHO IS THE STRATEGIC MARKETING AND AI COURSE DESIGNED FOR ?",
    content:
      "This course is ideal for marketing professionals, business strategists, and anyone interested in leveraging AI to enhance marketing efforts and business decision-making processes.",
  },
  {
    title:
      "ARE THE COURSES AT DIGITAL DETA LABS SELF-PACED OR INSTRUCTOR-LED ?",
    content:
      "We offer both self-paced and instructor-led courses to accommodate different learning preferences and schedules. Instructor-led courses provide live interaction and personalized guidance, while self-paced courses offer flexibility to learn at your own pace.",
  },
  {
    title: "DO YOU PROVIDE ANY CERTIFICATION UPON COURSE COMPLETION ?",
    content:
      "Yes, upon successful completion of our courses, participants receive a certificate from Digital Deta Labs, which can be added to their professional portfolio and LinkedIn profile.",
  },
  {
    title: "WHAT SUPPORT IS AVAILABLE TO STUDENTS DURING THE COURSES ?",
    content:
      "We offer extensive support to our students, including access to course materials, online forums, live Q&A sessions with instructors, and a dedicated support team to assist with any technical or course-related inquiries.",
  },
];

function AccordionPage() {
  return (
    <div className="App bg-black md:min-h-min  text-black text-xl font-bold">
      <h1 className="text-4xl font-bold text-white text-center mt-0">FAQs</h1>
      <Accordion items={faqItems} />
    </div>
  );
}

export default AccordionPage;
