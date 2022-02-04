import React, { MouseEventHandler } from 'react';

import styles from 'components/titlebar/scss/TitlebarButtons.module.scss';

export interface MinimizeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

/**
 * @description Titlebar minimize button.
 * @memberof Titlebar
 */
export const MinimizeButton = (props: MinimizeButtonProps) => (
  <button
    onClick={event => props.onClick(event)}
    aria-label="Minimize"
    className={ styles['minimize-button'] }
    title="Minimize"
    type="button"
  >
    <span />
  </button>
);

export default MinimizeButton;