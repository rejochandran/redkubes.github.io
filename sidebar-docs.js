module.exports = {
  mainSidebar: {
    'Installing Otomi': ['inst-overview', 'inst-prerequisites', 'inst-chart'],
    'Otomi Console': [
      'overview',
      'teams',
      'services',
      'jobs',
      'secrets',
      'platform-apps',
      { 'Settings': ['settings-alerts','settings-azure','settings-customer','settings-dns','settings-home','settings-kms','settings-oidc','settings-otomi','settings-policies','settings-smtp'] },
      'clusters',
      'team-apps',
      'deploy-changes'],
    'Applications': [
      'app-drone', 
      'app-harbor', 
      'app-keycloak', 
      'app-kubeapps', 
      'app-vault', 
      'app-gatekeeper'],
    'Otomi CLI': [
      'cli-overview',
      {
        'CLI Commands': [
          'cli-apply',
          'cli-bash',
          'cli-bootstrap',
          'cli-check-policies',
          'cli-commit',
          'cli-decrypt',
          'cli-destroy',
          'cli-diff',
          'cli-encrypt',
          'cli-lint',
          'cli-pull',
          'cli-rotate-keys',
          'cli-status',
          'cli-sync',
          'cli-template',
          'cli-test',
          'cli-validate-templates',
          'cli-validate-values',
          'cli-values',
          'cli-x',
        ],
      },
    ],
    'SRE': [
      'sre-overview', 
      'sre-daily', 
      'sre-troubleshooting', { 'Known Issues': ['ki-overview', 'ki-cli', 'ki-harbor', 'ki-istio', 'ki-loki', 'ki-staging-certs'] }, 
      'lm-upgrades'],
    // Reference: [
    //   'ref-app-suite',
    //   {
    //     type: 'link',
    //     label: 'Values Schema',
    //     href: '/schema-viewer',
    //   },
    // ],
    // FAQ: ['faq'],
  },
}
