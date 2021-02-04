import { AppDashboard } from './app.po';

describe('CoreUI template', () => {
  let page: AppDashboard;
  const sleep = 300;

  page = new AppDashboard();
  const browser = page.getBrowser();
  browser.driver.manage().window().setSize(600, 800);
  browser.sleep(sleep);
  page.navigateTo();

  // beforeEach(() => {
  //   page = new AppDashboard();
  //   page.navigateTo();
  // });

  it('should display CoreUI Dashboard', async () => {
    expect(await page.getParagraphText()).toEqual('Traffic');
  });

  it('should display footer containing creativeLabs', async () => {
    expect(await page.getFooterText()).toContain('creativeLabs');
  });
});
