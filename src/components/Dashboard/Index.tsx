import { Container } from "./styles";

import { Summary } from "../Summary/Index";
import { TransactionsTable } from "../TransactionsTable/Index";

export function Dashboard() {
  return (
    <Container>
      <Summary></Summary>
      <TransactionsTable></TransactionsTable>
    </Container>
  );
}
