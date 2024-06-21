// import { useEffect, useState } from "react";
// import React from 'react';
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { useLocation } from "react-router-dom";

// function item() {

  

//   const [apidata, SetData] = useState([]);
//   const location=useLocation;
//   useEffect(() => {
   
//         getData(data);
//         // console.log(data);
//   }, []);
  
//   async function getData()
//   {
//       const data=await fetch("https://fakestoreapi.com/products")
//       const data1=await data.json
//     //   console.log(data1)
//     SetData(data1);
//   }

//   return (
//     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
//     {
//       apidata.map((item,i)=>
//         <MDBCol key={i}> 
//       <MDBCard className='h-100'>
//         <MDBCardImage
//           src={item.image} 
//           alt='...'
//           position='top' style={{width:"100px",height:"100px"}}
//         />
//         <MDBCardBody>
//           <MDBCardTitle>{item.title}</MDBCardTitle>
//           <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
//           <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
//           <MDBCardText>
//           {item.description.slice(0,200)}
//           </MDBCardText>
//           <MDBBtn>View Details</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//     ) 
//     }
//   </MDBRow>
    
//   );
// }
// export default item;
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useLocation } from "react-router-dom";
function Item()
{
    const [apidata,setData]=useState({})
     const location=useLocation()
    useEffect(()=>{
        getData()
    },[])
    
    async function getData()
    {
        const data=await fetch("https://fakestoreapi.com/products/"+location.state.name)
       const data1=await data.json()
      // console.log(data1)
       setData(data1)
    }
    return(
        <div>
            <br></br>
          <center>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
         {
            // apidata.map((item,i)=>
               
            // )

            <MDBCol >
            <MDBCard>
             <center>
             <MDBCardImage
                src={apidata.image} 
                alt='...'
                position='top' style={{width:"100px", height:"100px"}}
              />
             </center>
              <MDBCardBody>
                <MDBCardTitle>{apidata.title}</MDBCardTitle>
                <MDBCardTitle style={{color:"red"}}>{apidata.price*80} Rs</MDBCardTitle>
                <MDBCardTitle style={{color:"green"}}>{apidata.category}</MDBCardTitle>
                <MDBCardText>
                  {apidata.description}
                </MDBCardText>
                <MDBCardText>
                  {apidata.rating.rate}
                </MDBCardText>
                <MDBCardText>
                  {apidata.rating.count}
                </MDBCardText>
                <MDBBtn>By Now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
         }
    </MDBRow>
          </center>
        </div>
    )
}
export default Item