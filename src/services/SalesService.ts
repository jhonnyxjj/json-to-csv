import { Sales } from "../models/Sales";

export class SalesService {
    static processSalesReport(sales: Sales) {
        if (!sales.id || !sales.clientId || !sales.product) {
            throw new Error(`Venda inválida: ${JSON.stringify(sales)}`);
        }

        if (sales.quantity <= 0) {
            throw new Error(`A quantidade do produto '${sales.product}' deve ser maior que 0.`);
        }

        if (sales.unitPrice <= 0) {
            throw new Error(`O preço unitário do produto '${sales.product}' deve ser maior que 0.`);
        }

        return {
            ID_Venda: sales.id,
            Data_Venda: sales.date,
            ID_Cliente: sales.clientId,
            Nome_Cliente: sales.ClientName,
            Produto: sales.product,
            Quantidade: sales.quantity,
            Valor_Unitario: sales.unitPrice.toFixed(2),
            Valor_Total: (sales.quantity * sales.unitPrice).toFixed(2)
        };
    }
}
