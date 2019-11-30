// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateRoom = `subscription OnCreateRoom {
  onCreateRoom {
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
export const onUpdateRoom = `subscription OnUpdateRoom {
  onUpdateRoom {
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
export const onDeleteRoom = `subscription OnDeleteRoom {
  onDeleteRoom {
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
export const onCreateRequest = `subscription OnCreateRequest {
  onCreateRequest {
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
export const onUpdateRequest = `subscription OnUpdateRequest {
  onUpdateRequest {
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
export const onDeleteRequest = `subscription OnDeleteRequest {
  onDeleteRequest {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
