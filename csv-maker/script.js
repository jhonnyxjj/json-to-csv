import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



function readJson(filePath) {
    if (!filePath) {
        throw new Error(`O Arquivo ${filePath} não encontrado`);
    }

    const dataJson = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(dataJson);
}


function processStudentGrades(student) {
    const grade = student.grades;
    const finalGrade = grade.reduce((acc, current) => acc + current, 0) / grade.length;
    const approved = parseFloat(finalGrade) >= 7 ? 'Y' : 'N';

    return { ...student, finalGrade, approved };

}


function createCSV(filePathOutput, student) {
    const header = `\nid\tname\tgrade 1\tgrade 2\tgrade 3\tgrade 4\tfinal grade\tapproved\n`; 
    const studentCsv = student.map(student => {
        
        return `${student.id}\t${student.name}\t${student.grades.map(grade => grade.toFixed(1)).join('\t')}\t${student.finalGrade.toFixed(1)}\t${student.approved}`;
    })
        .join('\n');
    const csv = `${header}\n${studentCsv}`;
    fs.writeFileSync(filePathOutput, csv);

}


function main() {
    const inputFilePath = path.join(__dirname, 'data.json');
    const outputFilePath = path.join(__dirname, 'report.csv');

    try {
        const data = readJson(inputFilePath);
        const processedStudents = data.students.map(processStudentGrades);
        createCSV(outputFilePath, processedStudents);
        console.log('Arquivo CSV gerado com sucesso: report.csv');
    } catch (error) {
        console.error(error.message);
    }
}

main();