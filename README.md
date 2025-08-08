# 🛡️ Classificador de Nível de Herói

Projeto desenvolvido como parte do desafio da **DIO** para treinar conceitos básicos de JavaScript.

## 📌 Objetivo
O programa recebe o **nome** e a **quantidade de experiência (XP)** de um ou mais heróis e classifica o nível de cada um conforme a tabela abaixo:

| Faixa de XP | Nível        |
|-------------|--------------|
| < 1000      | Ferro        |
| 1001 - 2000 | Bronze       |
| 2001 - 5000 | Prata        |
| 5001 - 7000 | Ouro         |
| 7001 - 8000 | Platina      |
| 8001 - 9000 | Ascendente   |
| 9001 - 10000| Imortal      |
| ≥ 10001     | Radiante     |

---

## 🛠 Tecnologias Utilizadas
- JavaScript
- Node.js (para execução no terminal)

---

## 📂 Estrutura do Código

- **Array de objetos** → utilizado para armazenar o nome e a quantidade de XP de cada herói.
- **Função `classificarNivel`** → responsável por determinar o nível do herói com base no XP recebido.
- **Laço `for`** → percorre a lista de heróis e exibe a mensagem final para cada um deles.

---

## 🚀 Como Executar
1. **Instale o Node.js** → [https://nodejs.org](https://nodejs.org)
2. Baixe/clone este repositório.
3. Abra o terminal na pasta do projeto.
4. Execute o comando:

```bash
node index.js
```
---

## 📄 Licença
Este projeto é de uso livre para fins de estudo.
