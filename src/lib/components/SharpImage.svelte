<script>

    let _class = ''
    export { _class as class }

    export let src = ''
    export let alt = 'Alt'
    export let width = ''
    export let height = ''
    export let baseurl =  ''

    var webpq = new URLSearchParams();
    webpq.append("f","webp")

    const webp = baseurl + src + '?' + webpq.toString()
 
    var pngq = new URLSearchParams();
    webpq.append("f","png")

    const png = baseurl + src + '?' + pngq.toString()

</script>
<picture>
    <source type="image/webp" srcset={webp}>
    <source type="image/png" srcset={png}>

    <img 
        src={src}
        {alt}
        class="{_class}"
        width={width}
        height={height}
    />
</picture>

