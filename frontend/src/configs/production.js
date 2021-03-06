module.exports = {
  TASKCLUSTER_ROOT_URL: 'https://firefox-ci-tc.services.mozilla.com',
  TREEHERDER_URL: 'https://treeherder.mozilla.org',
  AUTH0: {
    domain: 'auth.mozilla.auth0.com',
    clientID: '2dXygwTNP3p7iLTSaEWbdoiJFkjSBqm4',
    redirectUri: new URL('/login', window.location).href,
    scope: 'full-user-credentials openid profile email',
    responseType: 'token id_token',
    audience: 'https://auth.mozilla.auth0.com/api/v2/',
  },
  PRODUCTS: [
    {
      product: 'firefox',
      prettyName: 'Firefox Desktop',
      appName: 'browser',
      branches: [
        {
          prettyName: 'Beta',
          project: 'mozilla-beta',
          branch: 'releases/mozilla-beta',
          repo: 'https://hg.mozilla.org/releases/mozilla-beta',
          enableReleaseEta: false,
          disableable: true,
        },
        {
          prettyName: 'Release',
          project: 'mozilla-release',
          branch: 'releases/mozilla-release',
          repo: 'https://hg.mozilla.org/releases/mozilla-release',
          enableReleaseEta: true,
          rcBranch: 'releases/mozilla-beta',
          rcBranchVersionPattern: /b/,
          rcRepo: 'https://hg.mozilla.org/releases/mozilla-beta',
          numberOfPartials: 4,
          disableable: false,
        },
        {
          prettyName: 'ESR68',
          project: 'mozilla-esr68',
          branch: 'releases/mozilla-esr68',
          repo: 'https://hg.mozilla.org/releases/mozilla-esr68',
          enableReleaseEta: true,
          numberOfPartials: 5,
          alternativeBranch: 'releases/mozilla-esr60',
          alternativeRepo: 'https://hg.mozilla.org/releases/mozilla-esr60',
          disableable: false,
        },
        {
          prettyName: 'ESR78',
          project: 'mozilla-esr78',
          branch: 'releases/mozilla-esr78',
          repo: 'https://hg.mozilla.org/releases/mozilla-esr78',
          enableReleaseEta: true,
          numberOfPartials: 5,
          alternativeBranch: 'releases/mozilla-esr68',
          alternativeRepo: 'https://hg.mozilla.org/releases/mozilla-esr68',
          disableable: false,
        },
      ],
      enablePartials: true,
    },
    {
      product: 'fennec',
      prettyName: 'Firefox Mobile',
      // TODO: The actual appName is `mobile/android` but it gets the version
      // from `browser`.
      appName: 'browser',
      branches: [
        {
          prettyName: 'Release',
          project: 'mozilla-esr68',
          branch: 'releases/mozilla-esr68',
          repo: 'https://hg.mozilla.org/releases/mozilla-esr68',
          productKey: 'fennec_release',
          versionFile:
            'mobile/android/config/version-files/release/version_display.txt',
          disableable: false,
        },
      ],
      enablePartials: false,
    },
    {
      product: 'devedition',
      prettyName: 'Firefox Developer Edition',
      appName: 'browser',
      branches: [
        {
          prettyName: 'Beta',
          project: 'mozilla-beta',
          branch: 'releases/mozilla-beta',
          repo: 'https://hg.mozilla.org/releases/mozilla-beta',
          enableReleaseEta: false,
          disableable: true,
        },
      ],
      enablePartials: true,
    },
    {
      product: 'thunderbird',
      prettyName: 'Thunderbird',
      appName: 'mail',
      branches: [
        {
          prettyName: 'Beta',
          project: 'comm-beta',
          branch: 'releases/comm-beta',
          repo: 'https://hg.mozilla.org/releases/comm-beta',
          enableReleaseEta: false,
          disableable: false,
        },
        {
          prettyName: 'ESR68',
          project: 'comm-esr68',
          branch: 'releases/comm-esr68',
          repo: 'https://hg.mozilla.org/releases/comm-esr68',
          enableReleaseEta: false,
          disableable: false,
        },
      ],
      enablePartials: true,
    },
  ],
  XPI_MANIFEST: {
    branch: 'master',
    owner: 'mozilla-extensions',
    repo: 'xpi-manifest',
  },
};
