import React, { MouseEventHandler } from 'react';

import styles from 'components/titlebar/scss/TitlebarButtons.module.scss';

export interface CloseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

/**
 * @description Titlebar close button.
 * @memberof Titlebar
 */
export const CloseButton = (props: CloseButtonProps) => (
  <button
    onClick={event => props.onClick(event)}
    aria-label="Close"
    className={ styles['close-button'] }
    title="Close"
    type="button"
  >
    <span />
    <span />
  </button>
);