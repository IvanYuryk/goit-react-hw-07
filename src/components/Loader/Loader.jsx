import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = ({ loading }) => {
  return (
    <div className={css.loaderContainer}>
      <RotatingLines
        visible={loading}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;