import React from 'react';

const CharacterPage = () => {
  return (
    <div>
      <div>무신사 과제</div>
      <div>
        <ul>
          <li>
            <input type="checkbox" id="filter0" />
            <label for="filter0">
              <span>생존인물만</span>
            </label>
          </li>
          <li>
            <input type="checkbox" id="filter1" />
            <label for="filter1">
              <span>여자</span>
            </label>
          </li>
          <li>
            <input type="checkbox" id="filter2" />
            <label for="filter2">
              <span>tvSeries 없음</span>
            </label>
          </li>
          <li>
            <input type="checkbox" id="filter3" />
            <label for="filter3">
              <span>초기화</span>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <dl>
            <div>
              <dt>name</dt>
              <dd>홍길동</dd>
            </div>
            <div>
              <dt>aliases</dt>
              <dd>소설주인공, 도둑, 열혈청년</dd>
            </div>
            <div>
              <dt>title</dt>
              <dd>신홍길동전, 도둑들</dd>
            </div>
            <div>
              <dt>books</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>tvSeries</dt>
              <dd>1</dd>
            </div>
          </dl>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
};
export default CharacterPage;
