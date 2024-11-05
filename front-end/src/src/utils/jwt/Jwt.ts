import { User } from '../User';

export class Jwt {
  static get url() {
    return 'https://www.javainuse.com/jwtgenerator';
  }

  static createPayload(payload: User) {
    return {
      alg: 'HS256',
      claims: {
        Expiration: new Date().toISOString(),
        IssuedAt: new Date().toISOString(),
        Issuer: 'FakeAuth',
        ...payload,
      },
      key: 'jailhouse-secret-key',
    };
  }
}
