
const TopMain=()=>{
    return(
        <div className="main">
        <div className="overview">
          <div className="intro">
            <h2>ゲレンデをお探しします！</h2>
            <p>宿の予約とゲレンデの検索を一括で出来るサイトです</p>
          </div>
          <div className="login-form">
            <h2>Login</h2>
            <div className="form-wrapper">
              <p>ID</p>
              <p>Password</p>
              <div className="btn-wrapper">
              </div>
              <div className="Sign-up">
                <a href="/SignUp" className="btn">Sign up</a>
              </div>
            </div>
          </div>
          </div>
        </div> 
    );
}

export default TopMain;
