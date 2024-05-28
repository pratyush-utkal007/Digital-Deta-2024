/* eslint-disable react/prop-types */
import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b-2 border-gray-600">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-white px-4 py-2 rounded-md focus:outline-none flex justify-between items-cente"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 rounded-md mt-2">
          <p className="text-white font-serif">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="mt-10 mx-4 lg:mx-72">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
