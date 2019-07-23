import { MinuteToHourPipe } from './minute-to-hour.pipe';

describe('MinuteToHourPipe', () => {
  const pipe = new MinuteToHourPipe();

  it('create an instance of MinuteToHourPipe', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Bad Inputs', () => {
    it('should return null', () => {
      expect(pipe.transform(null)).toEqual(null);
    });
  });

  describe('Transformation', () => {
    it('should return 1h 54min', () => {
      expect(pipe.transform('114')).toEqual('1h 54min');
    });

    it('should return 1min', () => {
      expect(pipe.transform('1')).toEqual('1min');
    });

    it('should return 1h 0min', () => {
      expect(pipe.transform('60')).toEqual('1h 0min');
    });
  });
});
