import { expect, test, type Page } from '@playwright/test';

async function expectNoHorizontalOverflow(page: Page) {
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    page: document.documentElement.scrollWidth,
  }));
  expect(dimensions.page, `A página excede a largura de ${dimensions.viewport}px`).toBeLessThanOrEqual(dimensions.viewport + 1);
}

test('apresenta uma navegação enxuta e abre as páginas principais', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('A nuvem é o começo.');
  await expect(page.getByRole('link', { name: 'Novidades', exact: true })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Buscar no portal', exact: true })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Faça parte', exact: true })).toHaveCount(0);
  await page.getByRole('link', { name: 'Eventos', exact: true }).first().click();
  await expect(page).toHaveURL(/\/eventos$/);
  await page.getByRole('link', { name: 'Quem somos', exact: true }).first().click();
  await expect(page).toHaveURL(/\/sobre$/);
});

test('mostra os dois eventos confirmados e oferece ingresso', async ({ page }) => {
  await page.goto('/eventos');
  await expect(page.getByRole('heading', { name: 'Carreira & Cloud do Zero', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Abertura SBG', exact: true })).toBeVisible();
  await expect(page.getByText('24 de setembro de 2026', { exact: true })).toBeVisible();
  await expect(page.getByText('UCB · Bloco M · Sala M002', { exact: true })).toBeVisible();
  const ingressos = page.getByRole('link', { name: /Pegar ingresso/ });
  await expect(ingressos).toHaveCount(2);
  await expect(ingressos.nth(0)).toHaveAttribute(
    'href',
    'https://www.meetup.com/aws-sbg-at-catholic-university-of-brasilia/events/316403251/',
  );
  await expect(ingressos.nth(1)).toHaveAttribute(
    'href',
    'https://www.meetup.com/aws-sbg-at-catholic-university-of-brasilia/events/316403251/',
  );
  await expect(page.getByRole('heading', { name: 'Builders compartilhando ideias', exact: true })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Conheça a comunidade', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Ver detalhes', exact: true }).first().click();
  await expect(page.getByText('O que você encontrará')).toBeVisible();
});

test('oferece um link oficial para entrar na comunidade', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /Entrar na comunidade/ })).toHaveAttribute('href', 'https://www.meetup.com/aws-sbg-at-catholic-university-of-brasilia/');
});

test('apresenta cargos, descrições e redes sociais atualizadas', async ({ page }) => {
  await page.goto('/sobre');
  for (const member of ['Arthur Braga', 'Lorrany Magalhaes', 'Júlio César Nascimento', 'Lucas Moreira']) {
    await expect(page.getByRole('heading', { name: member, exact: true })).toBeVisible();
  }
  await expect(page.getByText('Diretor Geral', { exact: true })).toBeVisible();
  await expect(page.getByText('Diretora Técnica', { exact: true })).toBeVisible();
  await expect(page.getByText('Diretor de Eventos', { exact: true })).toBeVisible();
  await expect(page.getByText('Diretor de Marketing', { exact: true })).toBeVisible();
  await expect(page.locator('a[href="https://www.linkedin.com/in/lucasmoreirapereira/"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.instagram.com/arthur._vinii/"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.instagram.com/sabinoograzielly"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.linkedin.com/in/lorrany-magalh%C3%A3es-/"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.instagram.com/lucasmorpe/"]')).toBeVisible();
  await expect(page.getByText('Nosso propósito', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Crescer junto faz diferença.', { exact: true })).toHaveCount(0);
});

test('anima a marca na primeira entrada', async ({ page }) => {
  await page.goto('/');
  const intro = page.locator('.intro-screen');
  await expect(intro).toBeVisible();
  await expect(intro.locator('img[src="images/LOGO.png"]')).toBeVisible();
  await expect(intro).toBeHidden({ timeout: 4_000 });
});

test('salva e aplica as preferências de acessibilidade', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Ajustar acessibilidade', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Acessibilidade' });
  await dialog.getByRole('checkbox', { name: /Texto maior/ }).check();
  await dialog.getByRole('checkbox', { name: /Alto contraste/ }).check();
  await dialog.getByRole('checkbox', { name: /Reduzir animações/ }).check();
  await expect(page.locator('html')).toHaveAttribute('data-large-text', 'true');
  await expect(page.locator('html')).toHaveAttribute('data-high-contrast', 'true');
  await expect(page.locator('html')).toHaveAttribute('data-reduce-motion', 'true');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-large-text', 'true');
});

test('a página inicial cabe em desktop', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('.intro-screen')).toBeHidden({ timeout: 4_000 });
  await page.evaluate(() => document.fonts.ready);
  await expectNoHorizontalOverflow(page);
  const screenshot = await page.screenshot({ path: testInfo.outputPath('home-desktop.png'), fullPage: true });
  await testInfo.attach('Página inicial — desktop', { body: screenshot, contentType: 'image/png' });
});

test('menu e páginas cabem na tela de 390px', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expectNoHorizontalOverflow(page);
  await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Acessibilidade', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Quem somos', exact: true }).first().click();
  await expect(page).toHaveURL(/\/sobre$/);
  await expectNoHorizontalOverflow(page);
  for (const route of ['/', '/eventos', '/sobre']) {
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expectNoHorizontalOverflow(page);
  }
  await expect(page.locator('.intro-screen')).toBeHidden({ timeout: 4_000 });
  const screenshot = await page.screenshot({ path: testInfo.outputPath('about-mobile.png'), fullPage: true });
  await testInfo.attach('Quem somos — celular', { body: screenshot, contentType: 'image/png' });
});

for (const largura of [320, 768, 1440]) {
  test(`banner da página sobre se adapta à largura de ${largura}px`, async ({ page }) => {
    await page.setViewportSize({ width: largura, height: 900 });
    await page.goto('/sobre');
    await expectNoHorizontalOverflow(page);

    const banner = page.locator('.about-hero > img');
    await expect(banner).toBeVisible();
    const caixa = await banner.boundingBox();
    expect(caixa).not.toBeNull();
    expect(caixa!.width).toBeLessThanOrEqual(largura);
    expect(caixa!.width / caixa!.height).toBeCloseTo(4, 1);
  });
}
