import type { StaticImageData } from "next/image";

import tennisBall from "@/images/TennisBall.png";
import golfBall from "@/images/GolfBall.png";

/**
 * Types for Order & summary.
 */
export type OrderItem = {
  id: number;
  image: string | StaticImageData;
  title: string;
  quantity: number;
  unitPrice: number;
};

export type OrderItemSummary = Omit<OrderItem, "unitPrice"> & {
  itemTotal: number;
};

const MOCK_ORDER_ITEMS: OrderItem[] = [
  {
    id: 0,
    image: tennisBall,
    title: "Ultricies Nibh",
    quantity: 2,
    unitPrice: 8.99,
  },
  {
    id: 1,
    image: golfBall,
    title: "Fringilla Sollicitudin Consectetur",
    quantity: 1,
    unitPrice: 14.99,
  },
];

export const MOCK_ORDER = {
  id: "US5426899",
  createdAt: "03/06/2021",
  modifiedAt: "03/12/2022",
  items: MOCK_ORDER_ITEMS,
  tags: ["SUBSCRIPTION_ORDER", "PAID", "UNFULFILLED"],
};
