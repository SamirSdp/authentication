import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as xlsx from "xlsx";

const fileTypes = ["XLSX"];

const UploadFile = () => {
	// USe 2 State to save data
	// First state Save input Xlsx To Json File but
	// This Json File is Xlsx base Json File
	const [jsonFile, setJsonFile] = useState([]);

	// THis State Use perfect Json File means to use in Project
	const [convertFile, setConvertFile] = useState([]);
	const [fileName, setFileName] = useState();
	const [sheetName, setSheetName] = useState([]);
	const [xlsxFile, setXlsxFile] = useState([]);

	// In Xlsx file load to the user and convert in json
	// Useing fileReader with xlsx pakages
	const handleChange = (xlFile) =>  {
		const k = xlFile.name;
		const m = k.split(".");
		// setFileName(FileName);
		console.log("xlFile", xlFile);
		setFileName(`${m[0]}.json`);

		const reader = new FileReader();

		reader.onload = (e) => {
			
			console.log("result", e.target.result);
			const data = e.target.result;
			setXlsxFile(data);
			const workbook = xlsx.read(data, { type: "array" });

			const sheetName = workbook.SheetNames;
			console.log("sheetName", sheetName);

			if (sheetName.length > 1) {
				setSheetName(sheetName);
			} else {
				const worksheet = workbook.Sheets[sheetName];
				const json = xlsx.utils.sheet_to_json(worksheet);
				console.log("json", json);
				setJsonFile(json);
			}
			// console.log("")
		};
		reader.readAsArrayBuffer(xlFile);
	};

	// Xlsx/Json file is not use in project because keys not working in project
	// Xlsx/Json file keys having space between each other
	// example ( "customer name": "jon" ) but in react keys space is not allow
	function camelize(str) {
		return str
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, "");
	}
	const convert = () => {
		const convertData = jsonFile.map((object) => {
			var keys = Object.keys(object);
			// eslint-disable-next-line array-callback-return
			keys.map((oldKeys) => {
				const newKeys = camelize(oldKeys);
				object[newKeys] = object[oldKeys];
				delete object[oldKeys];
			});
			return object;
		});
		setConvertFile(convertData);
		console.log("convertData", convertData);
	};
	console.log("FileNAme :=", fileName);
	return (
		<div className="container">
			<FileUploader handleChange={handleChange} name="file" types={fileTypes} />
			<div>
				{convertFile ? (
					<a
						href={`data:text/json;charset=utf-8,${encodeURIComponent(
							JSON.stringify(convertFile),
						)}`}
						download={fileName}
					>
						<button onClick={() => convert()}>convert</button>
					</a>
				) : (
					<div>hiii</div>
				)}
			</div>
			<div>
				{/* {convertFile.map((e, index) => {
					console.log(e);
					return <div key={index}>{``}</div>;
				})} */}
				{/* {convertFile}  */}
			</div>
		</div>
	);
};

export default UploadFile;
