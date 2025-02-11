import React from 'react'
import pdfMake from "pdfmake/build/pdfmake"
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useEffect,useState } from 'react'

pdfMake.addVirtualFileSystem(pdfFonts);



function Pdfmaker() {
    const docDefinition = {
        content: [
          {text: `This is a header ${Math.random()*100}`, style: 'header'},
          'No styling here, this is a standard paragraph',
          {text: 'Another text', style: 'anotherStyle'},
          {text: 'Multiple styles applied', style: ['header', 'anotherStyle']},
    
            

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
    
      const[url,setUrl]=useState(null)

      const createPdf=()=>{
        const pdfGenerator=pdfMake.createPdf(docDefinition)
        // console.log(pdfGenerator)
        pdfGenerator.getBlob((blob)=>{
            const url=URL.createObjectURL(blob)
            setUrl(url)
        })
      }
  return (
    <>
    <button onClick={createPdf}>Generate</button>
    {
        url &&(
            <div>{url}</div>

        )
    }
      
    </>
  )
}

export default Pdfmaker
