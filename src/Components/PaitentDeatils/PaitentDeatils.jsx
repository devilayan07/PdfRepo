import React from 'react'
import PatientData from '../PaitentData/PaitentData';

const inputObject = {
    patientData: {
      displayId: "KC-BU-2024-PT1000002",
      firstName: "Sandeep",
      lastName: "Pachat",
      email: "",
      phone: "7907441232",
      gender: "Male",
      age: 36,
      bloodGroup: "b-(+ve)",
    },
    prescription: {
      displayId: "KC-BR-2024-PR1000014",
      caseSheetId: "KC-BU-2024-CS1000002",
      drugArray: [
        { drugName: "ParaCe", dosage: "2", frequency: "0-0-1", duration: "10", instruction: "154", timing: "once (night)" },
        { drugName: "Paracetamol 500Mg", dosage: "2", frequency: "0-0-1", duration: "10", instruction: "before food", timing: "once (night)" },
        { drugName: "Paracetamol", dosage: "4", frequency: "2-2-0", duration: "1", instruction: "", timing: "twice (morning and afternoon)" },
        { drugName: "Cetracine", dosage: "4", frequency: "2-2-0", duration: "8", instruction: "", timing: "twice (morning and afternoon)" },
        { drugName: "Crocin 20mg", dosage: "20", frequency: "0-0-1", duration: "7", instruction: "", timing: "once (night)" },
        { drugName: "Crocin 20mg", dosage: "2", frequency: "0-2-0", duration: "2", instruction: "", timing: "once (afternoon)" },
      ],
    },
    branch: {
      address: "address...",
      contactNumber: "9847089330",
      emailContact: "brl@yopmail.com",
    },
  };


function PaitentDeatils() {

  return (
    <>
      
    </>
  )
}

export default PaitentDeatils
