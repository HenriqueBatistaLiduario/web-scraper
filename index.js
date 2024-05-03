// Importar dinamicamente os módulos website-scraper e website-scraper-puppeteer
import('website-scraper').then(scraperModule => {
    import('website-scraper-puppeteer').then(puppeteerModule => {
        const PuppeteerPlugin = puppeteerModule.default;
        const path = require('path');

        scraperModule.default({
            urls: ['https://example.com.br/'],
            directory: path.resolve(__dirname, 'src'),
            plugins: [
                new PuppeteerPlugin({
                    launchOptions: { headless: true },
                    scrollToBottom: { timeout: 10000, viewportN: 10 }
                })
            ]
        });
    }).catch(error => console.error('Erro ao importar website-scraper-puppeteer:', error));
}).catch(error => console.error('Erro ao importar website-scraper:', error));
