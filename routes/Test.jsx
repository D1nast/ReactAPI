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

const  Test=()=>{
    // const [api1, setAPI1] = useState([]);
    // const [api2, setAPI2] = useState([]);
    // const [api3, setAPI3] = useState([]);
    // const [api4, setAPI4] = useState([]);
    useEffect(()=>{
        const getAPI=async()=>{
            const response=await axios.get("https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?format=json&largeClassCode=japan&middleClassCode=okinawa&smallClassCode=nahashi&applicationId=1001318956766170232");
            const result=response.data;
            const resultStr=JSON.stringify(result);
            const obj=JSON.parse(resultStr);
            const getones=JSON.stringify(obj.hotels);
            console.log(getones[1].hotelBasicInfo);
            const list=getones.map((getone)=>{
              return(
                <li>
                  <h1>hotel is {getone[0].hotelBasicInfo}</h1>
                </li>
              );
            });
            return <ul>{list}</ul>
        };
        getAPI();
    },[]);}
      
    export default Test;
//     return(
//         <div className="main">
//              <div style={style}className="photo">
//                 <div style={contentsStyle}className="photoContents">
//                  <div  style={photoStyle}className="photoImage"></div>
//                  <div className="photoExplain">
//                   <h3>{api1}</h3>
//                 <a href={api2}>リンク先</a>
//                   <p>{api3}</p>
//                  </div>
//                  </div>
//                  <div style={contentsStyle}className="photoContents">
//                  <div  style={photoStyle}className="photoImage"></div>
//                  <div className="photoExplain">
//                   <h3>{api1}</h3>
//                 <a href={api2}>リンク先</a>
//                   <p>{api3}</p>
//                  </div>
//                  </div>
//                 <div style={contentsStyle}className="photoContents">
//                  <div className="photoImage"></div>
//                  <div className="photoExplain">
//                   <h3>aaa</h3>
//                   <p></p>                
//                 </div>
//                 </div>
//                 <div style={contentsStyle}className="photoContents">
//                  <div className="photoImage"></div>
//                  <div className="photoExplain">
//                   <h3>aaa</h3>
//                   <p></p>                
//                   </div>
//                 </div>
//                 <div style={contentsStyle}className="photoContents">
//                  <div className="photoImage"></div>
//                  <div className="photoExplain">
//                   <h3>aaa</h3>
//                   <p></p>
//                   </div>
//                 </div>
//                 <div style={contentsStyle}className="photoContents">
//                  <div className="photoImage"></div>
//                  <div className="photoExplain">
//                   <h3>aaa</h3>
//                   <p></p>                
//                 </div>
//                 </div>
//             </div>
//             </div>
//     );
// }
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
