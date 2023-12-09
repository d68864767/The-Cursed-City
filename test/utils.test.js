const { removeCursedRoads, convertToAdjacencyList } = require('../utils');
const { expect } = require('@jest/globals');
const { MAX_BUILDINGS } = require('../config');

describe('Utility Functions', () => {
  describe('removeCursedRoads', () => {
    test('should remove a single cursed road from the list of roads', () => {
      const roads = [[1, 2], [2, 3], [3, 4], [4, 5]];
      const cursedRoads = [[2, 3]];
      const expected = [[1, 2], [3, 4], [4, 5]];
      expect(removeCursedRoads(roads, cursedRoads)).toEqual(expected);
    });

    test('should remove multiple cursed roads from the list of roads', () => {
      const roads = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 3]];
      const cursedRoads = [[2, 3], [1, 3]];
      const expected = [[1, 2], [3, 4], [4, 5]];
      expect(removeCursedRoads(roads, cursedRoads)).toEqual(expected);
    });

    test('should return the same list if there are no cursed roads', () => {
      const roads = [[1, 2], [2, 3], [3, 4], [4, 5]];
      const cursedRoads = [];
      expect(removeCursedRoads(roads, cursedRoads)).toEqual(roads);
    });

    test('should handle the case where no roads are left after removing cursed roads', () => {
      const roads = [[1, 2]];
      const cursedRoads = [[1, 2]];
      const expected = [];
      expect(removeCursedRoads(roads, cursedRoads)).toEqual(expected);
    });
  });

  describe('convertToAdjacencyList', () => {
    test('should convert an empty list of roads to an empty adjacency list', () => {
      const n = MAX_BUILDINGS;
      const roads = [];
      const adjacencyList = convertToAdjacencyList(n, roads);
      expect(Object.keys(adjacencyList).length).toBe(n);
      Object.values(adjacencyList).forEach(neighbors => {
        expect(neighbors).toEqual([]);
      });
    });

    test('should convert a list of roads to an adjacency list', () => {
      const n = 5;
      const roads = [[1, 2], [2, 3], [3, 4], [4, 5]];
      const expected = {
        1: [2],
        2: [1, 3],
        3: [2, 4],
        4: [3, 5],
        5: [4]
      };
      expect(convertToAdjacencyList(n, roads)).toEqual(expected);
    });

    test('should handle roads with multiple connections', () => {
      const n = 4;
      const roads = [[1, 2], [2, 3], [2, 4], [3, 4]];
      const expected = {
        1: [2],
        2: [1, 3, 4],
        3: [2, 4],
        4: [2, 3]
      };
      expect(convertToAdjacencyList(n, roads)).toEqual(expected);
    });
  });
});
