import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GlowingOctoDiscoAppComponent } from '../app/glowing-octo-disco.component';

beforeEachProviders(() => [GlowingOctoDiscoAppComponent]);

describe('App: GlowingOctoDisco', () => {
  it('should create the app',
      inject([GlowingOctoDiscoAppComponent], (app: GlowingOctoDiscoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'glowing-octo-disco works!\'',
      inject([GlowingOctoDiscoAppComponent], (app: GlowingOctoDiscoAppComponent) => {
    expect(app.title).toEqual('glowing-octo-disco works!');
  }));
});
