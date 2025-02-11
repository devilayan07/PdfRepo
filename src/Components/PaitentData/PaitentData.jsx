import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.addVirtualFileSystem(pdfFonts);
function PatientData() {
    const [pdfUrl, setPdfUrl] = useState(null);

    const inputObject = {
        patientData: {
            displayId: "KC-BU-2024-PT1000002",
            firstName: "Sandeep",
            lastName: "Pachat",
            email: "",
            phone: "7907441232",
            gender: "Male",
            age: 36,
            bloodGroup: "B-(+ve)",
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

    const createPdf = () => {
        const docDefinition = {
            pageSize: "A4",

            content: [
                {



                    columns: [
                        {
                            stack: [
                                {
                                    text: [
                                        { text: "Prescription No: ", style: "subHeader" },
                                        { text: inputObject.prescription.displayId, style: "prescriptionNoValue" },
                                    ],
                                },
                                {
                                    text: [
                                        { text: "Case ID: ", style: "subHeader" },
                                        { text: inputObject.prescription.caseSheetId, style: "caseIdValue" },
                                    ],
                                },
                            ],
                            width: "50%",
                        },
                        {
                            text: `Address: ${inputObject.branch.address}\nContact: ${inputObject.branch.contactNumber}\nEmail: ${inputObject.branch.emailContact}`,
                            width: "50%",
                            alignment: "right",
                            style: "subHeader",
                        },
                    ],
                },
                {
                    text: "Doc3\nDuty Doctor",
                    style: "header1",
                    margin: [0, 10, 0, 10],
                },
                {
                    canvas: [
                        {
                            type: "line",
                            x1: 0,
                            y1: 5,
                            x2: 515,
                            y2: 5,
                            lineWidth: 1,
                            lineColor: "#000",
                            dash: { length: 5 },
                        },
                    ],
                    margin: [0, 0, 0, 10],
                },
                {
                    columns: [
                        {
                            text: `Patient: ${inputObject.patientData.firstName} ${inputObject.patientData.lastName} | Gender: ${inputObject.patientData.gender} | Blood Group: ${inputObject.patientData.bloodGroup} | Age: ${inputObject.patientData.age} Yrs`,
                            width: "70%",
                            style: "subHeader",
                        },
                        {
                            text: `Date: 2025-02-10 | Time: 06:03 am`,
                            width: "30%",
                            alignment: "right",
                            style: "subHeader",
                        },
                    ],
                },
                {
                    canvas: [
                        {
                            type: "line",
                            x1: 0,
                            y1: 5,
                            x2: 515,
                            y2: 5,
                            lineWidth: 1,
                            lineColor: "#000",
                            dash: { length: 2 },
                        },
                    ],
                    margin: [0, 0, 0, 5],
                },
                { text: "Medicine (Rx)", style: "header2", margin: [3, 20, 0, 10] },
                ...inputObject.prescription.drugArray.map((med, index) => ({
                    text: `${index + 1}. ${med.drugName} - ${med.dosage} Tablets\n${med.dosage} Tablets x ${med.timing} --- ${med.frequency} --- ${med.duration} Days`,
                    style: "item",
                    margin: [3, 5, 0, 5],
                })),
            ],
            styles: {
                header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
                subHeader: { fontSize: 8, margin: [0, 5, 0, 5] },
                item: { fontSize: 8, margin: [0, 5, 0, 5] },
                prescriptionNoValue: { fontSize: 8, bold: true, color: "#00ACC1" },
                caseIdValue: { fontSize: 8, bold: true, color: "#00ACC1" },
                header1: { fontSize: 12, bold: true, color: "#00ACC1" },
                header2: { fontSize: 18, bold: true, color: "#00ACC1" },
            },

            footer: function (currentPage, pageCount) {
                return {
                    text: `Page ${currentPage} of ${pageCount}`,
                    style: "footerStyle",
                };
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

export default PatientData;



