const notion = require('../notion/functions');
const state = require('../state/index');
const page = require('../input');

async function init() {
    try {
        //const idPage = await page(); 
        const contents = await notion.contentWithBlocks("cdd92d0268714e52ac43cd7c6494390d");
       await state.save(contents.results);
    } catch(err){
        console.error('Erro:',err);
    }

}

init();



