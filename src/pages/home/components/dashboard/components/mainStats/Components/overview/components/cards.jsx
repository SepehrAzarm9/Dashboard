import React from "react";
import { Card } from "../../../../../../../../../components/card/card";
import { ReactComponent as Wallet } from "../../../../../../../../../assets/svg/wallet.svg";
import { ReactComponent as EmptyWallet } from "../../../../../../../../../assets/svg/emptyWallet.svg";
import { ReactComponent as Chart } from "../../../../../../../../../assets/svg/chart.svg";
import { ReactComponent as Deposit } from "../../../../../../../../../assets/svg/deposit.svg";

export const CardsSection = () => {
  const items = [
    {
      id: 1,
      amount: "143.222",
      description: "Your bank balance",
      component: <Wallet className="Logo" />,
    },
    {
      id: 2,
      amount: "43.222",
      description: "Your Tax",
      component: <Chart className="Logo" />,
    },
    {
      id: 3,
      amount: "24",
      description: "Employees Working Today",
      component: <EmptyWallet className="Logo" />,
    },
    {
      id: 4,
      amount: "3.287",
      description: "This week`s card spending",
      component: <Deposit className="Logo" />,
    },
  ];

  return (
    <div className="cards-section">
      {items.map((item) => (
        <Card amount={item.amount} description={item.description}>
          {item.component}
        </Card>
      ))}
    </div>
  );
};
