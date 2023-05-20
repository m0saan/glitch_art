import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the Glitch-art extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'Glitch-art:plugin',
  description: 'Glitch art is a futuristic and aesthetic code theme that is inspired by the beauty of digital glitches. It features a bold and vibrant color palette that is sure to turn heads.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension Glitch-art is activated!');
    const style = 'Glitch-art/index.css';

    manager.register({
      name: 'Glitch-art',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
