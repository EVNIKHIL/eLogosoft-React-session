const TodoItems = ({ title, itemList }) => {
  console.log(title, itemList);
  return (
    <div>
      {title}
      {itemList?.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </div>
  );
};

export default TodoItems;
