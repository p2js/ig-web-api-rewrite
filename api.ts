const baseUrl = 'https://www.instagram.com';

export default class Client {
    credentials: { username: string, password: string };
    baseRequestOptions: {
        baseUrl: string,
        uri: string,
        headers: object,
        proxy: string,
        json: boolean
    };

    constructor(username: string, password: string, options?: Partial<{ language: string, proxyURL: string }>) {
        this.credentials = { username, password };

        const csrftoken = localStorage.getItem('csrftoken');

        this.baseRequestOptions = {
            baseUrl,
            uri: "",
            headers: {
                'User-Agent': window.navigator.userAgent,
                'Accept-Language': options.language || 'en-US',
                'X-Instagram-AJAX': 1,
                'X-CSRFToken': csrftoken,
                'X-Requested-With': 'XMLHttpRequest',
                Referer: baseUrl
            },
            proxy: options.proxyURL,
            json: true
        }
    }
}