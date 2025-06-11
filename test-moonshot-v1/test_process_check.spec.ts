import {test, expect, chromium} from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

async function fillInProcessChecklist(page) {
    let boxStep4 = page.getByText('4', {exact: true});
    // Fill Transparency
    await expect(page.getByRole('heading', {name: 'Transparency'})).toBeVisible();
    await page.getByLabel('Implementation Status for 1.1.1').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.1'}).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.1.2').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.2'}).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.2'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.1.3').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.3'}).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.3'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.1.4').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.4'}).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.4'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.1.5').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.5'}).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.5'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.1.6').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.6'}).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.1.6'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.2').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.2.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.3').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.3.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.4').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.4.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.5').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.5.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.6').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.6.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.7.1').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.7.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 1.7.2').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 1.7.2'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();

    //Assert Complete Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-0').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-0')).toContainText('13 of 13 checks');


    //Explainability Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Explainability 0 of 1 checks').click();
    await expect(page.locator('#transparency')).toContainText('Explainability');
    await page.locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();

    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-1').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-1')).toContainText('1 of 1 checks');
    await expect(page.getByText('Overall Progress: 14 of 104')).toBeVisible();


    //Reproducibility Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Reproducibility 0 of 10 checks').click();
    await expect(page.getByRole('heading', {name: 'Reproducibility'})).toBeVisible();

    await page.getByLabel('Implementation Status for 3.1.1').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.1.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.2').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.2.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.4').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.4.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.5').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.5.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.6').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.6.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.7').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.7.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.8').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.8.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.9').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.9.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 3.11').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.11.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 3.12').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 3.12.1'}).fill('test elaboration');

    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();


    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-2').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-2')).toContainText('10 of 10 checks');
    await expect(page.getByText('Overall Progress: 24 of 104')).toBeVisible();


    //Safety Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Safety 0 of 17 checks').click();
    await expect(page.locator('#transparency')).toContainText('Safety');

    await page.getByLabel('Implementation Status for 4.1.1').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.1.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.2.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.3.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.3.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.3.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.3.2'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.4').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.4.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.5.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.5.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.5.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.5.2'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 4.6.1').locator('div').filter({hasText: 'Yes'}).first().click();

    await page.getByRole('textbox', {name: 'Elaboration for 4.6.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 4.6.2').locator('div').filter({hasText: 'Yes'}).first().click();

    await page.getByRole('textbox', {name: 'Elaboration for 4.6.2'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 4.6.3').locator('div').filter({hasText: 'Yes'}).first().click();

    await page.getByRole('textbox', {name: 'Elaboration for 4.6.3'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.6.4').locator('div').filter({hasText: 'Yes'}).first().click();

    await page.getByRole('textbox', {name: 'Elaboration for 4.6.4'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 4.7').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.7.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 4.8').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.8.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 4.9.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.9.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 4.9.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.9.2'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.10.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.10.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 4.10.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 4.10.2'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();

    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-3').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-3')).toContainText('17 of 17 checks');
    await expect(page.getByText('Overall Progress: 41 of 104')).toBeVisible();


    //Security Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Security 0 of 14 checks').click();
    await expect(page.locator('#transparency')).toContainText('Security');

    await page.getByLabel('Implementation Status for 5.1.1').locator('label').filter({hasText: 'Yes'}).locator('div').nth(1).click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.1.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 5.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.2.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 5.3').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.3.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 5.4').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.4.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 5.5').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.5.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 5.6').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.6.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 5.7').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.7.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 5.8').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.8.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 5.9.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.9.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 5.10.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.10.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 5.11.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.11.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 5.12.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.12.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 5.13.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.13.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 5.14.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 5.14.1'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();


    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-4').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-4')).toContainText('14 of 14 checks');
    await expect(page.getByText('Overall Progress: 55 of 104')).toBeVisible();

    //Robustness Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Robustness 0 of 10 checks').click();
    await expect(page.locator('#transparency')).toContainText('Robustness');

    await page.getByLabel('Implementation Status for 6.1.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.1.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 6.2.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.2.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 6.3.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.3.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 6.4.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.4.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 6.5.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.5.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 6.6.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.6.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 6.6.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.6.2'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 6.6.3').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.6.3'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 6.7.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.7.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 6.7.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 6.7.2'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();


    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-5').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-5')).toContainText('10 of 10 checks');
    await expect(page.getByText('Overall Progress: 65 of 104')).toBeVisible();

    //Fairness Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Fairness 0 of 6 checks').click();
    await expect(page.locator('#transparency')).toContainText('Fairness');

    await page.getByLabel('Implementation Status for 7.2.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 7.2.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 7.4.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 7.4.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 7.8.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 7.8.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 7.9.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 7.9.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 7.10.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 7.10.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 7.11.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 7.11.1'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();


    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-6').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-6')).toContainText('6 of 6 checks');
    await expect(page.getByText('Overall Progress: 71 of 104')).toBeVisible();


    //Data Governance Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Data Governance 0 of 6 checks').click();
    await expect(page.getByRole('heading', {name: 'Data Governance'})).toBeVisible();


    await page.getByLabel('Implementation Status for 8.1.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 8.1.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 8.2.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 8.2.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 8.3.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 8.3.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 8.3.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 8.3.2'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 8.4.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 8.4.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 8.5.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 8.5.1'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();


    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-7').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-7')).toContainText('6 of 6 checks');
    await expect(page.getByText('Overall Progress: 77 of 104')).toBeVisible();


    //Accountability Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Accountability 0 of 16 checks').click();
    await expect(page.getByRole('heading', {name: 'Accountability'})).toBeVisible();


    await page.getByLabel('Implementation Status for 9.1.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.1.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.2.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.2.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.3.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.3.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 9.4.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.4.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 9.5.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.5.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.5.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.5.2'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.5.3').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.5.3'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.5.4').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.5.4'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.6.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.6.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.7.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.7.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.8.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.8.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.9.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.9.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.9.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.9.2'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.10.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.10.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.11.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.11.1'}).fill('test elaboration');

    await page.getByLabel('Implementation Status for 9.12.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 9.12.1'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();

    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-8').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-8')).toContainText('16 of 16 checks');
    await expect(page.getByText('Overall Progress: 93 of 104')).toBeVisible();


    //Human Agency & Oversight Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('10 Human Agency & Oversight 0').click();
    await expect(page.getByRole('heading', {name: 'Human Agency & Oversight'})).toBeVisible();


    await page.getByLabel('Implementation Status for 10.1.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.1.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.2.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.2.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.2.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.2.2'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.3.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.3.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.3.2').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.3.2'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.3.3').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.3.3'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.4.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.4.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.5.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.5.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 10.6.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 10.6.1'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();

    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-9').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-9')).toContainText('9 of 9 checks');
    await expect(page.getByText('Overall Progress: 102 of 104')).toBeVisible();

    await expect(page.getByRole('button', {name: 'Next →'})).toBeDisabled();


    //Inclusive Growth, Societal And Environmental Well-Being Fill Answer
    await page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().getByText('Inclusive Growth, Societal And Environmental Well-Being 0 of 2 checks').click();
    await expect(page.getByRole('heading', {name: 'Inclusive Growth, Societal'})).toBeVisible();


    await page.getByLabel('Implementation Status for 11.1.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 11.1.1'}).fill('test elaboration');
    await page.getByLabel('Implementation Status for 11.2.1').locator('div').filter({hasText: 'Yes'}).first().click();
    await page.getByRole('textbox', {name: 'Elaboration for 11.2.1'}).fill('test elaboration');
    await page.getByRole('progressbar', {name: '% Loaded'}).locator('div').nth(1).click();

    // Assert Completed Filling
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-10').getByText('✓')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.cards_component\\.cards_component\\.cards_component"]').contentFrame().locator('#card-10')).toContainText('2 of 2 checks');
    await expect(page.getByText('Overall Progress: 104 of 104')).toBeVisible();

    await expect(page.getByRole('button', {name: 'Next →'})).toBeEnabled();

    await page.getByRole('button', {name: 'Next →'}).click();
    // Check Steps UI contains 'active'
    boxStep4 = page.getByText('4', {exact: true});
    await expect(boxStep4).toHaveClass(/active/);
}

