const axios = require('axios');
const nodeCache = require( "node-cache" );

function Owlbot(token, timeout=5000, cache=true) {
    if (!token) {
      throw "Token is not provided. if you don't have a token, you can get one at https://owlbot.info.";
    }
    return {
        client: axios.create({
            baseURL: 'https://owlbot.info',
            timeout: timeout,
            headers: {'Authorization': 'Token '+token}
        }),
        responsesCache: new nodeCache(),
        data: null,
        define: async function(word) {
            if(!word){
                throw 'Word is not provided.';
            }
            var self = this;
            if(cache) {
                var cachedWord = self.responsesCache.get(word);
                if (cachedWord != undefined) {
                    self.data = cachedWord;
                    return self.data;
                }
            }
            await this.client.get('/api/v4/dictionary/'+word).then(function (response) {
                self.data = response.data;
                if (cache) {
                    self.responsesCache.set(word, response.data)
                }
            }).catch(function(error){
                throw error;
            });
            return self.data;
        }
    }
}

module.exports = Owlbot;