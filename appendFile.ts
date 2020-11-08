// mathengine
// By BadBoyHaloCat

import * as fs from 'fs';

// Needed utils
import {  } from './index';

// Util file (appendFile)

export async function appendFile(path: string, data: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
