const Task = require('data.task');
const fsTask = require('./fsTask');

describe('fsTask', () => {
  describe('.copy', () => {
    const from = '/old';
    const to = '/new';
    const result = 'Moved old to new';

    it('returns a Task', () => {
      const fs = { copy: jest.fn() };
      const { copy } = fsTask(fs);
      expect(copy(from, to, result)).toBeInstanceOf(Task);
    });

    it('calls given success function with result when fs.copy is successful', async () => {
      const fs = { copy: jest.fn(() => Promise.resolve()) };
      const { copy } = fsTask(fs);
      const success = jest.fn();
      const error = jest.fn();

      await copy(from, to, result).fork(error, success);

      expect(fs.copy).toBeCalledWith(from, to);
      expect(success).toHaveBeenCalledWith(result);
      expect(error).not.toHaveBeenCalled();
    });

    it('calls given error function with rejected error when fs.copy fails', async () => {
      const fs = { copy: jest.fn(() => Promise.reject('ERROR')) };
      const { copy } = fsTask(fs);
      const success = jest.fn();
      const error = jest.fn();

      await copy(from, to, result).fork(error, success);

      expect(fs.copy).toBeCalledWith(from, to);
      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledWith('ERROR');
    });
  });

  describe('.write', () => {
    const filename = 'hello.js';
    const contents = 'hi!';
    const result = 'Successfully created hello.js';

    it('returns a Task', () => {
      const fs = { outputFile: jest.fn() };
      const { write } = fsTask(fs);
      expect(write(filename, contents, result)).toBeInstanceOf(Task);
    });

    it('calls given success function with result when fs.outputFile is successful', async () => {
      const fs = { outputFile: jest.fn(() => Promise.resolve()) };
      const { write } = fsTask(fs);
      const success = jest.fn();
      const error = jest.fn();

      await write(filename, contents, result).fork(error, success);

      expect(fs.outputFile).toBeCalledWith(filename, contents);
      expect(success).toHaveBeenCalledWith(result);
      expect(error).not.toHaveBeenCalled();
    });

    it('calls given error function with rejected error when fs.outputFile fails', async () => {
      const fs = { outputFile: jest.fn(() => Promise.reject('ERROR')) };
      const { write } = fsTask(fs);
      const success = jest.fn();
      const error = jest.fn();

      await write(filename, contents, result).fork(error, success);

      expect(fs.outputFile).toBeCalledWith(filename, contents);
      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledWith('ERROR');
    });
  });

  describe('.exists', () => {
    const path = '/a/path/hello.js';
    const result = 'Path exists';

    it('returns a Task', () => {
      const fs = { pathExists: jest.fn() };
      const { exists } = fsTask(fs);
      expect(exists(path, result)).toBeInstanceOf(Task);
    });

    it('calls given success function with result when fs.pathExists is successful and returns false', async () => {
      const fs = { pathExists: jest.fn(() => Promise.resolve(false)) };
      const { exists } = fsTask(fs);
      const success = jest.fn();
      const error = jest.fn();

      await exists(path, result).fork(error, success);

      expect(fs.pathExists).toBeCalledWith(path);
      expect(success).toHaveBeenCalledWith(result);
      expect(error).not.toHaveBeenCalled();
    });

    it('calls given error function with result when fs.pathExists is successful and returns true', async () => {
      const fs = { pathExists: jest.fn(() => Promise.resolve(true)) };
      const { exists } = fsTask(fs);
      const success = jest.fn();
      const error = jest.fn();

      await exists(path, result).fork(error, success);

      expect(fs.pathExists).toBeCalledWith(path);
      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledWith(new Error('Error given project path: "/a/path/hello.js" already exists'));
    });

    it('calls given error function with rejected error when fs.pathExists fails', async () => {
      const fs = { pathExists: jest.fn(() => Promise.reject('ERROR')) };
      const { exists } = fsTask(fs);
      const success = jest.fn();
      const error = jest.fn();

      await exists(path, result).fork(error, success);

      expect(fs.pathExists).toBeCalledWith(path);
      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledWith('ERROR');
    });
  });
});
