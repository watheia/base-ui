import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { ThemeProvider } from '@watheia/theme.theme-provider';
import { WaReactAspect } from './wa-react.aspect';

export class WaReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactPreviewMain = new WaReactPreviewMain();
    // register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeProvider]);

    return myReactPreviewMain;
  }
}

WaReactAspect.addRuntime(WaReactPreviewMain);