test('test_process_checklist', async ({}) => {
    test.setTimeout(1200000)
    // Random delay between 60,000ms (1 min) and 120,000ms (2 min)
    const delay = 60000 + Math.floor(Math.random() * (120000 - 60000));
    console.log(`⏳ Waiting for ${Math.floor(delay / 1000)} seconds`);
    const browser = await chromium.launch();
    const context = await browser.newContext();  // fresh context
    const page = await context.newPage();
    await page.waitForTimeout(delay)
    let workspace_name = 'workspace_1' + Math.floor(Math.random() * 1000000000);
    console.log(workspace_name)
    await page.goto('http://localhost:8501/test =' + Math.floor(Math.random() * 1000000000));
    await expect(page.getByRole('heading', {name: 'Welcome to Process Checks for'})).toBeVisible({timeout: 90000});

    await page.getByTestId('stBaseButton-primary').click();
    await expect(page.getByRole('heading', {name: 'AI Verify Testing Framework'})).toBeVisible();

    const boxStep1 = page.getByText('1', {exact: true});
    await expect(boxStep1).toHaveClass(/active/);
    let boxStep2 = page.getByText('2', {exact: true})

    //Checkpoint - Click Next button reach to Getting Started Page
    // Check Steps UI contains 'inactive'
    await expect(boxStep2).toHaveClass(/inactive/);
    await page.getByRole('button', {name: 'Next →'}).click();
    // Check Steps UI contains 'active'
    boxStep2 = page.getByText('2', {exact: true});
    await expect(boxStep2).toHaveClass(/active/);
    await expect(page.getByRole('heading', {name: 'Understand the testing'})).toBeVisible();

    let boxStep3 = page.getByText('3', {exact: true});
    // Check Steps UI contains 'inactive'
    await expect(boxStep3).toHaveClass(/inactive/);
    await page.getByRole('button', {name: 'Next →'}).click();
    // Check Steps UI contains 'active'
    await expect(boxStep3).toHaveClass(/active/);
    // await expect(page.getByText('Provide Workspace Details')).toBeVisible();
    await page.getByRole('textbox', {name: 'Company Name'}).click();
    await page.getByRole('textbox', {name: 'Company Name'}).fill('company_name');
    await page.getByRole('textbox', {name: 'Application Name'}).click();
    await page.getByRole('textbox', {name: 'Application Name'}).fill('application_name');
    await page.getByRole('textbox', {name: 'Application Description'}).click();
    await page.getByRole('textbox', {name: 'Application Description'}).fill('application_description');
    await page.getByRole('textbox', {name: 'Workspace Name'}).click();
    await page.getByRole('textbox', {name: 'Workspace Name'}).fill(workspace_name);
    await page.getByTestId('stBaseButton-primary').click();

    let boxStep4 = page.getByText('4', {exact: true});
    // Check Steps UI contains 'inactive'
    await expect(boxStep4).toHaveClass(/inactive/);

    await expect(page.locator('iframe[title="backend\\.actions_components\\.actions_component\\.actions_component"]').contentFrame().getByText('application_name')).toBeVisible();
    await expect(page.locator('iframe[title="backend\\.actions_components\\.actions_component\\.actions_component"]').contentFrame().getByText('application_description')).toBeVisible();
    await page.locator('iframe[title="backend\\.actions_components\\.actions_component\\.actions_component"]').contentFrame().getByText(workspace_name).click();
    await expect(page.getByTestId('stExpander').getByText('Instructions')).toBeVisible();

    await fillInProcessChecklist(page)

    await expect(page.getByRole('heading', {name: 'Upload Technical Test Results'})).toBeVisible();
    // Try to upload result files

    // Path: one level up from current directory, then into test-data
    const test_result_json_path = path.resolve(__dirname, 'test-data', 'ms-v1-test-result.json');
    // Locate the file input element.
    const fileInput = page.locator('[data-testid="stFileUploaderDropzone"] input[type="file"]');

    // Ensure the file input exists and then perform the file upload.
    await expect(fileInput).toHaveCount(1);
    await fileInput.setInputFiles(test_result_json_path);

    // Verify the file was uploaded.
    await expect(page.getByText('File uploaded successfully')).toBeVisible();
    await expect(page.getByTestId('stFileUploaderFileName')).toContainText('ms-v1-test-result.json');

    // Click next page button
    await page.getByRole('button', {name: 'Next →'}).click();

    // Check Steps UI contains 'active'
    boxStep4 = page.getByText('5', {exact: true});
    await expect(boxStep4).toHaveClass(/active/);

    await expect(page.getByRole('heading', {name: 'Generate Your Report'})).toBeVisible();

    //Attempt to edit Workspace information
    await page.locator('[data-testid="stCustomComponentV1"]').contentFrame().getByRole('button', {name: 'edit'}).click();
    await page.getByRole('textbox', {name: 'Company Name'}).click();
    await page.getByRole('textbox', {name: 'Company Name'}).fill('company_name_edit');
    await page.getByRole('textbox', {name: 'Application Name'}).click();
    await page.getByRole('textbox', {name: 'Application Name'}).fill('application_name_edit');
    await page.getByRole('textbox', {name: 'Application Description'}).click();
    await page.getByRole('textbox', {name: 'Application Description'}).fill('application_description_edit');
    await page.getByTestId('stBaseButton-primaryFormSubmit').click();
    // Verify changes is updated
    await expect(page.locator('[data-testid="stCustomComponentV1"]').contentFrame().getByText('company_name_edit')).toBeVisible();
    await expect(page.locator('[data-testid="stCustomComponentV1"]').contentFrame().getByText('application_name_edit')).toBeVisible();
    await expect(page.locator('[data-testid="stCustomComponentV1"]').contentFrame().getByText('application_description_edit')).toBeVisible();

    // Download button hidden before clicking generate report button
    await expect(page.getByTestId('stDownloadButton').getByTestId('stBaseButton-primary')).toBeHidden();

    // Click Generate Report Button
    await page.getByRole('button', {name: 'Generate Report'}).click();

    //Verify Download PDF button visible to user for download
    await expect(page.getByTestId('stDownloadButton').getByTestId('stBaseButton-primary')).toBeVisible({timeout: 90000});

    const [download] = await Promise.all([
        page.waitForEvent('download'),  // Wait for the download event
        page.getByTestId('stDownloadButton').getByTestId('stBaseButton-primary').click(),
    ]);

    // Get the suggested filename and save the file to the current directory
    const filename = download.suggestedFilename();
    expect(filename == "summary_report.pdf")
    await browser.close(); // clean up
});