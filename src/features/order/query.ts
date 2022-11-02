import type { OrderItemSummary, OrderItem } from "@/features/order/data";

import { useState, useEffect } from "react";

import { MOCK_ORDER } from "@/features/order/data";

export const useUserShippingInfo = () => {
  return {
    name: "Ryan Fralick",
    address: "1489 DESERT SPRINGS AVE",
    city: "RICHLAND, Washington 99352",
    country: "United States",
  };
};

export const useOrderDetails = () => {
  const [total, setTotal] = useState(0);
  const [items, setOrderItems] = useState<OrderItemSummary[]>([]);

  useEffect(() => {
    const itemList = [];
    let calculatedTotal = 0;

    for (let i = 0; i < MOCK_ORDER.items.length; i++) {
      const item = MOCK_ORDER.items[i] as OrderItem;
      const { quantity, unitPrice, ...data } = item;

      const itemTotal = quantity * unitPrice;

      calculatedTotal += itemTotal;
      itemList.push({
        quantity,
        itemTotal,
        ...data,
      });
    }

    setTotal(calculatedTotal);
    setOrderItems(itemList);
  }, []);

  return {
    ...MOCK_ORDER,
    items,
    total,
  };
};
