// mathengine
// By BadBoyHaloCat

import * as fs from 'fs';

// Needed utils
import {  } from './index';

// Util file (readdir)

export async function mkdir(path: string): Promise<undefined> {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
