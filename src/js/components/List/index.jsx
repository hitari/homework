import React from 'react';
import Item from './Item';

const List = ({ characterList }) => {
  console.log(characterList);
  const handleDeleteItem = (event) => {
    event.preventDefault();
    console.log('event', event);
  };

  return (
    <div className="character_list">
      {characterList.map((item) => {
        return (
          <Item
            key={item.url}
            name={item.name}
            aliases={item.aliases}
            titles={item.titles}
            povBooks={item.povBooks}
            tvSeries={item.tvSeries}
            onClick={handleDeleteItem}
          />
        );
      })}
    </div>
  );
};
export default List;
