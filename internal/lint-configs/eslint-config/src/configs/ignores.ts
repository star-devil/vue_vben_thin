import type { Linter } from 'eslint';

export async function ignores(): Promise<Linter.Config[]> {
  return [
    {
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/dist-*',
        '**/*-dist',
        '**/.husky',
        '**/.nitro',
        '**/.output',
        '**/Dockerfile',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/bun.lockb',
        '**/output',
        '**/coverage',
        '**/temp',
        '**/.temp',
        '**/tmp',
        '**/.tmp',
        '**/.history',
        '**/.turbo',
        '**/.nuxt',
        '**/.next',
        '**/.vercel',
        '**/.idea',
        '**/.cache',
        '**/.output',
        '**/.vite-inspect',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/*.snap',
        '**/fixtures/**',
        '**/.vitepress/cache/**',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/vite.config.mts.*',
        '**/*.sh',
        '**/*.ttf',
        '**/*.woff',
      ],
    },
  ];
}
