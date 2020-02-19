const connection = require('../Configs/mysql')

module.exports = {
    cateAll : (searchName) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM category WHERE name LIKE '%${searchName}%'`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    inputCategory : (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO category SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateCategory : (data, categoryId) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE category SET ? WHERE id = ?', [data, categoryId], (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteProduct : (categoryId) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM category WHERE id = ?', categoryId , (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}