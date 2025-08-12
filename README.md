# Sidebar

A custom react sidebar component implementation using the `<aside>` HTML element.

Built using Typescript and using Tailwind CSS.

Note: Your project needs to have Tailwind CSS installed and configured for this component to work properly!

## Installation

`npm install @rainzoneg/sidebar`

## Requirements

Your project must have Tailwind CSS installed and configured.

## Usage

`import { Sidebar } from "@rainzoneg/sidebar";`

## Example Usage

```
import { Sidebar } from "@rainzoneg/sidebar";

export default function Home() {
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        <button onClick={openSidebar} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {open ? "Close Sidebar" : "Openz Sidebar"}
        </button>
        <Sidebar open={open} side={direction}>
	  <div>Hello World!</div>
	</Sidebar>
      </div>
    </div>
  );
}

```
