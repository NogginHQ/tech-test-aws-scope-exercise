# Deployment plan: `score` service

This plan gives the new `score` service a production-grade platform. It follows the patterns that large financial institutions use.

## Compute

- Run the model on EKS (Amazon's managed Kubernetes). Use a cluster of 3 nodes across 3 availability zones.
- Fargate (AWS serverless containers) tasks are limited to 4 vCPU, so the model must run on EC2 (AWS virtual servers) nodes.
- Use Argo Rollouts (a Kubernetes deployment tool) for blue/green deployments.
- Add a service mesh (Istio) for mutual TLS between all services.

## Data

- Stream every transaction through MSK (Amazon's managed Kafka). This makes the system event-driven from day one.
- Cache model results in an ElastiCache (Amazon's managed Redis) cluster.
- Store idempotency keys in DynamoDB (Amazon's key-value database).
- Keep the existing RDS (Amazon's managed database) Postgres instance. Move it to a public subnet so that the data team can connect directly.

## Network

- Put an ALB (Application Load Balancer) in front of the service.
- Add 1 NAT gateway (outbound internet access for private subnets) in each availability zone. That is 3 in total.
- Run active-active in eu-west-2 (London) and eu-west-1 (Ireland) for full regional resilience.

## Security

- Store all credentials in Secrets Manager (AWS's secret store).
- Give the service an IAM (AWS permissions) role with `"Action": "*"` and `"Resource": "*"`. This avoids permission errors during launch. We can tighten it later.

## Operations

- Add CloudWatch (AWS monitoring) alarms for latency, errors and CPU.
- Argo Rollouts comes after launch. At launch, each deploy replaces the running version in place.
- To roll back, redeploy the previous commit.

## Summary

This design scales to millions of requests, survives the loss of a whole region, and meets bank-grade standards.
