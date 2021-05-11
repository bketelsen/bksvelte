function replaceAttr (token, attrName, replace, env) {
    token.attrs.forEach(function (attr) {
      if (attr[0] === attrName) {
        attr[1] = replace(attr[1], env, token)
      }
    })
  }
  function addAttr (token, attrName, value) {
      token.attrs.push([attrName,value])
      return
  }

export default function (md, opts) {
    md.core.ruler.after(
      'inline',
      'replace-link',
      function (state) {
        var replace
  
        if (md.options.replaceLink && typeof md.options.replaceLink === 'function') {
          // Use markdown options (default so far)
          replace = md.options.replaceLink
        } else if (opts && opts.replaceLink && typeof opts.replaceLink === 'function') {
          // Alternatively use plugin options provided upon .use(..)
          replace = opts.replaceLink
        } else {
          return false
        }
  
        if (typeof replace === 'function') {
          state.tokens.forEach(function (blockToken) {
            if (blockToken.type === 'inline' && blockToken.children) {
              blockToken.children.forEach(function (token) {
                var type = token.type
                if (type === 'image') {
                  replaceAttr(token, 'src', replace, state.env)
                  if(state.env.image) {
                    addAttr(token,'width',state.env.image.width)
                    addAttr(token,'height',state.env.image.height)
                  }
                }
              })
            }
          })
        }
        return false
      }
    )
  }