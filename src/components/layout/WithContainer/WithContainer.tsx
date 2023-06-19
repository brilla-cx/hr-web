import React from "react";

import Container from "../Container/Container";

interface WithContainerProps<T extends Record<string, any>> {
  Component: React.ComponentType<T>;
  containerNoPadding?: boolean;
  componentProps?: T;
}

export const WithContainer = <T extends Record<string, any>>(
  props: WithContainerProps<T>
) => {
  const { Component, componentProps = {} as T } = props;
  return (
    <div className="bg-midnight">
      <div className="border-t border-neutral-200/10">
        <Container
          noPadding={props.containerNoPadding}
          alt={props.containerNoPadding}
          large
          className="border-l border-r border-neutral-200/10">
          <Component {...componentProps} />
        </Container>
      </div>
    </div>
  );
};
