import ListItems from "./ListItems"

const List = ({fruits}) => {
  return (
    <ul>
        <ListItems fruits={fruits} />
    </ul>
  )
}

export default List