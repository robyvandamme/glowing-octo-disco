export class GlowingOctoDiscoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('glowing-octo-disco-app h1')).getText();
  }
}
