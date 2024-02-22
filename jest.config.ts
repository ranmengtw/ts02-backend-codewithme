import type { Config } from "jest";

const config: Config = {
  roots: ["./src"],
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
