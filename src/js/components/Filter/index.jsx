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
              className="filter_item"
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
        <li className="filter_item">
          <input type="checkbox" id="filter3" />
          <label htmlFor="filter3" className="filter_label">
            <span>초기화</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default Filter;
