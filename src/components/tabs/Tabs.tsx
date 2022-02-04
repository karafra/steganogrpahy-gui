import React, { ReactElement, useState } from 'react';
import { PanelProps } from './Panel';
import styles from "components/tabs/scss/Tabs.module.scss";

export interface TabsProps {
  selected?: number;
  children: ReactElement<PanelProps>[];
  width?: string;
}

const Tabs = (props: TabsProps) => {
  const [selected, setSelected] = useState(props.selected || 0);
  const handleChange = (index: number) => {
      setSelected(index);
  };
  return (
    <div className={styles.container}>
      <ul className={styles.inline}>
        {props.children.map((elem, index)=>{
          let style = index === selected ? styles.selected: undefined;
         return <li className={style} style={{
           width: props.width,
        }} key={index} onClick={handleChange.bind(this,index)}>{elem.props.title}</li>
        })}
      </ul>
      <div className={styles.tab}>{props.children[selected]}</div>
      </div>
    );
}

export default Tabs;
