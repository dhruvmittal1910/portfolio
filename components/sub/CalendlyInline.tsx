"use client"
import React,{useEffect,useState} from "react";
import { PopupWidget } from "react-calendly";

const CalendlyInline = () => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // This runs only on the client
    setRootElement(document.body); // safe choice instead of "root"
  }, []);

  if (!rootElement) {
    // Don’t render Calendly until client-side mount
    return null;
  }
  return (
    <div className="App">
      <PopupWidget
        url={process.env.CALENDLY_LINK || "https://calendly.com/dhruvmittal1910/30min"}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={rootElement}
        text="Schedule time with me 😊!"
        textColor="#ffffff"
        color="#7C3AED"
      />
    </div>
  );
};

export default CalendlyInline