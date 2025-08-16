const List = ({ foodItems }) => {
  return (
    <ul>
      {foodItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;

