import React from "react";

interface AccordionProps {
  children: React.ReactNode;
  styling?: string;
}

const AccordionContainer: React.FC<AccordionProps> = ({ children, styling }) => {
  const defaulStyling = "p-4";
  return <div className={styling ? styling : defaulStyling}>{children}</div>;
};

export default AccordionContainer;
