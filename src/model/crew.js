const CREW = `
  <main>
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id="frontend-course"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course"/>
        <label for="backend">백엔드</label>
      </div>
    </section>
    <section>
      <h3 id="crew-subtitle-manage">프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input"/>
        <button id="add-crew-button">확인</button>
      </form>
    </section>
    <section>
      <h3 id="crew-subtitle-list">프론트엔드 크루 목록</h3>
      <table border="1" id = "crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody id="crew-tbody">
          <tr>
            <td>1</td>
            <td>준</td>
            <td>
              <button class="delete-crew-button">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
`;

export default CREW;