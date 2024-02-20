// You can also use CommonJS `require('@sentry/node')` instead of `import`
import * as Sentry from "@sentry/node";
import { ProfilingIntegration } from "@sentry/profiling-node";
import { rewriteFramesIntegration } from "@sentry/integrations";

Sentry.init({
  dsn: "https://7a6723fcf92540104d6ab1bdaa6fd668@o4506746476429312.ingest.sentry.io/4506780176351232",
  integrations: [
    rewriteFramesIntegration({ prefix: "random:\\" }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

throw new Error('Dooho')
