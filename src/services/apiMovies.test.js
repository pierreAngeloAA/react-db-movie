import { afterEach, describe, expect, it, vi } from "vitest";
import { getMovies, getPopularMovies, getTopRatedMovies, PLACEHOLDER_POSTER } from "./apiMovies";

const respond = (body, { ok = true, status = 200 } = {}) => {
  globalThis.fetch = vi.fn().mockResolvedValue({ ok, status, json: async () => body });
};
const calledUrl = () => new URL(globalThis.fetch.mock.calls[0][0]);

afterEach(() => vi.restoreAllMocks());

describe("apiMovies", () => {
  it("maps TMDB results to the fields the UI uses", async () => {
    respond({ results: [{ id: 1, title: "Dune", poster_path: "/dune.jpg", overview: "Spice" }] });

    expect(await getPopularMovies()).toEqual([
      { id: 1, title: "Dune", poster: "https://image.tmdb.org/t/p/w500/dune.jpg", overview: "Spice" },
    ]);
  });

  it("uses a working placeholder when a movie has no poster", async () => {
    respond({ results: [{ id: 2, title: "X", poster_path: null, overview: "" }] });

    const [movie] = await getTopRatedMovies();

    expect(movie.poster).toBe(PLACEHOLDER_POSTER);
    expect(movie.poster).not.toContain("via.placeholder.com");
  });

  it("encodes the search text in the URL", async () => {
    respond({ results: [] });

    await getMovies("Tom & Jerry #2");

    expect(calledUrl().searchParams.get("query")).toBe("Tom & Jerry #2");
  });

  it("throws a readable error when TMDB answers with an error", async () => {
    respond({ status_message: "Invalid API key" }, { ok: false, status: 401 });

    await expect(getPopularMovies()).rejects.toThrow("TMDB request failed (401)");
  });

  it("returns an empty list for an unexpected payload", async () => {
    respond({});

    expect(await getPopularMovies()).toEqual([]);
  });
});
