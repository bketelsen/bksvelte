import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import unified from 'unified';
import {visit} from 'unist-util-visit';

var processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(() => tree => {
    visit(
      tree,
      // only visit p tags that contain an img element
      node =>
        node.tagName === 'p' && node.children.some(n => n.tagName === 'img'),
      node => {
		const imgNode = node.children.find(n => n.type === 'element');
		if(!imgNode) return;
		if (imgNode.tagName === 'img'){
			imgNode.properties["src"]= 'https://bkapi.vercel.app' + imgNode.properties["src"]
		} 
	}
    );
})


  .use(stringify)


export const transform = (text) => {
	if (typeof window !== 'undefined') {
	return processor.processSync(text)
	}
}