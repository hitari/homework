import React from 'react';

const Filter = ({ filterList }) => {
  // 필터가 없으면 빈 fragment 반환
  if (!filterList.length) return <></>;

  return (
    <div>
      <ul className="filter">
        {filterList.map((item) => {
          return (
            <li className="filter_item" key={item.name}>
              <input type="checkbox" id="filter0" />
              <label htmlFor="filter0" className="filter_label">
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
