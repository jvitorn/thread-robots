const notion = require('../notion/functions');
const page = require('../input');

async function init() {
    try {
        const idPage = await page(); 
        const results = await notion.contentWithBlocks(idPage);
        console.log(results);
    } catch(err){
        console.error('Erro:',err);
    }
    

}

init();



