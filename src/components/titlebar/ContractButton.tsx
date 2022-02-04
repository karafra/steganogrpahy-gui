import React, { MouseEventHandler } from 'react';
import styles from 'components/titlebar/scss/TitlebarButtons.module.scss';

export interface ContractButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @description Titlebar contract (unmaximize) button.
 * @memberof Titlebar
 */
export const ContractButton = (props: ContractButtonProps) => (
  <button
    onClick={event => props.onClick(event)}
    aria-label="Contract"
    className={ styles['contract-button'] }
    title="Contract"
    type="button"
  >
    <span />
    <span />
  </button>
);

export default ContractButton;
