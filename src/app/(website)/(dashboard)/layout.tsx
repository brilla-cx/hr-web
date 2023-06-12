import React from "react";

interface Props {
  children: React.ReactNode;
}

function layout(props: Props) {
  const { children } = props;
  return <div>{children}</div>;
}

export default layout;
