# 📊 CSV Maker - Processador de Dados em CSV

Este projeto é uma ferramenta multiuso desenvolvida com **TypeScript**, utilizando princípios de **Programação Orientada a Objetos (POO)** e **arquitetura modular**.

Ela permite gerar arquivos CSV a partir de diferentes entradas JSON, como:

- ✅ Alunos (com cálculo de média e status de aprovação)
- ✅ Cadastros diversos
- ✅ Relatórios de vendas
- ✅ Relatórios financeiros

---

## 🧠 Funcionalidades

- 📈 Processamento inteligente de dados  
- 🧮 Cálculo de média de alunos com status final (aprovado/reprovado)  
- 💼 Geração de relatórios de vendas e finanças  
- 🧩 Entrada dinâmica via arquivos JSON  
- 🛠️ Estrutura modular com interfaces, services e helpers  
- 💾 Saída formatada em CSV no padrão empresarial  

---


---

## 📥 Exemplo de Entrada: `data/students.json`

```json
{
    "students": [
        {
            "id": 1,
            "name": "Alice",
            "grades": [
                8.5,
                9.0,
                7.5,
                10.0
            ],
        }
    ],

},
```

# 📤 Exemplo de Saída CSV
```
id;name;grades;finalGrade;approved
1;Alice;8.5,9,7.5,10;8.75;APROVADO
2;Bob;5,6,5.5,6.5;5.75;REPROVADO
3;Carlos;7,8,6.5,7.5;7.25;APROVADO
4;Diana;9,9.5,10,8.5;9.25;APROVADO
5;Eduardo;6,5.5,7,6.5;6.25;REPROVADO
6;Fernanda;10,10,9.5,9;9.625;APROVADO
7;Gabriel;4.5,5,6,5.5;5.25;REPROVADO
8;Helena;7.5,8,7,7.5;7.5;APROVADO
9;Igor;6,6.5,5.5,7;6.25;REPROVADO
10;Juliana;8,8.5,9,8;8.375;APROVADO
```

### Pré-requisitos
Antes de executar o código, você precisa ter o Node.js instalado na sua máquina.

[Node.js:] ([Clique aqui para baixar](https://nodejs.org/pt))

depois de instalar o node, vá para instalação.


### Instalação
📌 Passo 1. Clone o repositório ou faça o download dos arquivos.
```bash
git clone https://github.com/jhonnyxjj/json-to-csv.git
```
📌 Passo 2. No diretório do projeto, instale as dependências usando o comando:
```
npm i 
```
📌 Passo 3: Escolha o tipo de relatório que deseja gerar
```bash

Você pode executar diferentes scripts de acordo com o tipo de CSV que deseja gerar:

🔧 Comando	📄 Gera relatório de...
npm run students	🎓 Alunos (com cálculo de média e aprovação)
npm run sales	🛍️ Vendas (com produto, cliente, valor total etc)
npm run finance	💰 Finanças (entradas, saídas, saldo, etc.)

📁 Os arquivos .json devem estar na pasta data/
🗂️ Os arquivos .csv gerados vão para a pasta output/

```
# 🛠️ Tecnologias Usadas
TypeScript

Node.js

fs / path

Arquitetura orientada a serviços (POO)

# 📌 Observações
Este projeto ainda não utiliza streams. Ele é ideal para volumes pequenos/médios de dados.

Para arquivos extremamente grandes, recomenda-se implementar fs.createReadStream e fs.createWriteStream.

# 💡 Futuras Melhorias


 Implementação de streams para grandes volumes


 ---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).  
Você pode usar, modificar e distribuir este projeto livremente, desde que mantenha os devidos créditos.

---

## 🙏 Créditos

Desenvolvido por **Jonathan da Costa Martins**  
Projeto criado com o objetivo de praticar e aplicar conceitos de:

- Programação Orientada a Objetos (POO)
- Manipulação de arquivos com Node.js
- Arquitetura modular com TypeScript
- Geração de relatórios em CSV

Se quiser contribuir ou sugerir melhorias, sinta-se à vontade para abrir uma issue ou PR. 🚀

