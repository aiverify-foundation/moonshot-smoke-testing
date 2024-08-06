import { test, expect } from '@playwright/test';
import { main_page_startup } from './common';

// ---------------------------------------------------------------------------------------------------------------------
// Test moonshot - init page
// ---------------------------------------------------------------------------------------------------------------------
/**
 * Test case for verifying the startup page elements.
 * It navigates to the startup page and checks for the visibility of various elements.
 *
 * @param {import('@playwright/test').Page} page - The Playwright page objects.
 */
test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});
test('test_util_page_view_prompt-templates', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await main_page_startup(page);
  const submitButton = page.locator('#navContainer').getByRole('link').nth(4)
  await expect(submitButton).toBeVisible();
  await submitButton.click();
  // Assertion for redirecting to right page
  await expect(page.getByRole('heading', { name: 'moonshot utilities' })).toBeVisible();
  await page.getByRole('button', { name: 'View Prompt Templates' }).click();
  await expect(page.locator('header').filter({ hasText: 'Prompt Templates' })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'tamil-templatenewsclassificationThis template is used for Tamil News' })).toBeVisible();
});