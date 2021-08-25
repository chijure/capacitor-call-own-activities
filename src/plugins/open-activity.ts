import {registerPlugin} from '@capacitor/core';

export interface OpenActivityPlugin {
  openJava();
  openKotlin();
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const OpenActivity = registerPlugin<OpenActivityPlugin>('Open Activity');

export default OpenActivity;
