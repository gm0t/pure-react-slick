import assign from './assign';

export default function sanitizeProps(props, propsToRemove) {
  let sanitizedProps = assign({}, props);
  for (let i = 0, l = propsToRemove.length; i < l; i += 1) {
    delete sanitizedProps[propsToRemove[i]];
  }

  return sanitizedProps;
}
