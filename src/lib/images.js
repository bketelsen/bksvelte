/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { base } from '$app/paths';
import fs from 'fs';
import hasha from "hasha"
import path from 'path';
import sharp from 'sharp';

const widths = [300, 600, 1200, 1500, 1800, 2400, 3000]

export async function getCache(image_url) {
    const urlhash = hasha(image_url);
    const location = path.join(base, 'static', '.cache', urlhash);
    console.log(location)
    const result = await fs.readdirSync(location)
    return result
}

export async function cacheImage(image_url) {

    const fullUrl = new URL(import.meta.env.VITE_ASSET_BASE + image_url);
    const fileExtension = path.extname(image_url)
    const urlhash = hasha(image_url);
    const location = path.join(base, 'static', '.cache', urlhash)// + fileExtension);
    const fileLocation = path.join(location,urlhash+fileExtension)

    fs.mkdirSync(location,{recursive:true});


    try {
        fs.accessSync(fileLocation, fs.constants.R_OK );
        // file exists, assume processed
        return
      } catch (err) {
       await downloadFile(fullUrl, urlhash).then(async() => {
            await processImage(location,fileLocation);
        });
      }


}

async function processImage(directory,file) {
    console.log(directory,file)
    const metadata = await sharp(file)
        .metadata()
    console.log(resizedFileName(metadata.width,directory,file, ".webp"))
    await sharp(file)
        .toFormat('webp')
        .toFile(resizedFileName(metadata.width,directory,file, ".webp"))
    widths.forEach(async w => {
        if (metadata.width > w) {
             await sharp(file)
                .resize(w, null)
                .toFile(resizedFileName(w, directory,file))

            await sharp(file)
                .resize(w, null)
                .toFormat('webp')
                .toFile(resizedFileName(w, directory,file,'.webp'))
        }
    })
}

function resizedFileName(size, directory,file, newext="") {
    const baseName = path.basename(file, path.extname(file))
    const fname = baseName + "_w" + size + (newext ?  newext : path.extname(file))
    const loc = path.join( directory,fname);

    return loc
}

const downloadFile = (async (url, urlhash) => {
    const res = await fetch(url);
    const fileExtension = path.extname(url.toString())
    const location = path.join(base,  'static','.cache', urlhash,urlhash + fileExtension);
    const fileStream = fs.createWriteStream(location);

    return new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
    });
});