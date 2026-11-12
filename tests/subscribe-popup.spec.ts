import {test,expect} from '@playwright/test';

test('envía la solicitud a la lista de periodistas y respeta la sesión',async({page})=>{
  let requests=0;
  await page.route('https://perinfor.odoo.com/website/form/mailing.contact',async route=>{
    requests++;
    expect(route.request().method()).toBe('POST');
    expect(Object.fromEntries(new URLSearchParams(route.request().postData()||''))).toEqual({name:'prueba@example.com',email:'prueba@example.com',list_ids:'4'});
    await route.fulfill({status:200,body:''});
  });
  await page.goto('/');
  const popup=page.locator('#sub-popup');
  await expect(popup).toBeVisible();
  const email=popup.locator('input[type=email]');
  await email.fill('incorrecto');
  await popup.locator('button[type=submit]').click();
  expect(requests).toBe(0);
  await email.fill('prueba@example.com');
  await popup.locator('button[type=submit]').click();
  await expect(popup.locator('[data-sub-msg]')).toContainText('No podemos confirmar');
  expect(requests).toBe(1);
  expect(await page.evaluate(()=>localStorage.getItem('sub_popup_done'))).toBeNull();
  await page.reload();
  await page.waitForTimeout(1500);
  await expect(popup).toBeHidden();
});

test('permite reintentar cuando falla la red',async({page})=>{
  await page.route('https://perinfor.odoo.com/website/form/mailing.contact',route=>route.abort('failed'));
  await page.goto('/');
  const popup=page.locator('#sub-popup');
  await expect(popup).toBeVisible();
  await popup.locator('input[type=email]').fill('prueba@example.com');
  await popup.locator('button[type=submit]').click();
  await expect(popup.locator('[data-sub-msg]')).toContainText('Inténtalo de nuevo');
  await expect(popup.locator('button[type=submit]')).toBeEnabled();
});
