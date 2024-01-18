import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import { Model, createServer } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 120000,
          category: "Venda",
          type: "deposit",
          createdAt: "2023-04-13T00:00:00.000Z",
        },
        {
          id: 2,
          title: "Aluguel",
          amount: -30000,
          category: "Casa",
          type: "withdraw",
          createdAt: "2023-04-01T00:00:00.000Z",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
