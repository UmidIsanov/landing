import React, { Context, FC, ReactNode, useContext } from "react";

interface ContextConsumerIProps<T> {
  context: Context<T>;
  children(values: T): ReactNode;
}

export default function ContextConsumer<T>({ context, children }: ContextConsumerIProps<T>) {
  const values = useContext(context);

  return children(values);
}
