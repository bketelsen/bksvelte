import Image from "@11ty/eleventy-img";

async function imageShortcode(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }
  
    let metadata = await Image(src, {
      widths: [300, 600,900,1200],
      formats: ['webp', 'jpeg'],
      outputDir: "./static/img/"
    });
  
    let lowsrc = metadata.jpeg[0];
  
    return `<picture>
      ${Object.values(metadata).map(imageFormat => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          class="object-cover w-full h-full"
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}"
          loading="lazy"
          decoding="async">
      </picture>`;
  }
  
export default async function imageTag(image) {
    const source = import.meta.env.VITE_ASSET_BASE + image.file_name

    return await imageShortcode(source, image.alt || 'Image', "100vw")
}