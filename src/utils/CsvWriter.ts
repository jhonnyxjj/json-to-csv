import fs from "fs/promises";
import path from "path";

export class CsvWriter {
    static async createCSV(filePath: string, data: any[], separator: string = ";"): Promise<void> {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Os dados de entrada estão vazios ou não são uma lista válida.");
        }

        // Cria a pasta de saída, se ela ainda não existir
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });

      // Extrai os nomes das colunas do primeiro objeto do array
        const headers = Object.keys(data[0]);
        const rows = data.map(obj =>
            headers.map(header => {
                const value = obj[header] ?? "";
                return typeof value === "string" && value.includes(separator) ? `"${value}"` : value;
            }).join(separator)
        );

          // Junta os headers + todas as linhas, separadas por quebra de linha
        const csvContent = `${headers.join(separator)}\n${rows.join("\n")}`;

          // Salva o conteúdo CSV no caminho definido
        await fs.writeFile(filePath, csvContent);
    }
}
