// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'EMBER Hotspot',
      link: {
        type: 'doc',
        id: 'hotspot/index',
      },
      collapsed: false,
      items: [
        'hotspot/hardware',
        'hotspot/mikrotik'
      ],
    },
    'connect',
    {
      type: 'category',
      label: 'EMBER Cloud',
      link: {
        type: 'doc',
        id: 'cloud/index',
      },
      collapsed: false,
      items: [
        'cloud/login',
        'cloud/chirpstack',
        'cloud/node-red',
        'cloud/tunnel-configuration',
      ],
    },
    'ordering-codes'
  ],
};

module.exports = sidebars;
