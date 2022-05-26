// see https://www.joshwcomeau.com/snippets/react-components/in-portal/

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Modal({ id, children }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return ReactDOM.createPortal(children, document.querySelector(`#${id}`));
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Modal;
