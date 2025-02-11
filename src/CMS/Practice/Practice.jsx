import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


function Practice() {
    const [pdfUrl, setPdfUrl] = useState(null);

    const inputObject ={
        "patientData": {
            "_id": "677a75eb18f1316d56dd33f6",
            "displayId": "KC-BU-2024-PT1000002",
            "branch": "677a3b6bb4f5258830c1e5c8",
            "businessUnit": "677a3afdb4f5258830c1e535",
            "mainPatientLinkedid": null,
            "isChainedWithMainPatient": false,
            "relation": null,
            "firstName": "Sandeep",
            "lastName": "Pachat",
            "profileImage": null,
            "email": "",
            "phone": "7907441232",
            "gender": "Male",
            "age": 36,
            "bloodGroup": "b-(+ve)",
            "patientGroup": null,
            "referedBy": null,
            "isActive": true,
            "deletedAt": null,
            "medicalHistory": [],
            "createdAt": "2025-01-05T12:07:07.209Z",
            "updatedAt": "2025-01-05T12:07:07.209Z",
            "__v": 0
        },
        "prescription": {
            "_id": "67a996ad235bbdb6b54ff466",
            "displayId": "KC-BR-2024-PR1000014",
            "__v": 0,
            "additionalAdvice": null,
            "branchId": "677a3b6bb4f5258830c1e5c8",
            "buId": "677a3afdb4f5258830c1e535",
            "caseSheetId": "677ba0414ea128428d846fda",
            "createdAt": "2025-02-10T06:03:25.558Z",
            "createdBy": null,
            "deletedAt": null,
            "doctorId": {
                "_id": "677a3bf2b4f5258830c1e63e",
                "displayId": "KC-BU-2024-EM1000003",
                "role": {
                    "_id": "677a3afdb4f5258830c1e44d",
                    "name": "Duty Doctor"
                },
                "branch": "677a3b6bb4f5258830c1e5c8",
                "businessUnit": "677a3afdb4f5258830c1e535",
                "roleId": 3,
                "firstName": "Doc3",
                "lastName": "br1",
                "email": "doc3br1@yopmail.com",
                "phone": "9847089333",
                "password": "$2b$10$8erNN9i8DHsnQw15hDN9l.0oAwmC8GqlipwopqQugRGgUdHnbt9vi",
                "tc": true,
                "isUserVerified": true,
                "isActive": true,
                "gender": "Male",
                "age": null,
                "bloodGroup": "",
                "patientGroup": null,
                "referedBy": null,
                "city": "",
                "state": "",
                "country": "",
                "ZipCode": "",
                "address": "aaa",
                "profileImage": null,
                "profileCreated": false,
                "panNumber": "",
                "adharNumber": "",
                "createdBy": "677a3afdb4f5258830c1e531",
                "deletedAt": null,
                "createdAt": "2025-01-05T07:59:46.828Z",
                "updatedAt": "2025-01-05T07:59:46.828Z",
                "__v": 0
            },
            "drugArray": [
                {
                    "drugName": "ParaCe",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "0-0-1",
                    "duration": "10",
                    "instruction": "154",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67a996ad6003cba61d285bf1"
                },
                {
                    "drugName": "Paracetamol 500Mg",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "0-0-1",
                    "duration": "10",
                    "instruction": "before food",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893552"
                },
                {
                    "drugName": "Paracetamol",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "1",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893553"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "cetracine",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "1-1-0",
                    "duration": "8",
                    "instruction": "before food",
                    "note": "",
                    "timing": "twice (morning and afternoon)",
                    "_id": "67aac672ed9f6438fd893554"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "20",
                    "freequency": "0-0-1",
                    "duration": "7",
                    "instruction": "after lunch",
                    "note": "",
                    "timing": "once (night)",
                    "_id": "67aac672ed9f6438fd893555"
                },
                {
                    "drugName": "crocin 20mg",
                    "drug": "",
                    "dosage": "2",
                    "freequency": "0-1-0",
                    "duration": "2",
                    "instruction": "before food",
                    "note": "",
                    "timing": "once (afternoon)",
                    "_id": "67aac672ed9f6438fd893556"
                }
            ],
            "nextVisitDate": null,
            "nextVisitDiscription": null,
            "patientId": "677a75eb18f1316d56dd33f6",
            "updatedAt": "2025-02-11T03:39:52.361Z"
        },
        "branch": {
            "_id": "677a3b6bb4f5258830c1e5c8",
            "displayId": "KC-BU-2024-BR1000001",
            "businessUnit": {
                "_id": "677a3afdb4f5258830c1e535",
                "name": "sandeep k Businsenss Unit",
                "emailContact": "sandeeppachat@yopmail.com"
            },
            "branchHead": null,
            "name": "Branch 1",
            "incorporationName": "Br1",
            "cinNumber": "",
            "gstNumber": "",
            "branchPrefix": "BR",
            "branchLogo": "1736063851778_banner_3.jpg",
            "emailContact": "br1@yopmail.com",
            "contactNumber": "9847089330",
            "city": "",
            "state": "",
            "country": "",
            "ZipCode": "",
            "address": "address",
            "isActive": true,
            "createdBy": null,
            "deletedAt": null,
            "createdAt": "2025-01-05T07:57:31.821Z",
            "updatedAt": "2025-01-05T07:57:34.562Z",
            "__v": 0
        },
        "activeCaseSheet": {
            "_id": "677ba0414ea128428d846fda",
            "displayId": "KC-BU-2024-CS1000002",
            "patientId": "677a75eb18f1316d56dd33f6",
            "branchId": "677a3b6bb4f5258830c1e5c8",
            "buId": null,
            "createdBy": "677a3afdb4f5258830c1e531",
            "cheifComplaints": [
                {
                    "tooth": [
                        "17"
                    ],
                    "complaints": [
                        {
                            "compId": {
                                "_id": "677a3afeb4f5258830c1e54a",
                                "complaintName": "Toothache"
                            },
                            "_id": "677ba1144ea128428d847104"
                        }
                    ],
                    "_id": "677ba1144ea128428d847103"
                },
                {
                    "tooth": [
                        "18"
                    ],
                    "complaints": [
                        {
                            "compId": {
                                "_id": "677a3afeb4f5258830c1e549",
                                "complaintName": "Swelling Large"
                            },
                            "_id": "677ba1144ea128428d847106"
                        }
                    ],
                    "_id": "677ba1144ea128428d847105"
                },
                {
                    "tooth": [
                        "UR"
                    ],
                    "complaints": [
                        {
                            "compId": {
                                "_id": "677a3afeb4f5258830c1e549",
                                "complaintName": "Swelling Large"
                            },
                            "_id": "677ba1144ea128428d847108"
                        }
                    ],
                    "_id": "677ba1144ea128428d847107"
                }
            ],
            "treatmentData": null,
            "isActive": true,
            "deletedAt": null,
            "drafted": false,
            "status": "In Progress",
            "clinicalFindings": [
                {
                    "tooth": [
                        "46"
                    ],
                    "findings": [
                        {
                            "findId": {
                                "_id": "677a3afeb4f5258830c1e555",
                                "findingsName": "Toothache"
                            },
                            "_id": "677ba12b4ea128428d84711e"
                        }
                    ],
                    "_id": "677ba12b4ea128428d84711d"
                }
            ],
            "medicalHistory": [],
            "investigation": [],
            "services": [],
            "procedures": [],
            "treatmentData2": [],
            "otherAttachment": [],
            "note": [],
            "createdAt": "2025-01-06T09:20:01.068Z",
            "updatedAt": "2025-01-06T09:23:55.394Z",
            "__v": 3,
            "diagnosis": [],
            "treatmentData3": []
        }
    }
    

    const createPdf = () => {
        const docDefinition = {
            pageSize: "A4",
            pageMargins: [40, 200, 40, 40], // Increased top margin to fit the header
            background: function () {
                return {
                    canvas: [
                        {
                            type: "rect",
                            x: 10,
                            y: 10,
                            w: 575, // Width of the border
                            h: 822, // Height of the border (A4 full height)
                            lineWidth: 0.5, // Thickness of the border
                        },
                    ],
                };
            },
    
            header: function (currentPage, pageCount) {
                return [
                    {
                        margin: [40, 20, 40, 20],
                        stack: [
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
                            { text: "Doc3\nDuty Doctor", style: "header1", margin: [0, 15, 0, 15] },
                            {
                                canvas: [{ type: "line", x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1, dash: { length: 2,space:2 },color:"#FFD700" }],
                                margin: [0, 5, 0, 2],
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
                                canvas: [{ type: "line", x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1, dash: { length: 2,space:2 },color:"#FFD700" }],
                                margin: [0, 2, 0, 2],
                            },
                        ],
                    },
                ];
            },
            content: [
                { text: "Medicine (Rx)", style: "header2", margin: [3, 2, 0, 5] },
                ...inputObject.prescription.drugArray.map((med, index) => ({
                    text: `${index + 1}. ${med.drugName} ----------- ${med.dosage} Tablets\n${med.dosage} Tablets x ${med.timing} ------------ ${med.freequency} ----------- ${med.duration} Days`,
                    style: "item",
                    margin: [3, 5, 0, 5],
                })),

            ],

            // content: [
            //     { text: "Medicine (Rx)", style: "header2", margin: [3, 2, 0, 5] },
            //     ...inputObject.prescription.drugArray.map((med, index) => ({
            //         margin: [3, 5, 0, 5],
            //         columns: [
            //             {
            //                 width: "30%", // Column for medicine name
            //                 text: `${index + 1}. ${med.drugName}`,
            //                 style: "item",
            //             },
            //             {
            //                 width: "70%", // Column for dosage & details (aligned properly)
            //                 text: `${med.dosage} Tablets\n${med.dosage} Tablets x ${med.timing} -------- ${med.freequency} -------- ${med.duration} Days`,
            //                 style: "item",
            //             },
            //         ],
            //     })),
            // ],
            

            styles: {
                header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
                subHeader: { fontSize: 8, margin: [0, 5, 0, 5] },
                item: { fontSize: 8, margin: [0, 5, 0, 5] },
                prescriptionNoValue: { fontSize: 8, bold: true, color: "#00ACC1" },
                caseIdValue: { fontSize: 8, bold: true, color: "#00ACC1" },
                header1: { fontSize: 12, bold: true, color: "#00ACC1" },
                header2: { fontSize: 18, bold: true, color: "#00ACC1" },
                footerStyle:{margin:[0,0,15,0]}
            },
            footer: function (currentPage, pageCount) {
                return {
                    text: `Page ${currentPage} of ${pageCount}`,
                    alignment:"right",
                    style: "footerStyle",
                };
            },


        };

        pdfMake.createPdf(docDefinition).getBlob((blob) => {
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

export default Practice;


