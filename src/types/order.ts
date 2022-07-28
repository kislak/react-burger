// pending: "Готовится",
//     done: "Выполнен",
//     created: "Создан",

export type TOrder = {
  _id: string;
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: "pending" | "done" | "created";
  updatedAt: string;
};
