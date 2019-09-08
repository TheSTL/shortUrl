import models from '../config/database'

const create = async ({
  shortUrl,
  longUrl,    
}) => {
    try{
        const query ='INSERT INTO urls (short_url, long_url) VALUES(?, ?)'
        await models.sequelize.query(query, {
            replacements: [shortUrl, longUrl],
            type: models.sequelize.QueryTypes.INSERT,
        });
        return {
            shortUrl,
            longUrl
        };
    }
    catch(err){
        throw err;
    }  
}

const isExist =  async({
  shortUrl,
}) => {
    try{
        const query ='SELECT * FROM urls WHERE short_url = ?'
        const list = await models.sequelize.query(query, {
            replacements: [shortUrl],
            type: models.sequelize.QueryTypes.SELECT,
        });
        if ( list.length ){
            return true
        }
        return false;
    }
    catch(err){
        throw err;
    }  
}
const updateShortUrl =  async({
    shortUrl,
    longUrl,
  }) => {
      try{
          const query ='UPDATE urls set long_url = ? WHERE short_url = ?'
          await models.sequelize.query(query, {
              replacements: [longUrl, shortUrl],
              type: models.sequelize.QueryTypes.UPDATE,
          });
          return {
            shortUrl,
            longUrl,
          };
      }
      catch(err){
          throw err;
      }  
  }

const getLongUrl =  async({
    shortUrl,
  }) => {
      try{
          const query ='SELECT * FROM urls WHERE short_url = ?'
          const list = await models.sequelize.query(query, {
              replacements: [shortUrl],
              type: models.sequelize.QueryTypes.SELECT,
          });
          if (list.length === 0){
              throw new Error('Not Found!');
          }
          return list[0];
      }
      catch(err){
          throw err;
      }  
  }

export {
    create,
    isExist,
    getLongUrl,
    updateShortUrl,
}