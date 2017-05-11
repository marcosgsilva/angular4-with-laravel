import { PortariaPage } from './app.po';

describe('portaria App', () => {
  let page: PortariaPage;

  beforeEach(() => {
    page = new PortariaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
