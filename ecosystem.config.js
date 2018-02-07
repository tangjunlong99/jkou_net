module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Jkou_net',
      script    : './bin/www',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
        user: 'root',
        host: '207.246.102.255',
        ref: 'origin/master',
        repo: 'git@github.com:tangjunlong99/jkou_net.git',
        path: '/home/root/www/production',
        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
