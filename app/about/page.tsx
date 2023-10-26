export default function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <article className="cont_01">
        <h3>Summary</h3>
        <div className="summary_wrap">
          <ul>
            <li>
              <dl>
                <dt>성명</dt>
                <dd>표장헌</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>생년월일</dt>
                <dd>1990.11.15</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>휴대폰</dt>
                <dd>010.3152.2838</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>이메일</dt>
                <dd>ifheone@naver.com</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>주소</dt>
                <dd>서울시 구로구</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>깃허브</dt>
                <dd>
                  <a
                    href="https://github.com/ifheone"
                    target="_blank"
                    title="표장헌 페이스북 새창"
                  >
                    https://github.com/ifheone
                  </a>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>취미</dt>
                <dd>책읽기, 드라마보기, 웹툰보기</dd>
              </dl>
            </li>
          </ul>
        </div>
      </article>
      <article className="cont_02">
        <h3>Future goals</h3>
        <p className="p_cont">
          마부작침이라는 사자성어를 좋아합니다. 도끼를 갈아 바늘을 만든다 라는
          뜻을 가지고 있습니다.
          <br />
          현재 그리고 앞으로도 저에게 가장 필요한 사자성어입니다.
          <br />
          꾸준히 성장하고, 노력하며 더 나은 홈페이지를 사용자들에게 보여주기
          위해 더욱더 열심히 하겠습니다.
        </p>
      </article>
      <article className="cont_03">
        <h3>Web Publisher?</h3>
        <p>보이지 않는 인터넷을 사람들에게 보이게 하는 역할을 합니다.</p>
      </article>
    </section>
  );
}
