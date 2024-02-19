import { useState } from "react";
import ButtonGroups from "./components/button-groups/ButtonGroups";
import "react-spring-bottom-sheet/dist/style.css";

function App() {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      title: "Add New",
      attributes: { size: "small", onClick: () => alert("Add new") },
    },
    { title: "Settings", attributes: { size: "small" } },
    {
      title: "Log out",
      attributes: { size: "small", variant: "danger" },
    },
  ];

  return (
    <div className="p-4">
      <header className="flex items-center justify-between">
        <h4 className={"test-lg font-semibold"}>New Issues</h4>
        <nav className="flex gap-2.5">
          <ButtonGroups buttons={buttons} autoClose />
        </nav>
      </header>
    </div>
  );
}

export default App;
