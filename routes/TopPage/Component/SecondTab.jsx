import { Link } from "react-router-dom";

const SecondTab=()=>{
    return(
        <div className="tab-content">
        <div className="searchPrefecture">
          <ul>
            <div className="HokkaidoTohoku">
              <h5>北海道・東北</h5>
              <li><a href="/hokkaido" className="borderLeft">北海道</a></li>
              <li><a href="/aomori" className="borderLeft">青森</a></li>
              <li><a href="/iwate" className="borderLeft">岩手</a></li>
              <li><a href="/akita" className="borderLeft">秋田</a></li>
              <li><a href="/miyagi" className="borderLeft">宮城</a></li>
              <li><a href="/yamagata" className="borderLeft">山形</a></li>
              <li><a href="/hukusima">福島</a></li>
            </div>
            <div className="Kanto">
              <h5>関東</h5>
              <li><a href="/totigi" className="borderLeft">栃木</a></li>
              <li><a href="/ibaragi" className="borderLeft">茨城</a></li>
              <li><a href="/gunma" className="borderLeft">群馬</a></li>
              <li><a href="/saitama" className="borderLeft">埼玉</a></li>
              <li><a href="/tiba" className="borderLeft">千葉</a></li>
              <li><a href="/tokyo" className="borderLeft">東京</a></li>
              <li><a href="/kanagawa">神奈川</a></li>
            </div>
            <div className="Chubu">
              <h5>中部</h5>
              <li><a href="/nigata" className="borderLeft">新潟</a></li>
              <li><a href="/toyama" className="borderLeft">富山</a></li>
              <li><a href="/ishikawa" className="borderLeft">石川</a></li>
              <li><a href="/hukui" className="borderLeft">福井</a></li>
              <li><a href="/yamanashi" className="borderLeft">山梨</a></li>
              <li><a href="/nagano" className="borderLeft">長野</a></li>
              <li><a href="/gihu" className="borderLeft">岐阜</a></li>
              <li><a href="/shizuoka" className="borderLeft">静岡</a></li>
              <li><a href="/aiti">愛知</a></li>
            </div>
            <div className="Kinki">
              <h5>近畿</h5>
              <li><a href="/mie" className="borderLeft">三重</a></li>
              <li><a href="shiga" className="borderLeft">滋賀</a></li>
              <li><a href="/kyoto" className="borderLeft">京都</a></li>
              <li><a href="/osaka" className="borderLeft">大阪</a></li>
              <li><a href="/hyogo" className="borderLeft">兵庫</a></li>
              <li><a href="/nara" className="borderLeft">奈良</a></li>
              <li><a href="/wakayama">和歌山</a></li>
            </div>
            <div className="Chugoku">
              <h5>中国</h5>
              <li><a href="/tottori" className="borderLeft">鳥取</a></li>
              <li><a href="/shimane" className="borderLeft">島根</a></li>
              <li><a href="/okayama" className="borderLeft">岡山</a></li>
              <li><a href="/hirosima" className="borderLeft">広島</a></li>
              <li><a href="/yamaguti">山口</a></li>
            </div>
            <div className="Sikoku">
              <h5>四国</h5>
              <li><a href="/tokushima" className="borderLeft">徳島</a></li>
              <li><a href="/kagawa" className="borderLeft">香川</a></li>
              <li><a href="/ehime" className="borderLeft">愛媛</a></li>
              <li><a href="/kochi">高知</a></li>
            </div>
            <div className="Kyushu">
              <h5>九州</h5>
              <li><a href="/hukuoka" className="borderLeft">福岡</a></li>
              <li><a href="/saga" className="borderLeft">佐賀</a></li>
              <li><a href="/nagasaki" className="borderLeft">長崎</a></li>
              <li><a href="/kumamoto" className="borderLeft">熊本</a></li>
              <li><a href="/ohita" className="borderLeft">大分</a></li>
              <li><a href="/miyazaki" className="borderLeft">宮崎</a></li>
              <li><a href="/kagoshima" className="borderLeft">鹿児島</a></li>
              <li><a href="/okinawa">沖縄</a></li>
            </div>
          </ul>
        </div>
      </div>
    );
}

export default SecondTab;