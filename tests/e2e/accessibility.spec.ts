import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
test('homepage has no critical automated accessibility violations after intro', async ({ page }) => { await page.goto('/'); await page.getByRole('button', { name: 'Skip Intro' }).click(); await expect(page.getByRole('dialog')).toHaveCount(0); const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).disableRules(['color-contrast']).analyze(); expect(results.violations.filter(x => ['critical', 'serious'].includes(x.impact ?? '')).map(x => x.id)).toEqual([]) })
