import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite(name, type, launchDate, orbitType, operational)).toBeTruthy();
  });
});
