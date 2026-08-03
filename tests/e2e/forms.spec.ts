import { expect, test } from '@playwright/test'
test('quote form displays validation', async ({ page }) => { await page.goto('/quote'); await page.getByRole('button', { name: /request a quote/i }).click(); await expect(page.getByText(/first name is required/i)).toBeVisible() })
