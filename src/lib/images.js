/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { base } from '$app/paths';
import fs from 'fs';
import hasha from "hasha"
import path from 'path';
import sharp from 'sharp';

const widths = [300, 600, 1200, 1500, 1800, 2400, 3000]

export async function cacheImage(image_url) {

    const fullUrl = new URL(import.meta.env.VITE_ASSET_BASE + image_url);
    const fileExtension = path.extname(image_url)
    const urlhash = hasha(image_url);
    const location = path.join(base, '.cache', urlhash + fileExtension);

    try {
        fs.accessSync(location, fs.constants.R_OK );
        // file exists, assume processed
        return
      } catch (err) {
        downloadFile(fullUrl, urlhash).then(() => {
            processImage(location);
        });
      }


}

async function processImage(location) {
    console.log(location)
    const metadata = await sharp(location)
        .metadata()
    console.log(resizedFileName(metadata.width,location, ".webp"))
    await sharp(location)
        .toFormat('webp')
        .toFile(resizedFileName(metadata.width,location, ".webp"))
    widths.forEach(w => {
        if (metadata.width > w) {
             sharp(location)
                .resize(w, null)
                .toFile(resizedFileName(w, location))

            sharp(location)
                .resize(w, null)
                .toFormat('webp')
                .toFile(resizedFileName(w, location,'.webp'))
        }
    })
}

function resizedFileName(size, location, newext="") {
    const baseName = path.basename(location, path.extname(location))
    const fname = baseName + "_w" + size + (newext ?  newext : path.extname(location))
    const loc = path.join(base, '.cache', fname);

    return loc
}

const downloadFile = (async (url, urlhash) => {
    const res = await fetch(url);
    const fileExtension = path.extname(url.toString())

    const location = path.join(base, '.cache', urlhash + fileExtension);

    const fileStream = fs.createWriteStream(location);



    return new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
    });
});