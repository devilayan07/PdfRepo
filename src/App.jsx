import './App.css'
import Practice from './CMS/Practice/Practice'
// import PaitentData from './Components/PaitentData/PaitentData'
import Bill from './Layout/Header/Bill'
import Pdfmaker from './Pdfmaker'
import Portal from './Portal'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const billSummary = {
  billnumber: 1,
  billdate: '12-05-1988',
  createBy: 'sandeep',
  totalAmount: 5000,
  taxableAmount: 4000,
  tax: 1000,
  itemDetails: [
    {
      productname: 'product 1',
      Qty: 1,
      unitPrice: 2000,
      tax: 500,
    },
    {
      productname: 'product 2',
      Qty: 2,
      unitPrice: 1000,
      tax: 500,
    },
  ],
  // styles: {
  //   header: {
  //     fontSize: 22,
  //     bold: true,
  //   },
  //   anotherStyle: {
  //     italics: true,
  //     alignment: 'right',
  //   },
  // },
};

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Portal/> */}
        <Routes>
           <Route path='/' element={<Practice/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
