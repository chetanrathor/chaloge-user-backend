// SOCKET RELATED

export const SOCKET_NAMESPACES = {
  DEMO: '/demo'
}

export const SOCKET_EMITTERS = {
  DEMO_HELLO_WORLD: SOCKET_NAMESPACES.DEMO + '/helloWorld'
}

export const SOCKET_LISTENERS = {
  DEMO_HELLO_WORLD: SOCKET_NAMESPACES.DEMO + '/helloWorld'
}

export const SOCKET_ROOMS = {
  DEMO_USER: SOCKET_NAMESPACES.DEMO + '/demo' // append id of the demo like this /demo:1 for one to one
}
// SOCKET RELATED
