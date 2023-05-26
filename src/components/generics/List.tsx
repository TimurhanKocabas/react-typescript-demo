type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
export const List = <T extends { }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {/* {item}  not working with react types 18.0*/}
          </div>
        );
      })}
    </div>
  );
};