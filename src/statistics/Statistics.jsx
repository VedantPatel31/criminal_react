import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import FileDropdown from '../dataset1/FileDropdown';

export const Statistics = () => {
    const [excelData, setExcelData] = useState(null);
    const [selectedFile, setSelectedFile] = useState('');
    const files = ['32_murder_age_sex.xlsx','Hypothesis_A_CrimeDataSet.pdf']; // Example array of file names

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    useEffect(() => {
        const fetchExcelData = async () => {
            if (!selectedFile) return; // Skip if no file selected

            const url = process.env.PUBLIC_URL + `/${selectedFile}`;
            const response = await fetch(url);
            const blob = await response.blob();

            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                setExcelData(jsonData);
            };
            reader.readAsArrayBuffer(blob);
        };

        fetchExcelData();
    }, [selectedFile]);

    return (
        <div className="excel-viewer-container">
            <div className="container">
                <div className="row p-3">
                    <div className="col-md-6">
                        <div className="file-selection">
                            <h1>File Selection</h1>
                            <FileDropdown files={files} onSelectFile={handleFileSelect} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="excel-viewer">
                            <h2>{selectedFile && `Selected file: ${selectedFile}`}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {excelData && (
                <div className="excel-table-container">
                    {/* <table className="table table-striped">
            <thead className="thead-dark"> */}
                    <table className="excel-table">
                        <thead>
                            <tr>
                                {excelData[0].map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
