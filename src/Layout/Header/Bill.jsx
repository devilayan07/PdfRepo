// import React, { useEffect, useState } from "react";

// const Bill = ({ billSummary }) => {
//   console.log(billSummary);

//   const [headerData, setHeaderData] = useState([]); // Stores bill numbers
//   const [bodyData, setBodyData] = useState([]); // Stores item details



// useEffect(()=>{
//   console.log(bodyData,'boyData')
// },[bodyData])



//   // Function to add header data
//   const addHeaderData = () => {
//     setHeaderData((prev) => [...prev, billSummary.billnumber]); // Append bill number
//   };

//   // Function to add body data
//   const addBodyData = () => {
//     setBodyData((prev) => [...prev, ...billSummary.itemDetails]); // Append all item details
//   };

//   return (
//     <div className="ms-10 d-flex">
//       <div className="container1">
//         <div className="item bg-secondary">
//           <div className="d-flex ms-4 mt-3">
//             <div className="dropdown me-1">
//               <button
//                 type="button"
//                 className="btn btn-secondary dropdown-toggle"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 data-bs-offset="10,20"
//               >
//                 Bill 1
//               </button>
//               <ul className="dropdown-menu">
//                 <li>
//                   <button className="dropdown-item" onClick={addHeaderData}>
//                     Header
//                   </button>
//                 </li>
//                 <li>
//                   <button className="dropdown-item" onClick={addBodyData}>
//                     Body
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="item bg-secondary-subtle p-3 mt-3">
//           {/* Display all header data */}
//           {headerData.length > 0 &&
//             headerData.map((billNum, index) => (
//               <h5 key={index}>Bill Number: {billNum}</h5>
//             ))}

//           {/* Display all body data */}
//           {bodyData.length > 0 &&
//             bodyData.map((item, index) => (
//               <div key={index}>
//                 <h5>Item Name: {item?.productname}</h5>
//                 <h5>Qty: {item?.Qty}</h5>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bill;



import React, { useEffect, useState } from "react";
import PdfCreator from "../../Components/PdfCreator";

const Bill = ({ billSummary }) => {
  const [headerData, setHeaderData] = useState([]); // Stores bill numbers
  const [bodyData, setBodyData] = useState([]); // Stores item details

  // Function to add header data
  const addHeaderData = () => {
    setHeaderData((prev) => [...prev, billSummary.billnumber]); // Append bill number
  };

  // Function to add body data
  const addBodyData = () => {
    setBodyData((prev) => [...prev, ...billSummary.itemDetails]); // Append all item details
  };

  return (
    <div className="ms-10 d-flex">
      <div className="container1">
        <div className="item bg-secondary">
          <div className="d-flex ms-4 mt-3">
            <div className="dropdown me-1">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="10,20"
              >
                Bill Options
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={addHeaderData}>
                    Add Header
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={addBodyData}>
                    Add Body
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="item bg-secondary-subtle p-3 mt-3">
          <h4>Bill Summary</h4>
          {headerData.length > 0 &&
            headerData.map((billNum, index) => (
              <h5 key={index}>Bill Number: {billNum}</h5>
            ))}

          {bodyData.length > 0 &&
            bodyData.map((item, index) => (
              <div key={index}>
                <h5>Item: {item?.productname}</h5>
                <h5>Qty: {item?.Qty}</h5>
              </div>
            ))}
        </div>

        {/* Pass data to Pdfmaker */}
        <PdfCreator headerData={headerData} bodyData={bodyData} />
      </div>
    </div>
  );
};

export default Bill;


