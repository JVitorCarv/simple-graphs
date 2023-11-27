# Graph Editor README

Este repositório contém uma aplicação React para edição e análise de gráficos. A aplicação oferece diversas funcionalidades, incluindo a edição de nós e arestas, a execução de algoritmos em grafos, e a exportação/importação de grafos.

## Estrutura do Projeto

A aplicação é dividida em diferentes componentes, cada um responsável por uma parte específica do editor de gráficos. Abaixo estão os principais componentes:

### 1. NodeEditor

Este componente é responsável pela edição de nós no gráfico. Oferece as seguintes funcionalidades:

- Adicionar nós
- Editar nós existentes
- Excluir nós
- Limpar todos os nós

### 2. MoreInfosEditor

Fornece informações adicionais sobre o gráfico, incluindo:

- Ordem e tamanho do gráfico
- Verificação de adjacência entre dois nós
- Obtenção do grau de um nó
- Obtenção de nós adjacentes a um nó

### 3. EdgeEditor

Responsável pela edição de arestas no gráfico. Oferece funcionalidades semelhantes ao `NodeEditor`, incluindo:

- Adicionar arestas
- Editar arestas existentes
- Excluir arestas
- Limpar todas as arestas

### 4. AlgorithmsEditor

Este componente permite a execução de algoritmos no gráfico, atualmente incluindo:

- Algoritmo de Dijkstra
- Cálculo do diâmetro do gráfico

### 5. Footer

O rodapé da aplicação contém links úteis, ícones de exportação/importação e uma opção para selecionar a direção do gráfico.

## Como Executar a Aplicação

Para executar a aplicação, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone este repositório usando o comando:
   ```bash
   git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git
   ```

3. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```

4. Instale as dependências usando o comando:
   ```bash
   npm install
   ```

5. Inicie a aplicação com:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Dependências Externas

A aplicação utiliza a biblioteca Cytoscape para visualização e manipulação de gráficos. Certifique-se de verificar a [documentação do Cytoscape](https://js.cytoscape.org/) para obter mais informações sobre suas funcionalidades.
