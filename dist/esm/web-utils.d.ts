import { OAuth2AuthenticateOptions } from "./definitions";
export declare class WebUtils {
    /**
     * Public only for testing
     */
    static getAppId(options: OAuth2AuthenticateOptions): string;
    static getOverwritableValue<T>(options: OAuth2AuthenticateOptions | any, key: string): T;
    /**
     * Public only for testing
     */
    static getAuthorizationUrl(options: WebOptions): string;
    static getTokenEndpointData(options: WebOptions, code: string): string;
    /**
     * Public only for testing
     */
    static getUrlParams(urlString: string): any | undefined;
    static randomString(length?: number): string;
    static buildWebOptions(configOptions: OAuth2AuthenticateOptions): Promise<WebOptions>;
}
export declare class CryptoUtils {
    static BASE64_CHARS: string;
    static HAS_SUBTLE_CRYPTO: boolean;
    static toUint8Array(str: string): Uint8Array;
    static toBase64Url(base64: string): string;
    static toBase64(bytes: Uint8Array): string;
    static deriveChallenge(codeVerifier: string): Promise<string>;
}
export declare class WebOptions {
    appId: string;
    authorizationBaseUrl: string;
    accessTokenEndpoint: string;
    resourceUrl: string;
    responseType: string;
    scope: string;
    state: string;
    redirectUrl: string;
    windowOptions: string;
    windowTarget: string;
    pkceEnabled: boolean;
    pkceCodeVerifier: string;
    pkceCodeChallenge: string;
    pkceCodeChallengeMethod: string;
    additionalParameters: {
        [key: string]: string;
    };
}
