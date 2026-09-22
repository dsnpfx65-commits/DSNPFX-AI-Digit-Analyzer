# DSNPFX DIGIT INTELLIGENCE

Browser-first Deriv last-digit research dashboard.

## Design
- Direct Deriv WebSocket tick history + live ticks.
- Frequency + recency + order-2 transition scoring.
- Entropy / regime checks.
- Walk-forward validation on recent history.
- NO TRADE gate when the data does not support a signal.

This project does **not** claim guaranteed accuracy or a fixed 96% confidence level. The confidence displayed by the UI is a model score, and the validation gate is intended to prevent fabricated certainty.

## Run
`npm install && npm start`

Health: `/health`
