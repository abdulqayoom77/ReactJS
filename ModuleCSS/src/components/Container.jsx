import style from "./container.module.css";
const Container = (props) => {

  return <div className={`${style["border-styling"]} ${style['h1']}`}>{props.children}</div>;
};

export default Container;
