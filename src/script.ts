import path from "path";
import { FileReader } from "./utils/FileReader";
import { CsvWriter } from "./utils/CsvWriter";
import { StudentService } from "./services/StudentService";
import { SalesService } from "./services/SalesService";
import { FinanceService } from "./services/FinanceService";
import { Students } from "./models/Students";
import { Sales } from "./models/Sales";
import { Transactions } from "./models/Transactions";


async function main(mode: string, inputFilePath: string, outputFilePath: string) {
    try {
        console.log(`📂 Lendo dados de: ${inputFilePath}`);

        let processedData: any[];

        switch (mode) {
            case "students":
                const students = await FileReader.readJson<{ students: Students[] }>(inputFilePath);
                processedData = students.students.map(StudentService.processStudentGrades);
                break;
            case "sales":
                const sales = await FileReader.readJson<{ sales: Sales[] }>(inputFilePath);
                processedData = sales.sales.map(SalesService.processSalesReport);
                break;
            case "finance":
                const transactions = await FileReader.readJson<{ transactions: Transactions[] }>(inputFilePath);
                processedData = transactions.transactions.map(FinanceService.processFinancialReport);
                break;
            default:
                throw new Error("Modo inválido! Escolha entre: 'students', 'sales' ou 'finance'.");
        }

        console.log(`💾 Salvando CSV em: ${outputFilePath}`);
        await CsvWriter.createCSV(outputFilePath, processedData);

        console.log("✅ Arquivo CSV gerado com sucesso!");
    } catch (error) {
        console.error(`❌ Erro: ${error.message}`);
    }
}

// Pegando argumentos da linha de comando
const args = process.argv.slice(2);
const mode = args[0] || "students";
const basePath = path.join(__dirname, "..", "data");
const inputFilePath = args[1] || path.join(basePath, `${mode}.json`);
const outputFilePath = args[2] || path.join("output", `${mode}_report.csv`);

main(mode, inputFilePath, outputFilePath);
