import { WebPlugin } from '@capacitor/core';
import { OAuth2AuthenticateOptions, OAuth2ClientPlugin, OAuth2RefreshTokenOptions } from "./definitions";
export declare class OAuth2ClientPluginWeb extends WebPlugin implements OAuth2ClientPlugin {
    private webOptions;
    private windowHandle;
    private intervalId;
    private loopCount;
    private intervalLength;
    private windowClosedByPlugin;
    constructor();
    /**
     * Get a new access token using an existing refresh token.
     */
    refreshToken(options: OAuth2RefreshTokenOptions): Promise<any>;
    authenticate(options: OAuth2AuthenticateOptions): Promise<any>;
    private requestResource;
    logout(options: OAuth2AuthenticateOptions): Promise<void>;
    private closeWindow;
}
declare const OAuth2Client: OAuth2ClientPluginWeb;
export { OAuth2Client };
