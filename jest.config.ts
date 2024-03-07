import type { Config } from "jest";

const config: Config = {
  roots: ["./src"],
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  passWithNoTests: true,
};

export default config;
