import style from "./listItems.module.css";

const ListItems = ({fruits}) => {

  return (
    <>
      {fruits.map((fruit, index) => (
        <li key={index} className={`${style["li"]}`}>
            {fruit}
        </li>
      ))}
    </>
  );
};

export default ListItems;
