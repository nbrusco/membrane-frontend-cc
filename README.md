# Technical Challenge - OTC Order Management Service

![](https://assets-global.website-files.com/62aa13c37f94356be439f46e/650217195b3d7ac2d01bace8_Rather_logonegro.svg)

# Index

1. [Description](#description-en)
2. [Tech Stack](#technologies-en)
3. [Endpoint definition](#endpoint-en)
4. [Environment Variables](#env-en)
5. [Run Locally](#run-en)
6. [Deploy](#deploy-en)
7. [Documentation](#docs-en)
8. [Author](#author-en)

<a name="description-en"></a>

## 1. Description

This project is a single-page application (SPA) designed for managing Over-The-Counter (OTC) orders for various cryptocurrencies. The application allows users to create, view, edit, and delete unique orders.

The application is built using React, Vite, and TypeScript, with routing implemented via React Router.

Data queries are managed by Tanstack Query and processed through Axios. The global application state is managed by Zustand and persisted in Local Storage using its persist middleware. React Hook Form, along with the Yup resolver, is utilized to manage the order form state and input validation.

Material UI, integrated with Tailwind CSS 3, is used for pre-made components, supplemented with Material Icons.

Additionally, the Day.js library is employed to manage date and time data.

Due to API Rate limitations on demo accounts, the price of the cryptocurrencies will be automatically updated every 10 minutes, as responses are cached on the backend server. [See reference](#docs-en)

<a name="technologies-en"></a>

## 2. Tech Stack

| Front-End        | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| React            | Library for building user interfaces                                 |
| TypeScript       | JavaScript superset with strict typing                               |
| Vite.js          | Fast build tool for web projects                                     |
| React Router     | Router for React applications                                        |
| Zustand          | Lightweight global state management for React                        |
| Tanstack Query   | React Query library for fetching, caching, and updating server state |
| Axios            | HTTP client for making requests                                      |
| dayjs            | Library for handling dates and times                                 |
| Material UI      | React components for faster and easier web development               |
| Material Icons   | Material Design icons for React                                      |
| Tailwind CSS     | CSS framework for rapid design                                       |
| React Hook Form  | Library for managing forms in React using hooks                      |
| Yup RHF Resolver | Schema validation for react hook form using Yup                      |
| UUID             | Library for generating unique identifiers                            |

| General | Descripción                        |
| ------- | ---------------------------------- |
| ESLint  | Code style and linting tool        |
| PNPM    | Fast and efficient package manager |

<a name="endpoint-en"></a>

## 3. Endpoint definition

The app uses a single endpoint to retrieve the top 10 cryptocurrencies ordered by market capitalization, according to the CoinGecko demo API.

### Get Cryptocurrencies

- **Endpoint:** `https://api.coingecko.com/api/v3/coins/markets`
- **Method:** `GET`
- **Query Parameters:**
  - `x_cg_demo_api_key`: `APIKEY`
    - **Description:** The API key used to authenticate requests to the CoinGecko demo API.
  - `vs_currency`: `usd`
    - **Description:** The currency in which the market data should be returned. In this case, it is set to `usd` (US Dollars).
  - `order`: `market_cap_desc`
    - **Description:** The order in which the cryptocurrencies should be listed. `market_cap_desc` means the cryptocurrencies will be ordered by market capitalization in descending order.
  - `per_page`: `10`
    - **Description:** The number of cryptocurrencies to return per page. Here, it is set to return 10 cryptocurrencies.
  - `page`: `1`
    - **Description:** The page number to retrieve. In this case, it is set to `1`, meaning the first page of results.

**Example Request:**

```http
GET /coins/markets?x_cg_demo_api_key=APIKEY&vs_currency=usd&order=market_cap_desc&per_page=10&page=1
```

<a name="env-en"></a>

## 4. Environment variables

The project requires two environment variables to be set in a `.env` file created at the root folder. These variables are necessary for configuring the endpoint and the CoinGecko API Key.

Create a `.env` file with the following content:

```bash
VITE_REACT_COINGECKO_ENDPOINT=https://api.coingecko.com/api/v3
VITE_REACT_COINGECKO_API_KEY=CG-zfV2GD6DBREqBiDFby53Qvj5
```

<a name="run-en"></a>

## 5. Run Locally

To run the project locally, follow these steps:

1. Open a CLI and clone the repository:

   ```bash
   git clone https://github.com/nbrusco/membrane-frontend-cc
   ```

2. Navigate to the project folder:

   ```bash
   cd membrane-frontend-cc
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   ```

The project runs by default on port 5174. You can access it through the following link:

> [http://localhost:5174/](http://localhost:5174/)

<a name="deploy-en"></a>

## 6. Deploy

Additionally, the project is hosted on Vercel and can be accessed through the following link:

- ### Vercel:

  - **URL:** [Vercel Deploy](https://membrane-frontend-cc-eight.vercel.app/)

<a name="docs-en"></a>

## 7. Documentation

While developing this project, I made use of the following documentation:

- [CoinGecko Data Refresh](https://support.coingecko.com/hc/en-us/articles/4538807536665-How-often-does-data-get-updated-or-refreshed): Reference to how often the data can be refreshed once a refetch is executed.
- [CoinGecko API Reference](https://docs.coingecko.com/v3.0.1/reference/introduction)
- [Tanstack Query Documentation](https://tanstack.com/query/v4/docs/overview)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/docs/getting-started)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Material UI Documentation](https://mui.com/getting-started/usage/)

<a name="author-en"></a>

## 8. Author

Nicolás Brusco | Fullstack MERN Developer

| Social   | Link                                                        |
| -------- | ----------------------------------------------------------- |
| GitHub   | [nbrusco](https://github.com/nbrusco)                       |
| Linkedin | [Nicolas Brusco](https://www.linkedin.com/in/nicolasbrusco) |
