class Allocator {

  constructor() {
  
  }

  // given a server type ('API', 'DB', etc) return the name of the newly allocated
  // server (e.g. 'API1', 'API2', 'DB5')
  allocate(serverType) {

  }

  // given a server name, remove the server from the pool
  deallocate(serverName) {
    
  }

}

module.exports = Allocator;