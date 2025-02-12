import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


function Practice() {
    const [pdfUrl, setPdfUrl] = useState(null);

    const toDataURL = (url, callback) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            let reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    };

    const inputObject = {
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
        const imageUrl = "https://cdn.thebrandingjournal.com/wp-content/uploads/2019/05/chanel_logo_the_branding_journal.jpg";
    
        toDataURL(imageUrl, function (base64Image) {
            // If no medicine data is available, stop PDF generation
            if (!inputObject.prescription.drugArray || inputObject.prescription.drugArray.length === 0) {
                alert("No data available to generate PDF.");
                return;
            }
    
            const contentArray = [
                { text: "Medicine (Rx)", style: "header2", margin: [3, 0, 0, 2] },
                ...inputObject.prescription.drugArray.map((med, index) => ({
                    text: `${index + 1}. ${med.drugName} ----------- ${med.dosage} Tablets\n${med.dosage} Tablets x ${med.timing} ------------ ${med.freequency} ----------- ${med.duration} Days`,
                    style: "item",
                    margin: [3, 5, 0, 15],
                })),
            ];
    
            const docDefinition = {
                pageSize: "A4",
                pageMargins: [40, 180, 40, 40],
    
                background: function () {
                    return {
                        canvas: [
                            {
                                type: "rect",
                                x: 10,
                                y: 10,
                                w: 575,
                                h: 822,
                                lineWidth: 0.1,
                                r: 8,
                            },
                        ],
                    };
                },
    
                header: function (currentPage, pageCount) {
                    return [
                        {
                            margin: [40, 20, 40, 5],
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
                                                    margin: [0, 12, 0, 0]
                                                },
                                                {
                                                    text: [
                                                        { text: "Case ID: ", style: "subHeader" },
                                                        { text: inputObject.patientData.displayId, style: "caseIdValue" },
                                                    ],
                                                    margin: [0, 5, 0, 0]
                                                },
                                            ],
                                            width: "50%",
                                        },
                                        {
                                            stack: [
                                                {
                                                    image: base64Image,
                                                    fit: [80, 50],
                                                    alignment: "right",
                                                    margin: [0, 0, 0, 5],
                                                },
                                            ],
                                            width: "50%",
                                        },
                                    ],
                                },
                                {
                                    columns: [
                                        {
                                            stack: [
                                                { text: "Doc3" },
                                                { text: "Duty Doctor", margin: [0, 3, 0, 0] }
                                            ],
                                            width: "50%",
                                            style: "header1"
                                        },
                                        {
                                            stack: [
                                                {
                                                    text: [
                                                        { text: "Address:", bold: true },
                                                        { text: inputObject.branch.address },
                                                    ]
                                                },
                                                {
                                                    text: [
                                                        { text: "Contact:", bold: true, margin: [0, 3, 0, 0] },
                                                        { text: inputObject.branch.contactNumber },
                                                    ]
                                                },
                                                {
                                                    text: [
                                                        { text: "Email:", bold: true, margin: [0, 3, 0, 0] },
                                                        { text: inputObject.branch.emailContact }
                                                    ]
                                                },
                                            ],
                                            alignment: "right",
                                            style: "addressHeader",
                                            width: "50%",
                                        },
                                    ],
                                    margin: [0, 5, 0, 5],
                                },
                                {
                                    canvas: [{ type: "line", x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1, dash: { length: 2, space: 2 }, color: "#FFD700" }],
                                    margin: [0, 5, 0, 2],
                                },
                                {
                                    columns: [
                                        {
                                            text: `Patient: ${inputObject.patientData.firstName} ${inputObject.patientData.lastName} | Gender: ${inputObject.patientData.gender} | Blood Group: ${inputObject.patientData.bloodGroup} | Age: ${inputObject.patientData.age} Yrs`,
                                            width: "70%",
                                            style: "patientHeader",
                                        },
                                        {
                                            text: `Date: 2025-02-10 | Time: 06:03 am`,
                                            width: "30%",
                                            alignment: "right",
                                            style: "patientHeader",
                                        },
                                    ],
                                },
                                {
                                    canvas: [{ type: "line", x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1, dash: { length: 2, space: 2 }, color: "#FFD700" }],
                                    margin: [0, 2, 0, 2],
                                },
                            ],
                        },
                    ];
                },
    
                content: contentArray,
    
                styles: {
                    header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
                    subHeader: { fontSize: 12, margin: [0, 5, 0, 5] },
                    addressHeader: { fontSize: 8 },
                    item: { fontSize: 8, margin: [0, 5, 0, 15] },
                    prescriptionNoValue: { fontSize: 8, bold: true, color: "#00ACC1" },
                    caseIdValue: { fontSize: 8, bold: true, color: "#00ACC1" },
                    patientHeader: { fontSize: 10, margin: [0, 5, 0, 5] },
                    header1: { fontSize: 12, bold: true, color: "#00ACC1" },
                    header2: { fontSize: 18, bold: true, color: "#00ACC1" },
                },
    
                footer: function (currentPage, pageCount) {
                    return {
                        text: `Page ${currentPage} of ${pageCount}`,
                        alignment: "right",
                        fontSize: 10,
                        margin: [0, 5, 15, 20]
                    };
                },
            };
    
            pdfMake.createPdf(docDefinition).getBlob((blob) => {
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
            });
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


