const generateId = require('../../src/utils/generateId');

describe('Generate ID', () => {
    const id = generateId();
    it('should generate an unique id', () => {
        expect(id).toHaveLength(8);
    });
});