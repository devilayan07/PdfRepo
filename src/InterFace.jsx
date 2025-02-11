import React from 'react';

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
  styles: {
    header: {
      fontSize: 22,
      bold: true,
    },
    anotherStyle: {
      italics: true,
      alignment: 'right',
    },
  },
};

const InterFace =()=> {
  return (
    <div>
    </div>
  );
}

export default InterFace;

