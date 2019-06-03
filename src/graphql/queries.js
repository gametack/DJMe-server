// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    name
    description
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
    }
    nextToken
  }
}
`;
export const getRequests = `query GetRequests($id: ID!) {
  getRequests(id: $id) {
    id
    songname
    songartist
    provider
    providerid
    likes
  }
}
`;
export const listRequestss = `query ListRequestss(
  $filter: ModelRequestsFilterInput
  $limit: Int
  $nextToken: String
) {
  listRequestss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      songname
      songartist
      provider
      providerid
      likes
    }
    nextToken
  }
}
`;
