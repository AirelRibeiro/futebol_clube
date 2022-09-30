interface IPayloadJWT {
  data: {
    id: number,
    username: string,
    role: string
  },
  iat: number
}

export default IPayloadJWT;
