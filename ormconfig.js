console.log('process.env.DATA_URL: ', process.env.DATABASE_URL)
module.exports = {
  "url": process.env.DATABASE_URL,
  "type": "postgres",
  "entities": [
    "src/models/*.ts"
  ],
  "migrations": [
    "src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}