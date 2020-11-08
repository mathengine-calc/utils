// mathengine
// By BadBoyHaloCat

import * as fs from 'fs';

// Needed utils
import {  } from './index';

// Util file (readFile)

export async function readFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, contents) => {
            if (err) {
                reject(err);
            } else {
                resolve(contents);
            }
        });
    });
}
