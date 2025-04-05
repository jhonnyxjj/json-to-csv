import fs from "fs/promises";

export class FileReader {
    static async readJson<T>(filePath: string): Promise<T> {
        try {

            const dataJson = await fs.readFile(filePath, "utf-8");
            const data = JSON.parse(dataJson);

            if (!data || typeof data !== "object") {
                throw new Error(`Arquivo JSON inválido: ${filePath}`);
            }

            return data;
        } catch (error) {
            throw new Error(`Erro ao ler o arquivo ${filePath}: ${error.message}`);
        }
    }
}
