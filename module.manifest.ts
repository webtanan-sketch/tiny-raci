export const moduleManifest = {
  id: 'tiny-raci',
  version: '0.1.0-foundation',
  name: { fa: 'ماتریس RACI', en: 'RACI' },
  description: {
    fa: 'شفاف‌سازی مسئول، پاسخگو، مشاور و افراد مطلع هر فعالیت.',
    en: 'Clarify responsible, accountable, consulted and informed roles.',
  },
  icon: 'Network',
  route: '/modules/raci',
  repository: 'https://github.com/webtanan-sketch/tiny-raci',
  category: 'people',
  maturity: 'foundation',
  capabilities: {
    dashboardWidget: false,
    globalSearch: false,
    exportData: true,
    sharedPeople: true,
    sharedProjects: true,
    notifications: false,
  },
} as const;

export default moduleManifest;
