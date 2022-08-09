const axios  = require('axios');
const config = require('../../credentials.json')
require('dotenv').config()
const url = {
    base:'https://api.notion.com/v1',
    blocks:'/blocks',
    page:'/pages',
    children:'/children',
};

const header = {
    headers : {
        'Notion-Version': '2022-06-28',
        'authorization': 'Bearer '+ config.NOTION_TOKEN,
        'Content-Type':'application/json'
    }
}

const notionApi = {
    async contentWithBlocks(pageID) {
        try {
            const urlApi = url.base + url.blocks + '/'+ pageID + url.children;
            console.log('headers:',header);

            const contentPage = await axios.get(urlApi,header);
            return contentPage.data;
        } catch(err){
            throw new Error('Erro ao capturar conteúdo total do Notion' + err);
        }
    },
}

module.exports = notionApi;
