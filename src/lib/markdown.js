import { Remarkable } from 'remarkable';
import hljs from 'highlight.js'

var md = new Remarkable({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, {language: lang}).value;
        } catch (err) {}
      }
  
      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {}
  
      return ''; // use external default escaping
    }
  });

export const transform = (text) => {
    return md.render(text)
}