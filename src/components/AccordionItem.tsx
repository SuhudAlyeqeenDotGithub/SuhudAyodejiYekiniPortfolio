import { TbTriangleInvertedFilled } from "react-icons/tb";
import { MouseEventHandler } from "react";

interface ComponentProps {
  title: string;
  content: string;
  titleStyle: string;
  contentStyle: string;
  isOpen: boolean;
  onToggle: MouseEventHandler<HTMLDivElement>; // Type for the event handler
  borderBottom: string;
  borderLeft: string;
}

const AccordionItem: React.FC<ComponentProps> = ({
  title,
  content,
  titleStyle,
  contentStyle,
  isOpen,
  onToggle,
  borderBottom
}) => {
  const defaultTitleStyle = "p-4";
  const defaultContentStyle = "p-4";

  return (
    <div className={`px-1 cursor-pointer rounded`} onClick={onToggle}>
      <div
        className={`${borderBottom} flex flex-col
       py-2 duration-100 hover:scale-103`}
      >
        <h1 className={titleStyle ? titleStyle : defaultTitleStyle}>
          {title}
          <span className={` ${isOpen ? "transform rotate-180 transition-transform duration-200" : ""}`}>
            <TbTriangleInvertedFilled className="size-3" />
          </span>
        </h1>

        <p className={`${isOpen ? "block" : "hidden"} ${contentStyle ? contentStyle : defaultContentStyle}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
