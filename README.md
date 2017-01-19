# invest-watch
Get alerted when your investment is updated

## Running

Install
```
npm install
```

Run
```
npm start
```

Add environment variables for fund type and number of shares.
```
SHARES_COUNT=51 FUND_TYPE=OPPORTUNITY npm start
```

`SHARES_COUNT` is a number with default value of `1`.

`FUND_TYPE` is one of `DEFENSIVE`, `MODERATE_SHORT`, `MODERATE`, `BALANCED`, `PROGRESSIVE`, `OPPORTUNITY` with a default value of `BALANCED`.

## Code quality
Testing
```
npm test
```

Test coverage
```
npm run test:coverage
```

Linting
```
npm run lint
```
