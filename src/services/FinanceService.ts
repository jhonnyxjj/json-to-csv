import { Transactions } from "../models/Transactions";

export class FinanceService {
    static processFinancialReport(transactions: Transactions) {
        if (!transactions.date || !transactions.description || !transactions.value) {
            throw new Error(`Transação inválida: ${JSON.stringify(transactions)}`);
        }

        if (transactions.value <= 0) {
            throw new Error(`O valor da transação '${transactions.description}' deve ser maior que 0.`);
        }

        return {
            Data: transactions.date,
            Descrição: transactions.description,
            Categoria: transactions.category,
            Valor: transactions.value.toFixed(2),
            Forma_Pagamento: transactions.paymentMethod
        };
    }
}
