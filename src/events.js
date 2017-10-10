/* eslint no-multi-assign: 0 */

// Small helpers that provide an easy and effecient way to add/remove event listeners //

const elementsWithListeners = [];
const registeredListeners = [];

function addListener(el, event, cb) {
  let idx = elementsWithListeners.indexOf(el);
  if (idx === -1) {
    idx = elementsWithListeners.length;
    elementsWithListeners.push(el);
    registeredListeners.push({ el, totalCount: 0 });
  }

  const listeners = registeredListeners[idx];
  let listener = listeners[event];

  if (!listener) {
    listener = listeners[event] = { callbacks: [] };
    listener.cb = (e) => {
      for (let i = 0, l = listener.callbacks.length; i < l; i += 1) {
        listener.callbacks[i](e);
      }
    };
    listeners.totalCount += 1;
    listeners.el.addEventListener(event, listener.cb);
  }

  // just to prevent double listeners
  if (listener.callbacks.indexOf(cb) !== -1) {
    return;
  }

  listener.callbacks.push(cb);
}

function removeListener(el, event, cb) {
  const idx = elementsWithListeners.indexOf(el);
  if (idx === -1) {
    return;
  }

  const listeners = registeredListeners[idx];
  const listener = listeners[event];
  const callbacks = listener ? listener.callbacks : [];

  if (!listener || callbacks.indexOf(cb) === -1) {
    return;
  }

  callbacks.splice(callbacks.indexOf(cb), 1);
  if (callbacks.length > 0) {
    return;
  }

  listeners.el.removeEventListener(event, listener.cb);
  listeners.totalCount -= 1;
  delete listeners[event];

  if (listeners.totalCount > 0) {
    return;
  }

  elementsWithListeners.splice(idx, 1);
  registeredListeners.splice(idx, 1);
}

/**
 * Subscribe cb to events list
 * @param  {HTMLElement}   el       target element
 * @param  {Array}         events   array of event names
 * @param  {Function} cb   callback that should be called
 */
export function listen(el, events, cb) {
  for (let i = 0, l = events.length; i < l; i += 1) {
    addListener(el, events[i], cb);
  }
}

/**
 * Unsubscribe cb from events list
 * @param  {HTMLElement}   el       target element
 * @param  {Array}         events   array of event names
 * @param  {Function} cb   callback that should be unsubscribed
 */

export function unlisten(el, events, cb) {
  for (let i = 0, l = events.length; i < l; i += 1) {
    removeListener(el, events[i], cb);
  }
}
