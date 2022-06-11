// import './mypage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mypage.module.css';

function Mypage() {
  return(
    <>
      <h2 className={styles.mypage}>마이페이지</h2>

      <div className={styles.profile}>
        <div className={styles.user_profile}>
          <img src="/img/user_icon.jpg" alt="error" className={styles.user_icon}/>
          <div className={styles.user_info}>
            <div className={styles.nickname}>전재욱</div>
            <div className={styles.date}>최근 거래: 14일 전</div>
          </div>
        </div>
        

        <div className={styles.profile_menu}>
          <Link to="/user/mypage/soldlist"><img src="/img/buy.png" alt="error" className={styles.menu_icon}/></Link>
          <Link to="/user/mypage/buylist"><img src="/img/sold.png" alt="error" className={styles.menu_icon}/></Link>
          <Link to="/user/mypage/heartlist"><img src="/img/heart.png" alt="error" className={styles.menu_icon}/></Link>
          {/* <a href="#"><img src="/img/buy.png" alt="error" className={styles.menu_icon}/></a>
          <a href="#"><img src="/img/heart.png" alt="error" className={styles.menu_icon}/></a> */}
        </div>
        <div className={styles.menu_text}>
          <span style={{marginLeft: '250px', marginRight: '140px'}}>판매 내역</span>
          <span style={{marginRight: '150px'}}>구매 내역</span>
          <span>관심 목록</span>
        </div>
      </div>
    </>
  );
}

export default Mypage;