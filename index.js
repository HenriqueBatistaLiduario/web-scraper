// Importar dinamicamente os módulos website-scraper e website-scraper-puppeteer
import('website-scraper').then(scraperModule => {
    import('website-scraper-puppeteer').then(puppeteerModule => {
        const PuppeteerPlugin = puppeteerModule.default; // Ajuste aqui para pegar o construtor adequado
        const path = require('path'); // path ainda pode ser usado com require se for um módulo CommonJS

        scraperModule.default({
            urls: ['https://metodofanart.com.br/'],
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
