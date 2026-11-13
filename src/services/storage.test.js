import { beforeEach, describe, expect, it } from "vitest";
import { StorageHandler } from "./storage";

describe("StorageHandler", () => {
  beforeEach(() => localStorage.clear());

  it("round-trips data", () => {
    const storage = new StorageHandler("favorites");

    storage.saveData([{ id: 1 }]);

    expect(storage.getData()).toEqual([{ id: 1 }]);
  });

  it("returns an empty list for missing or corrupted data", () => {
    const storage = new StorageHandler("favorites");
    expect(storage.getData()).toEqual([]);

    localStorage.setItem("favorites", "{not json");
    expect(storage.getData()).toEqual([]);
  });
});
