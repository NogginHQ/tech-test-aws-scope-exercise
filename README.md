# AWS Scope

## The task

An AI assistant wrote a deployment plan for a new service. Review the plan against our situation. Decide what we should build, and explain why.

## What is in this repository

| File | What it is |
|---|---|
| `facts.md` | Our situation: the team, the customers and the limits. Read this first. |
| `plan.md` | The plan that the AI assistant wrote. |
| `infra/` | The AWS CDK (infrastructure as code) app for the service that runs today. |

## Your time

1. Read `facts.md` and `plan.md`. This takes about 5 minutes.
2. Review the plan. You have about 15 to 20 minutes.

## What to give us

Tell us, in writing or out loud:

1. What you keep.
2. What you change.
3. What you remove.
4. Why, for each one.
5. Any risks that you see.

There is no single correct answer. We want to hear your reasons.

## Rules

- You can use any AI tool that you like.
- We care about your judgement, not the judgement of the AI.
- You do not need an AWS account.
- You can ask us questions at any time.

## If you have time

Add the new service to `infra/` behind the existing load balancer, with its secret and autoscaling. Use any tools that you like.

To check your change:

```
cd infra
npm install
npx cdk synth
```
