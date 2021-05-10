import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import unified from 'unified';

var processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(stringify)


export const transform = (text) => {
	return processor.processSync(text)
}