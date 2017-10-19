const each = require('jest-each');
const Task = require('data.task');

const { compose, join, nonEmpty, promiseToTask, trim } = require('./utils');

describe('Utils', () => {
  const noop = () => {};

  describe('.compose(fns)', () => {
    const addOne = x => x + 1;
    it('returns a function when given a single function', () => {
      expect(compose(addOne)).toBeInstanceOf(Function);
    });

    it('returns a function when given multiple args of functions', () => {
      expect(compose(addOne, addOne)).toBeInstanceOf(Function);
    });

    it('returns value of composing given functions together when invoked', () => {
      expect(compose(addOne, addOne)(1)).toBe(3);
    });
  });

  describe('.join(str)(xs)', () => {
    const separator = '-';
    const fnUnderTest = join(separator);
    it('returns empty string when given an empty array', () => {
      expect(fnUnderTest([])).toEqual('');
    });

    it('returns string at position 0 when given an array of one string', () => {
      expect(fnUnderTest(['hello'])).toEqual('hello');
    });

    it('returns string containing each item of array separated by given separator when given an array of items', () => {
      expect(fnUnderTest(['hello', 'world'])).toEqual('hello-world');
    });
  });

  describe('.nonEmpty(str)', () => {
    it('returns true when given a non empty string', () => {
      expect(nonEmpty('hello')).toBe(true);
    });

    it('returns false when given an empty string', () => {
      expect(nonEmpty('')).toBe(false);
    });
  });

  describe('.promiseToTask(promise)', () => {
    it('returns a Task', () => {
      const t = promiseToTask(noop);
      expect(t).toBeInstanceOf(Task);
    });

    it('calls given promise when task is ran', () => {
      const promise = jest.fn(() => Promise.resolve(1));
      promiseToTask(promise).fork(noop, noop);

      expect(promise).toHaveBeenCalled();
    });

    it('calls success function with value resolved from given promise when task is ran', async () => {
      const promise = jest.fn(() => Promise.resolve(1));
      const success = jest.fn();
      const error = jest.fn();
      await promiseToTask(promise).fork(error, success);

      expect(success).toHaveBeenCalledWith(1);
      expect(error).not.toHaveBeenCalled();
    });

    it('calls error function with error rejected from given promise when task is ran', async () => {
      const promise = jest.fn(() => Promise.reject(new Error('🔥')));
      const success = jest.fn();
      const error = jest.fn();
      await promiseToTask(promise).fork(error, success);

      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledWith(new Error('🔥'));
    });
  });

  describe('.trim(str)', () => {
    it('returns newline string when given an empty string', () => {
      expect(trim('')).toBe('\n');
    });

    each([
      [1, 'hello '],
      [5, 'hello     ']
    ]).it('returns given string with trailing whitespace (%s) replaced with newline character', (_, str) => {
      expect(trim(str)).toBe('hello\n');
    });

    each([
      [1, ' hello'],
      [5, '     hello']
    ]).it(
      'returns given string with leading whitespace (%s) removed and with newline character at end of string',
      (_, string) => {
        expect(trim(string)).toBe('hello\n');
      }
    );

    it('returns given string with leading whitespace removed and trailing whitespace replaced with newline character', () => {
      expect(trim(' hello ')).toBe('hello\n');
    });
  });
});
