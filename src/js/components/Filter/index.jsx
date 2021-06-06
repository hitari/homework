import React from 'react';

const Filter = ({ filters, handleFilterClick }) => {
  // 필터가 없으면 빈 fragment 반환
  if (!filters.length) return <></>;

  return (
    <div>
      <ul className="filter">
        {filters.map((item) => {
          return (
            <li
              className={'filter_item' + (item.isActive ? ' active' : '')}
              key={item.name}
              onClick={(event) => {
                handleFilterClick(event, item);
              }}
            >
              <input type="checkbox" id={`filter-${item.name}`} />
              <label htmlFor={`filter-${item.name}`} className="filter_label">
                <span>{item.name}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Filter;
