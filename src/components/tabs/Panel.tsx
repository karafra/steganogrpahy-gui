import React, { ReactNode } from "react";

export interface PanelProps {
  title: string;
  children: ReactNode[] | ReactNode;
  width?: string; 
}

const Panel = (props: PanelProps) => {
  return <div style={{ alignContent: "center", justifyContent: "center" }}>{props.children}</div>;
};

export default Panel;
