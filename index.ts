import { Provider, lambda } from "@pulumi/aws";
import { handler } from './handler';

const usEast1Provider = new Provider('usEast1', {region: 'us-east-1'})

new lambda.CallbackFunction('test', {
            name: 'test',
            runtime: 'nodejs18.x',
            publish: true,
            callback: handler
        }, { provider: usEast1Provider });
