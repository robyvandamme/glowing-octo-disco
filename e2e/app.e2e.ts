import { GlowingOctoDiscoPage } from './app.po';

describe('glowing-octo-disco App', function() {
  let page: GlowingOctoDiscoPage;

  beforeEach(() => {
    page = new GlowingOctoDiscoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('glowing-octo-disco works!');
  });
});
