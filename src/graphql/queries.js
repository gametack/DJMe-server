// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRequests = `query GetRequests($limit: Int, $nextToken: String) {
  getRequests(limit: $limit, nextToken: $nextToken) {
    requests {
      id
      roomid
      userid
      songname
      songartist
      provider
      providerid
      likes
      status
    }
    nextToken
  }
}
`;
export const getUserRequests = `query GetUserRequests($userid: ID!, $limit: Int, $nextToken: String) {
  getUserRequests(userid: $userid, limit: $limit, nextToken: $nextToken) {
    requests {
      id
      roomid
      userid
      songname
      songartist
      provider
      providerid
      likes
      status
    }
    nextToken
  }
}
`;
export const getRoomRequests = `query GetRoomRequests($roomid: ID!, $limit: Int, $nextToken: String) {
  getRoomRequests(roomid: $roomid, limit: $limit, nextToken: $nextToken) {
    requests {
      id
      roomid
      userid
      songname
      songartist
      provider
      providerid
      likes
      status
    }
    nextToken
  }
}
`;
export const getUsers = `query GetUsers($limit: Int, $nextToken: String) {
  getUsers(limit: $limit, nextToken: $nextToken) {
    users {
      id
      cognitoId
      username
      friends {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    name
    description
    userid
    people {
      users {
        id
        cognitoId
        username
      }
      nextToken
    }
    requests {
      requests {
        id
        roomid
        userid
        songname
        songartist
        provider
        providerid
        likes
        status
      }
      nextToken
    }
  }
}
`;
export const listRooms = `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      userid
      people {
        nextToken
      }
      requests {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRequest = `query GetRequest($id: ID!) {
  getRequest(id: $id) {
    id
    roomid
    userid
    songname
    songartist
    provider
    providerid
    likes
    status
  }
}
`;
export const listRequests = `query ListRequests(
  $filter: ModelRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      roomid
      userid
      songname
      songartist
      provider
      providerid
      likes
      status
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    cognitoId
    username
    friends {
      users {
        id
        cognitoId
        username
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cognitoId
      username
      friends {
        nextToken
      }
    }
    nextToken
  }
}
`;
