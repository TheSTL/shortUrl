import Sequelize from 'sequelize'
import {sequelize} from '../config/database'


const Urls=sequelize.define('urls',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    short_url:{
        type:Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    long_url:{
        type:Sequelize.STRING,
        allowNull: false
    }

},{ tableName: 'urls',timestamps: true,})

export {
    Urls
}