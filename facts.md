# Our situation

We are Ledgerline, a small UK fintech company.

## The team

- We have 2 engineers.
- The 2 engineers own all code, infrastructure and support.

## The product

- We sell one HTTPS API to about 10 business customers. The customers are lenders.
- The UK financial regulator regulates us.
- Our security certification (ISO 27001) is in progress. Auditors check who can access what, and how we change production.

## The new service

- The new service is called `score`. It runs a Python model.
- The model needs about 4 vCPU for each request. It uses CPU only. It does not use a GPU.
- The model takes about 15 seconds to start.
- Customers need an answer in less than 2 seconds.

## Traffic

- Most traffic comes during UK business hours.
- Sometimes a customer uploads a large batch overnight.

## Limits

- All infrastructure must be code: AWS CDK (Amazon's infrastructure as code tool) in TypeScript.
- We use one AWS region: eu-west-2 (London).
- The infrastructure budget is £1,500 each month, for everything.
