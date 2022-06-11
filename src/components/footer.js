import "../styles.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div class="l_footer">
        <img src="/img/logo.png" alt="error" style={{width:'50px', marginRight:'10px'}}/>
        <b>DKU마켓</b>
      </div>

      <div class="r_footer">
        <pre>
          고객문의: qwer@naver.com                 제휴문의: qwer@naver.com
          <br />
          지역광고: qwer@naver.com                 PR광고: qwer@naver.com
        </pre>
        <hr style={{width:'100%', border:'1px solid #e6e6e6'}}/>
        경기 용인시 수지구 죽전로 152 단국대학교 소프트웨어학과 (ICT관 501호)
        <br />
        Copyrightⓒ  Opensource Team Project. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
