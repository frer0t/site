export type ChallengeNext = {
  method: string;
  path: string;
  body?: Record<string, unknown>;
  header?: string;
  note?: string;
};

export const CHALLENGE_SESSION_MAX_AGE = 3600;

export const challengeCopy = {
  entry: {
    message:
      "dev challenge — fastest times top /devs. timer starts when you register.",
    next: {
      method: "POST",
      path: "/api/challenge/register",
      body: { name: "your name", language: "your favorite language" },
    },
    hint: "complete all steps to land on the leaderboard",
  },
  register: {
    missingFields: (hint: string) => ({
      message: "missing name or language in request body",
      hint,
    }),
    success: (name: string, language: string, hash: string) => ({
      message: `clock started, ${name}. prove you're a real ${language} dev.`,
      hash,
      hint: "keep your hash — you need it for later steps",
      next: { method: "GET", path: "/api/challenge/proof" },
    }),
    invalidJson: (hint: string) => ({
      message: "invalid json body",
      hint,
    }),
    serverError: {
      message: "something broke on our end. try again.",
    },
  },
  proof: {
    get: (num1: number, num2: number) => ({
      message: `add ${num1} + ${num2}`,
      num1,
      num2,
      next: {
        method: "POST",
        path: "/api/challenge/proof",
        body: { num1, num2 },
        header: "x-developer-skill: sum of num1 and num2",
      },
    }),
    missingBody: {
      message: "include num1 and num2 in the request body",
    },
    missingHeader: {
      message: "add the x-developer-skill header with the sum",
    },
    wrongSum: {
      message: "wrong sum in x-developer-skill header",
      hint: "GET /api/challenge/proof again for fresh numbers",
    },
    success: (hash: string) => ({
      message: "math checks out",
      next: {
        method: "GET",
        path: `/api/challenge/binary/${hash}`,
      },
    }),
    invalidJson: {
      message: "invalid json body",
      hint: "send { num1, num2 } from the GET response",
    },
  },
  binary: {
    hashMismatch: {
      message: "hash in url must match your session from register",
      hint: "use the hash returned by POST /api/challenge/register",
    },
    prompt: (number: number, hash: string) => ({
      message: `convert ${number} to binary`,
      number,
      next: {
        method: "POST",
        path: `/api/challenge/finish/${hash}`,
        header: `x-developer-skill: binary of ${number}`,
      },
    }),
    serverError: {
      message: "something broke on our end. try again.",
    },
  },
  finish: {
    hashMismatch: {
      message: "hash in url must match your session cookie from register",
      hint: "use the hash from POST /api/challenge/register",
    },
    missingHeader: {
      message: "missing x-developer-skill header",
      hint: "set it to the binary from GET /api/challenge/binary/{hash}",
    },
    invalidBinary: {
      message: "x-developer-skill must be a binary string (0s and 1s only)",
    },
    wrongBinary: {
      message: "wrong binary answer",
      hint: "GET /api/challenge/binary/{hash} for the number to convert",
    },
    missingSession: {
      message: "missing name or language — start at POST /api/challenge/register",
    },
    expiredTimer: {
      message: "session expired (1h). restart at POST /api/challenge/register",
    },
    missingTimer: {
      message: "no active timer — start at POST /api/challenge/register",
    },
    success: (
      solveTime: string,
      solveTimeMs: number,
      rank: number
    ) => ({
      message: `you finished in ${solveTime} — rank #${rank} on /devs`,
      solveTime,
      solveTimeMs,
      rank,
      next: {
        method: "GET",
        path: "/devs",
        note: "open in your browser — you're already logged in via cookie",
      },
      submit: {
        method: "POST",
        path: "/api/challenge/submit",
        or: "use the form on /devs (easier than postman)",
        body: {
          initials: "2 letters, required — e.g. fn",
          message: "required — shows on the leaderboard",
          feedback: "optional — thoughts on the challenge",
          link: "optional — your site or github",
        },
      },
    }),
  },
  submit: {
    unauthorized: {
      message: "finish the challenge first — complete POST /api/challenge/finish/{hash}",
    },
    validationFailed: {
      message: "validation failed",
    },
    notFound: {
      message: "no leaderboard entry found — finish the challenge first",
    },
    alreadySubmitted: {
      message: "you already left a message. see /devs",
    },
    success: (rank: number, solveTime: string) => ({
      message: `message saved. you're #${rank} — ${solveTime}. refresh /devs to see it.`,
    }),
    invalidJson: {
      message: "invalid json body",
      hint: "send { initials, message } plus optional feedback and link",
    },
    serverError: {
      message: "something broke on our end. try again.",
    },
  },
};
