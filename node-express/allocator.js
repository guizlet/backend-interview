class Allocator {

  constructor() {
  
  }

  // given a server type ('API', 'DB', etc) allocate a new server and
  // return the name of the server (e.g. 'API1', 'API2', 'DB5')
  allocate(serverType) {

  }

  // given a server name, remove the server from the pool
  deallocate(serverName) {
    
  }

}

module.exports = Allocator;