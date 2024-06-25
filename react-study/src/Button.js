import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button(prop) {
  return <button className={styles.btn}>{prop.text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
