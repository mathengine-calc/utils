// mathengine
// By BadBoyHaloCat

import * as fs from 'fs';

// Needed utils
import {  } from './index';

// Util file (readdir)

export async function readdir(path: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        fs.readdir(path, 'utf-8', (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}
