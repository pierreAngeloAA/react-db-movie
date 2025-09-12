export class StorageHandler {
  constructor(key) {
    this.key = key;
  }

  getData() {
    if (!this.key) return [];

    const raw = localStorage.getItem(this.key);
    if (!raw || raw === "undefined") return [];

    try {
      return JSON.parse(raw);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  }

  saveData(data) {
    if (!this.key) return;
    const serialized = JSON.stringify(data);
    localStorage.setItem(this.key, serialized);
  }
}
