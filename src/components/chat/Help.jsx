import React, { useState } from "react";

// Single Accordion Item Component
const AccordionItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      onClick={toggleAccordion}
      className="container flex flex-col py-3 pb-0 my-2 rounded-md hover:bg-colors-digital-gray-2/50 transition duration-200 ease-in-out text-white/65 cursor-pointer backdrop-blur-md bg-opacity-30 shadow-lg"
      style={{
        background: "linear-gradient(145deg, #2e2e2e, #363636)", // Create a gradient using #2e2e2e
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)", // Adjust shadow as needed
        color: "#ffffff", // Ensuring text color contrasts well with the background
      }}
    >
      <h3
        className={`text-sm sm:text-base font-semibold text-center sm:text-left pb-2 sm:pb-0 px-3 transition-all duration-1000 ${
          isOpen && "border-b-1 border-colors-quantum-silver"
        }`}
      >
        {title}
      </h3>
      <div
        className={`details flex justify-between items-center text-sm sm:text-base mt-1 space-x-3 transition-max-height duration-1000 ease-in-out p-0 rounded-b-md bg-colors-quantum-silver/10 ${
          isOpen ? "max-h-96 py-2" : "max-h-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <p className="text-center w-full text-sm sm:text-base px-3">
          {isOpen ? description : ""}
        </p>
      </div>
    </article>
  );
};

function Help() {
  // Example items data
  const accordionItems = [
    {
      title: "Accordion Title 1",
      description:
        "This is the description for the first accordion item. This is the description for the first accordion item. This is the description for the first accordion item.",
    },
    {
      title: "Accordion Title 2",
      description:
        "This is the description for the second accordion item. This is the description for the second accordion item. This is the description for the second accordion item.",
    },
    {
      title: "Accordion Title 1",
      description:
        "This is the description for the first accordion item. This is the description for the first accordion item. This is the description for the first accordion item.",
    },
    {
      title: "Accordion Title 2",
      description:
        "This is the description for the second accordion item. This is the description for the second accordion item. This is the description for the second accordion item.",
    },
    {
      title: "Accordion Title 1",
      description:
        "This is the description for the first accordion item. This is the description for the first accordion item. This is the description for the first accordion item.",
    },
    {
      title: "Accordion Title 2",
      description:
        "This is the description for the second accordion item. This is the description for the second accordion item. This is the description for the second accordion item.",
    },
    {
      title: "Accordion Title 1",
      description:
        "This is the description for the first accordion item. This is the description for the first accordion item. This is the description for the first accordion item.",
    },
    {
      title: "Accordion Title 2",
      description:
        "This is the description for the second accordion item. This is the description for the second accordion item. This is the description for the second accordion item.",
    },
    {
      title: "Accordion Title 1",
      description:
        "This is the description for the first accordion item. This is the description for the first accordion item. This is the description for the first accordion item.",
    },
    {
      title: "Accordion Title 2",
      description:
        "This is the description for the second accordion item. This is the description for the second accordion item. This is the description for the second accordion item.",
    },
    // Add more items as needed
  ];

  return (
    <main
      className="pt-0 flex flex-col"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        aria-label="Subscription Container"
        role="complementary"
        className="subscription-container px-5 bg-colors-quantum-silver/20 rounded-t-md flex flex-col overflow-auto"
        style={{ height: "100%" }}
      >
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Help;
