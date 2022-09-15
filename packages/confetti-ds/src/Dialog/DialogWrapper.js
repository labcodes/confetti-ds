import React from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";

/**
 *
 * @param isOpen Toggles overflow based on is open state. It changes the state shouldToggleOverflow
 * @param isModal Toggles overflow based on is a modal state. It changes the state shouldToggleOverflow
 * @param handleClose This function prop is called on a close button or outside click event
 * @param isLarge Toggles .lab-dialog--large classname to increase Dialog width
 * @param isMessageDialog Toggles .lab-dialog--large classname to increase Dialog width
 * @param children Components that will be rendered in the DialogWrapper (MessageDialog, StandardDialog)
 * @returns {JSX.Element}
 * @constructor
 */
export default function DialogWrapper({
  isOpen,
  isModal,
  handleClose,
  isLarge,
  isMessageDialog,
  children,
}) {
  const deviceIsMobile = window.outerWidth <= 768;
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

DialogWrapper.propTypes = {
  /** This function prop is called on a close button or outside click event */
  handleClose: PropTypes.func.isRequired,
  /** Toggles overflow based on is open state. It changes the state shouldToggleOverflow . */
  isOpen: PropTypes.bool.isRequired,
  /** Toggles overflow based on is a modal state. It changes the state shouldToggleOverflow . */
  isModal: PropTypes.bool.isRequired,
  /** Components that will be rendered in the DialogWrapper (MessageDialog, StandardDialog) */
  children: PropTypes.node.isRequired,
  /** Toggles .lab-dialog--message classname */
  isMessageDialog: PropTypes.bool,
  /** Toggles .lab-dialog--large classname to increase Dialog width */
  isLarge: PropTypes.bool,
};

DialogWrapper.defaultProps = {
  isMessageDialog: undefined,
  isLarge: undefined,
};
