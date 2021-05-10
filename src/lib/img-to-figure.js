import {visit} from 'unist-util-visit';

export default  (options) => tree => {
    visit(
      tree,
      // only visit p tags that contain an img element
      node =>
        node.tagName === 'p' && node.children.some(n => n.tagName === 'img'),
      node => {
        console.log(node);
      }
    );
};