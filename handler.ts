interface HeaderValue {
    key: string;
    value: string;
}

interface Headers {
    [name: string]: HeaderValue[];
}

interface ViewerRequest {
    Records: {
        cf: {
            config: {
                distributionDomainName: string;
                distributionId: string;
                eventType: string;
                requestId: string
            },
            request: {
                clientIp: string;
                headers: Headers;
                method: string;
                querystring: string;
                uri: string;
                body: {
                    inputTruncated: boolean;
                    action: 'read-only' | 'replace';
                    encoding: 'base64' | 'text';
                    data: string;
                }
            }
        }
    }[];
}

export async function handler(event: ViewerRequest) {
    console.log(event);
}