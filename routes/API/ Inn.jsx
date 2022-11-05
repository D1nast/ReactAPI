import { useState,useEffect } from "react";
import axios from "axios";

const style={
    paddingTop: '100px',
    paddingBottom:'400px',
};

const contentsStyle={
  width:'40%',
  marginTop:'40px',
  paddingBottom:'80px',
};

const Inn=()=>{
    const [api1, setAPI1] = useState([]);
    const [api2, setAPI2] = useState([]);
    const [api3, setAPI3] = useState([]);
    const [api4, setAPI4] = useState([]);
    useEffect(()=>{
        const getAPI=async()=>{
            const response=await axios.get("https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?format=json&largeClassCode=japan&middleClassCode=okinawa&smallClassCode=nahashi&applicationId=1001318956766170232");
            const result=response.data;
            const resultStr=JSON.stringify(result);
            const obj=JSON.parse(resultStr);
            const getones=JSON.stringify(obj.hotels);
            console.log(getones);
             const innNumber=JSON.stringify(obj.pagingInfo.last);
             const num=29;
             //以降APIの値をReactに代入
             const objStr=JSON.stringify(obj.hotels[num].hotel[0].hotelBasicInfo.hotelName).replace(/\"/g,"");
             const objStr2=JSON.stringify(obj.hotels[num].hotel[0].hotelBasicInfo.hotelInformationUrl).replace(/\"/g,"");
             const objStr3=JSON.stringify(obj.hotels[num].hotel[0].hotelBasicInfo.hotelSpecial).replace(/\"/g,"");
             const objStr4=JSON.stringify(obj.hotels[num].hotel[0].hotelBasicInfo.hotelImageUrl).replace(/\"/g,"");
             setAPI1(objStr);
             setAPI2(objStr2);
             setAPI3(objStr3);
             setAPI4(objStr4);
             console.log(innNumber);
            //配列の数に応じて変更すれば良い
            //ラストの数だけ配列を増やしてAPIの実行を行う
        };
        getAPI();
    },[]);
    const photoStyle={
      backgroundImage:
         `url(${api4})`,
      };
     
    return(
        <div className="main">
             <div style={style}className="photo">
                <div style={contentsStyle}className="photoContents">
                 <div  style={photoStyle}className="photoImage"></div>
                 <div className="photoExplain">
                  <h3>{api1}</h3>
                <a href={api2}>リンク先</a>
                  <p>{api3}</p>
                 </div>
                 </div>
                 <div style={contentsStyle}className="photoContents">
                 <div  style={photoStyle}className="photoImage"></div>
                 <div className="photoExplain">
                  <h3>{api1}</h3>
                <a href={api2}>リンク先</a>
                  <p>{api3}</p>
                 </div>
                 </div>
                <div style={contentsStyle}className="photoContents">
                 <div className="photoImage"></div>
                 <div className="photoExplain">
                  <h3>aaa</h3>
                  <p></p>                
                </div>
                </div>
                <div style={contentsStyle}className="photoContents">
                 <div className="photoImage"></div>
                 <div className="photoExplain">
                  <h3>aaa</h3>
                  <p></p>                
                  </div>
                </div>
                <div style={contentsStyle}className="photoContents">
                 <div className="photoImage"></div>
                 <div className="photoExplain">
                  <h3>aaa</h3>
                  <p></p>
                  </div>
                </div>
                <div style={contentsStyle}className="photoContents">
                 <div className="photoImage"></div>
                 <div className="photoExplain">
                  <h3>aaa</h3>
                  <p></p>                
                </div>
                </div>
            </div>
            </div>
    );
}

export default Inn;


//const [api, setAPI] = useState([]);
// const onClick = async () => {
//     const response=await axios.get("https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?format=json&largeClassCode=japan&middleClassCode=okinawa&smallClassCode=nahashi&applicationId=1001318956766170232");
//     const result=response.data
//     const resultJSON=JSON.stringify(result);
//     const obj=JSON.parse(resultJSON);
//     const objstr=JSON.stringify(obj.hotels[1]);
//     const jjj =JSON.parse(objstr);
//     const ggg=JSON.stringify(jjj.hotel[0].hotelBasicInfo.hotelName);
//     console.log(ggg);
    //setAPI(response.data);
    //alert(JSON.stringify(api));
