import React, { MouseEventHandler } from 'react';
import styles from 'components/titlebar/scss/TitlebarButtons.module.scss';

export interface MaximizeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
} 

/**
 * @description Titlebar minimize button.
 * @memberof Titlebar
 */
const MaximizeButton = (props: MaximizeButtonProps) => (
  <button
    onClick={ event => props.onClick(event) }
    aria-label="Maximize"
    className={ styles['maximize-button'] }
    title="Maximize"
    type="button"
  >
    <span />
  </button>
);
export default MaximizeButton;
