import config from './app.config'

const commonSetting = {
  username: config.get('db.username'),
  password: config.get('db.password'),
  database: config.get('db.name'),
  host: config.get('db.host'),
  port: config.get('db.port'),
  dialect: 'postgres',
  dialectOptions: {
    application_name: config.get('app.name')
  },
  define: {
    underscored: true,
    timestamps: true
  },
  pool: {
    max: 50,
    min: 0,
    idle: 5000,
    evict: 5000,
    acquire: 200000
  }
}

export const development = {
  ...commonSetting
}

export const test = {
  ...commonSetting
}

export const staging = {
  ...commonSetting
}

export const production = {
  ...commonSetting
}
