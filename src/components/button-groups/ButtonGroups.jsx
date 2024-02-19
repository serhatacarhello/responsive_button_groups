import { useState } from "react";
import Button from "../button/Button";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import useMedia from "../../hooks/use-media";
import { RxHamburgerMenu } from "react-icons/rx";

export default function ButtonGroups({ buttons, autoClose = false }) {
  const isMobile = useMedia();
  const [open, setOpen] = useState(isMobile);

  const prepareButtons = buttons.map((button, i) => {
    const attributes = { ...button.attributes };

    if (autoClose) {
      attributes.onClick = (e) => {
        setOpen(false);
        button?.attributes?.onClick?.(e);
      };
    }

    return (
      <Button key={i} {...attributes}>
        {button.title}
      </Button>
    );
  });

  const hamburgerMenuIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
    </svg>
  );

  if (isMobile)
    return (
      <>
        <button onClick={() => setOpen(!open)}>{hamburgerMenuIcon}</button>

        <BottomSheet open={open} onDismiss={() => setOpen(false)}>
          <nav className="grid px-4 gap-y-2">{prepareButtons}</nav>
        </BottomSheet>
      </>
    );

  return <>{prepareButtons}</>;
}
