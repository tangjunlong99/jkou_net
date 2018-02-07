module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */

   apps : [

      // First application
      {
          name      : 'jkou_net',
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
            user: 'tangjunlong',
            host: '207.246.102.255',
            ref: 'origin/master',
            repo: 'git@github.com:tangjunlong99/jkou_net.git',
            path: '/home/tangjunlong/site/deploy',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    },

    dev : {
      user : 'tangjunlong',
      host : '207.246.102.255',
      ref  : 'origin/master',
      repo : 'git@github.com:tangjunlong99/jkou_net.git',
      path : '/home/tangjunlong/site/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
};
