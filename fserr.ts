// mathengine
// By BadBoyHaloCat

import * as fs from 'fs';

// Needed utils
import {  } from './index';

// Util file (appendFile)

export function fserr(method: string, path: string, err: string): void {
    console.log(`ERROR: Failed to ${method} ${path.endsWith('/') ? 'directory' : 'file'} ${path}: ${err}`);
    return;
}
