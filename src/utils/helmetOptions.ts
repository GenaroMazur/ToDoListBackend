import { HelmetOptions } from "helmet";

export const helmetOptions: HelmetOptions = {
    "hidePoweredBy": true,
    "noSniff": true,
    "frameguard": {
        "action": "deny"
    },
    "xssFilter": true,
    "referrerPolicy": {
        "policy": "same-origin"
    }
} as const;