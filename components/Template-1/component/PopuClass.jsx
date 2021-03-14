import React from 'react';

const PopuClass=(props)=>{
    return (
       
<div className="blog-wrap flight-wrap ">
  <div className="container">
    <div className="title">
      <h1> {props?.heading} </h1>
    </div>
    <ul className="row unorderList">
      <li className="col-lg-4">
        <div className="blog_box">
          <div className="blogImg"><img src="/images/template_1_Images/blog1.jpg" alt=""/>
            <div className="time_box"><span>08:00 am - 10:00 am</span></div>
          </div>
          <div className="path_box">
            <h3><a href="#">Education Programs</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor gravida.</p>
          </div>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="blog_box">
          <div className="blogImg"><img src="/images/template_1_Images/blog2.jpg" alt=""/>
            <div className="time_box"><span>08:00 am - 10:00 am</span></div>
          </div>
          <div className="path_box">
            <h3><a href="#">Games Program</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur.</p>
          </div>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="blog_box">
          <div className="blogImg"><img src="/images/template_1_Images/blog3.jpg" alt="" />
            <div className="time_box"><span>08:00 am - 10:00 am</span></div>
          </div>
          <div className="path_box">
            <h3><a href="#">Labs Programs</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
 

    )
}

export default PopuClass;


// const classData =[
//     {
//         image:"https://content3.jdmagicbox.com/comp/ghaziabad/r5/pwfl1541953085f4a4r5/catalogue/-xqva2miirj-250.jpg",
//         classDuration:"1:00 am - 10:00 am",
//         topic:"Education Programs System",
//         detailed:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         studentCount:40,
//         fee:200

//     },
//     {
//         image:"https://content3.jdmagicbox.com/comp/ghaziabad/r5/pwfl1541953085f4a4r5/catalogue/-xqva2miirj-250.jpg",
//         classDuration:"12:00 am - 13:00 am",
//         topic:"Games Program held in a Week",
//         detailed:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         studentCount:60,
//         fee:150

//     } ,
//      {
//         image:"https://content3.jdmagicbox.com/comp/ghaziabad/r5/pwfl1541953085f4a4r5/catalogue/-xqva2miirj-250.jpg",
//         classDuration:"06:00 am - 1:00 am",
//         topic:"Labs Proramming",
//         detailed:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         studentCount:80,
//         fee:210

//     }
// ]