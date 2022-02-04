
import React, { useState } from 'react';

import favicon from 'components/titlebar/img/favicon.png';
import styles from 'components/titlebar/scss/Titlebar.module.scss';
import { app } from '../../utils/services';
import { CloseButton } from './CloseButton';

/**
 * @namespace Titlebar
 * @description Title Component to use as an Electron customized titlebar.
 * electron-window-title-text used in main.js to set opacity on/off focus.
 * electron-window-title-buttons used in main.js to set opacity on/off focus.
 */

const Titlebar = () => {

  return (
    <section className={ styles.titlebar }>
      <div>
        <img src={ favicon } alt="favicon" />
        <span id="electron-window-title-text">{ document.title }</span>
      </div>

      <div id="electron-window-title-buttons">
        <CloseButton onClick={ app.quit } />
      </div>
    </section>
  );
};

export default Titlebar;