# CSV Maker

Este projeto é uma ferramenta simples para processar dados de estudantes, armazenados em um arquivo JSON, e gerar um arquivo CSV com as informações dos alunos, com suas notas e status de aprovação.
O script calcula a média das notas e marca se o aluno foi aprovado ou reprovado, baseado nos critério da nota final, 
que são (nota final >= 7 é aprovado se não é reprovado).

### Exemplo de `data.json`
```json
{
  "students": [
    {
      "id": 1,
      "name": "Sabrina Reese	",
      "grades": [6.6	6.8	5.3	4.8	5.9]
    },
    {
      "id": 2,
      "name": "Tanner Terry",
      "grades": [7.3	7.9	6.2	6.7	7.0] 
    }
  ]
}

Exemplo de saída:
id	name	grade 1	grade 2	grade 3	grade 4	final grade, approved
1	Tanner Terry	7.3	7.9	6.2	6.7	7.02	Y 
2	Everett Bush	8.3	4.5	7.3	0.8	5.23	N 
```
### Pré-requisitos
Antes de executar o código, você precisa ter o Node.js instalado na sua máquina.

[Node.js:] ([Clique aqui para baixar](https://nodejs.org/pt))

depois de instalar o node, vá para instalção.


### Instalação
1. Clone o repositório ou faça o download dos arquivos.


2. No diretório do projeto, instale as dependências usando o comando:
```
npm i 
```
Execute o script para gerar o arquivo CSV:

```
npm start
```

### Como Funciona
O código lê o arquivo data.json que contém os dados dos estudantes.
Calcula a média das notas de cada estudante.
Determina se o aluno foi aprovado ("Y") ou reprovado ("N") com base na média das notas.
Cria um arquivo CSV contendo os dados processados, incluindo as notas de cada matéria, a média final e o status de aprovação.



