import React, { SyntheticEvent } from "react";
import FocusTrap from "focus-trap-react";

interface DialogWrapperProps {
  /** This function prop is called on a close button or outside click event */
  handleClose: (event: SyntheticEvent) => any;
  /** Toggles overflow based on is a modal state. It changes the state shouldToggleOverflow . */
  isModal: boolean;
  /** Components that will be rendered in the DialogWrapper (MessageDialog, StandardDialog) */
  children: React.ReactNode;
  /** Toggles overflow based on is open state. It changes the state shouldToggleOverflow . */
  isOpen?: boolean;
  /** Toggles .lab-dialog--message classname */
  isMessageDialog?: boolean;
  /** Toggles .lab-dialog--large classname to increase Dialog width */
  isLarge?: boolean;
}

export default function DialogWrapper({
  handleClose,
  isModal,
  children,
  isOpen,
  isMessageDialog,
  isLarge,
}: DialogWrapperProps) {
  const deviceIsMobile = typeof window !== "undefined" && window.outerWidth <= 768;
  const [shouldToggleOverflow, setShouldToggleOverflow] = React.useState(
    isOpen && (isModal || deviceIsMobile)
  );

  const handleResize = () => {
    const deviceIsMobile = window.outerWidth <= 768;
    setShouldToggleOverflow(isOpen && (isModal || deviceIsMobile));
  };

  const handleOverflow = () => {
    document.body.style.overflow = shouldToggleOverflow ? "hidden" : "unset";
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize, false);
      document.body.style.overflow = "unset";
    };
  }, []);

  React.useEffect(() => {
    handleOverflow();
  }, [shouldToggleOverflow, isOpen, isModal, deviceIsMobile]);

  return shouldToggleOverflow ? (
    <React.Fragment>
      <div
        className="lab-dialog-overlay"
        onClick={handleClose}
        role="presentation"
      />
      <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
        <div
          className={`lab-dialog${
            isMessageDialog ? " lab-dialog--message" : " lab-dialog--standard"
          }
            ${isLarge ? ` lab-dialog--large` : ""}`}
        >
          {children}
        </div>
      </FocusTrap>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div
        className={`lab-dialog${
          isMessageDialog ? " lab-dialog--message" : " lab-dialog--standard"
        }
            ${isLarge ? ` lab-dialog--large` : ""}`}
      >
        {children}
      </div>
    </React.Fragment>
  );
}
