import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.addVirtualFileSystem(pdfFonts);


// pdfMake.vfs = pdfFonts.pdfMake.vfs;

function PdfCreator({ headerData, bodyData }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  // Function to create PDF
  const createPdf = () => {
    const docDefinition = {
      content: [
        { text: "Bill Summary", style: "header" },
        ...headerData.map((billNum, index) => ({
          text: `Bill Number: ${billNum}`,
          style: "billNumber",
          margin: [0, 10, 0, 5],
        })),
        { text: "Items List", style: "subHeader", margin: [0, 10, 0, 5] },
        ...bodyData.map((item, index) => [
          { text: `Item: ${item.productname}`, style: "item" },
          { text: `Qty: ${item.Qty}`, style: "qty" },
        ]),
      ],

      styles: {
        header: { fontSize: 22, bold: true, alignment: "center", margin: [0, 10, 0, 20] },
        billNumber: { fontSize: 14, bold: true, color: "blue" },
        subHeader: { fontSize: 18, bold: true, decoration: "underline" },
        item: { fontSize: 12, margin: [0, 5, 0, 0] },
        qty: { fontSize: 12, italics: true },
      },
    };

    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    });
  };

  return (
    <>
      <button onClick={createPdf} className="btn btn-primary mt-3">
        Generate PDF
      </button>
      {pdfUrl && (
        <div>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Open PDF
          </a>
        </div>
      )}
    </>
  );
}

export default PdfCreator;
