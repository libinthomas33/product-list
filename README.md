# User-form
<p align="center">
  <h3 align="center">Category and Product listing APP

  <p align="center">
    Category Add, Sub category Add, Product Add, Product List.
    <br />
    <a href="https://github.com/libinthomas33/product-list.git"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/libinthomas33/product-list/issues">Report Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Simple Node.JS project where a user can create categories and products.

Here's why:
* Project that demonstrates the implementation of categories and products



### Built With

The project is built using Node.js, Express.js Framework, Mongodb.
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)



<!-- GETTING STARTED -->
## Getting Started

Follow the below instructions for setting up the project locally.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/libinthomas33/product-list.git
   ```
2. cd User-form
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create .env file and fill the DB credentials.
   ```JS
    MONGO_HOST='ENTER YOUR MONGO HOST URL'
    MONGO_PORT='ENTER YOUR MONGO PORT'
    MONGO_DBNAME='ENTER YOUR MONGO DATABASE NAME'
    DEBUG_MODE=true
   ```
5. NB: DEBUG_MODE value should be changed to false, while going production or Testing API's using Jest
6. Install NPM packages
   ```sh
   node server.js
   ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/libinthomas33/product-list/issues) for a list of proposed features (and known issues).
