// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRoom = `mutation CreateRoom($input: CreateRoomInput!) {
  createRoom(input: $input) {
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
export const updateRoom = `mutation UpdateRoom($input: UpdateRoomInput!) {
  updateRoom(input: $input) {
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
export const deleteRoom = `mutation DeleteRoom($input: DeleteRoomInput!) {
  deleteRoom(input: $input) {
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
export const createRequest = `mutation CreateRequest($input: CreateRequestInput!) {
  createRequest(input: $input) {
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
export const updateRequest = `mutation UpdateRequest($input: UpdateRequestInput!) {
  updateRequest(input: $input) {
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
export const deleteRequest = `mutation DeleteRequest($input: DeleteRequestInput!) {
  deleteRequest(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
