import { App } from 'aws-cdk-lib';
import { ApiStack } from '../lib/api-stack';

const app = new App();

new ApiStack(app, 'ApiStack', {
  env: { account: '111111111111', region: 'eu-west-2' },
});
