# Simple Graphs

This repository contains a React application for editing and analyzing graphs. The application offers various features, including **node and edge editing**, **graph algorithm execution**, and **graph export/import**. You can try it out [here](https://jvitorcarv.github.io/simple-graphs/).

![image](https://github.com/user-attachments/assets/d19ad24f-4984-4b07-9dd9-b557d5cd3855)

---

## Project Structure

The application is divided into different components, each responsible for a specific part of the graph editor. Here are the main components:

### 1. Node Editor

This component is responsible for editing nodes in the graph. It offers the following functionalities:

* Add nodes
* Edit existing nodes
* Delete nodes
* Clear all nodes

### 2. More Infos Editor

Provides additional information about the graph, including:

* Graph order and size
* Adjacency check between two nodes
* Getting the degree of a node
* Getting adjacent nodes to a node

### 3. Edge Editor

Responsible for editing edges in the graph. It offers similar functionalities to `NodeEditor`, including:

* Add edges
* Edit existing edges
* Delete edges
* Clear all edges

### 4. Algorithms Editor

This component allows for the execution of algorithms on the graph, currently including:

* Dijkstra's algorithm
* Graph diameter calculation

### 5. Footer

The application footer contains useful links, export/import icons, and an option to select the graph's direction.

---

## How to Run the Application

To run the application, follow these steps:

1.  Make sure you have Node.js installed on your system.
2.  Clone this repository using the command:

    ```bash
    git clone [https://github.com/YOUR_USERNAME/repository-name.git](https://github.com/YOUR_USERNAME/repository-name.git)
    ```

3.  Navigate to the project directory:

    ```bash
    cd repository-name
    ```

4.  Install the dependencies using the command:

    ```bash
    npm install
    ```

5.  Start the application with:

    ```bash
    npm run dev
    ```

    The application will be available [locally](http://localhost:3000).

---

## External Dependencies

The application uses the **Cytoscape** library for graph visualization and manipulation. Be sure to check the [Cytoscape documentation](https://js.cytoscape.org/) for more information on its functionalities.
