/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ColorVariable,
} from './components/color-gen/color-variables';
import {
  JSX,
} from '@stencil/core';
import {
  Link,
  MenuItems,
  Page,
  ReferenceKeys,
} from './definitions';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface CodeColor {
    'display': string;
    'mode': string;
    'value': string;
  }
  interface ColorAccordion {}
  interface ColorGenCssText {
    'cssText': string;
    'header': boolean;
  }
  interface ColorGenPreview {
    'cssText': string;
    'demoMode': string;
  }
  interface ColorGenSelectColors {
    'colors': ColorVariable[];
  }
  interface ColorGenVariableSelector {
    'editable': boolean;
    'isNew': boolean;
    'isParentOpen': boolean;
    'name': string;
    'property': string;
    'value': string;
  }
  interface ColorGenerator {}
  interface CommandCursor {
    'blink': boolean;
  }
  interface CommandLine {
    'nobuttons': boolean;
  }
  interface CommandOutput {}
  interface CommandPrompt {}
  interface ContributorList {
    'contributors': string[];
    'link': (contributor: string) => string;
  }
  interface DocsButton {
    'href': string;
    'round': boolean;
  }
  interface DocsCard {
    'header': string;
    'href': string;
    'icon': string;
    'img': string;
    'ionicon': string;
  }
  interface DocsCards {}
  interface DocsCode {
    'language': string;
  }
  interface DocsCodepen {
    'defaultTab': string;
    'height': string | number;
    'penTitle': string;
    'preview': boolean;
    'slug': string;
    'theme': string;
    'user': string;
  }
  interface DocsDemo {
    'source': string;
    'url': string;
  }
  interface DocsDropdown {
    'align': 'left' | 'right' | 'center';
    'close': () => Promise<void>;
    'icon': (props: any) => JSX.Element;
    'label': string;
    'open': () => Promise<void>;
    'toggle': () => Promise<void>;
  }
  interface DocsHeader {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsMenu {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsMenuToggle {}
  interface DocsNav {
    'items': MenuItems;
  }
  interface DocsPage {
    'history': RouterHistory;
    'path': string;
  }
  interface DocsPageFooter {
    'page': Page;
  }
  interface DocsPagination {
    'page': Page;
  }
  interface DocsReference {
    'data': any[];
    'keys': ReferenceKeys;
  }
  interface DocsRoot {}
  interface DocsSelect {
    'initializer': (options: string[]) => string;
    'optionRenderer': (option: string) => any;
    'options': string[];
  }
  interface DocsTab {
    'selected': boolean;
    'tab': string;
  }
  interface DocsTableOfContents {
    'basepath': string;
    'label': string;
    'links': Link[];
  }
  interface DocsTabs {
    'listenFor': string;
  }
  interface FileTree {}
  interface FileTreeDirectory {
    'collapsed': boolean;
    'name': string;
  }
  interface FileTreeFile {
    'name': string;
  }
  interface HeaderMobileCollapse {
    'darkMode': boolean;
  }
  interface HubspotForm {
    'formId': string;
  }
  interface IonicSearch {
    'mobile': boolean;
  }
  interface LayeredColorsSelect {}
  interface NativeEntInstall {
    'pluginId': string;
    'variables'?: string;
  }
  interface NewColorGenerator {}
  interface SmsForm {}
  interface SteppedColorGenerator {}
  interface WistiaVideo {
    'videoId': string;
  }
}

declare global {


  interface HTMLCodeColorElement extends Components.CodeColor, HTMLStencilElement {}
  var HTMLCodeColorElement: {
    prototype: HTMLCodeColorElement;
    new (): HTMLCodeColorElement;
  };

  interface HTMLColorAccordionElement extends Components.ColorAccordion, HTMLStencilElement {}
  var HTMLColorAccordionElement: {
    prototype: HTMLColorAccordionElement;
    new (): HTMLColorAccordionElement;
  };

  interface HTMLColorGenCssTextElement extends Components.ColorGenCssText, HTMLStencilElement {}
  var HTMLColorGenCssTextElement: {
    prototype: HTMLColorGenCssTextElement;
    new (): HTMLColorGenCssTextElement;
  };

  interface HTMLColorGenPreviewElement extends Components.ColorGenPreview, HTMLStencilElement {}
  var HTMLColorGenPreviewElement: {
    prototype: HTMLColorGenPreviewElement;
    new (): HTMLColorGenPreviewElement;
  };

  interface HTMLColorGenSelectColorsElement extends Components.ColorGenSelectColors, HTMLStencilElement {}
  var HTMLColorGenSelectColorsElement: {
    prototype: HTMLColorGenSelectColorsElement;
    new (): HTMLColorGenSelectColorsElement;
  };

  interface HTMLColorGenVariableSelectorElement extends Components.ColorGenVariableSelector, HTMLStencilElement {}
  var HTMLColorGenVariableSelectorElement: {
    prototype: HTMLColorGenVariableSelectorElement;
    new (): HTMLColorGenVariableSelectorElement;
  };

  interface HTMLColorGeneratorElement extends Components.ColorGenerator, HTMLStencilElement {}
  var HTMLColorGeneratorElement: {
    prototype: HTMLColorGeneratorElement;
    new (): HTMLColorGeneratorElement;
  };

  interface HTMLCommandCursorElement extends Components.CommandCursor, HTMLStencilElement {}
  var HTMLCommandCursorElement: {
    prototype: HTMLCommandCursorElement;
    new (): HTMLCommandCursorElement;
  };

  interface HTMLCommandLineElement extends Components.CommandLine, HTMLStencilElement {}
  var HTMLCommandLineElement: {
    prototype: HTMLCommandLineElement;
    new (): HTMLCommandLineElement;
  };

  interface HTMLCommandOutputElement extends Components.CommandOutput, HTMLStencilElement {}
  var HTMLCommandOutputElement: {
    prototype: HTMLCommandOutputElement;
    new (): HTMLCommandOutputElement;
  };

  interface HTMLCommandPromptElement extends Components.CommandPrompt, HTMLStencilElement {}
  var HTMLCommandPromptElement: {
    prototype: HTMLCommandPromptElement;
    new (): HTMLCommandPromptElement;
  };

  interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {}
  var HTMLContributorListElement: {
    prototype: HTMLContributorListElement;
    new (): HTMLContributorListElement;
  };

  interface HTMLDocsButtonElement extends Components.DocsButton, HTMLStencilElement {}
  var HTMLDocsButtonElement: {
    prototype: HTMLDocsButtonElement;
    new (): HTMLDocsButtonElement;
  };

  interface HTMLDocsCardElement extends Components.DocsCard, HTMLStencilElement {}
  var HTMLDocsCardElement: {
    prototype: HTMLDocsCardElement;
    new (): HTMLDocsCardElement;
  };

  interface HTMLDocsCardsElement extends Components.DocsCards, HTMLStencilElement {}
  var HTMLDocsCardsElement: {
    prototype: HTMLDocsCardsElement;
    new (): HTMLDocsCardsElement;
  };

  interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {}
  var HTMLDocsCodeElement: {
    prototype: HTMLDocsCodeElement;
    new (): HTMLDocsCodeElement;
  };

  interface HTMLDocsCodepenElement extends Components.DocsCodepen, HTMLStencilElement {}
  var HTMLDocsCodepenElement: {
    prototype: HTMLDocsCodepenElement;
    new (): HTMLDocsCodepenElement;
  };

  interface HTMLDocsDemoElement extends Components.DocsDemo, HTMLStencilElement {}
  var HTMLDocsDemoElement: {
    prototype: HTMLDocsDemoElement;
    new (): HTMLDocsDemoElement;
  };

  interface HTMLDocsDropdownElement extends Components.DocsDropdown, HTMLStencilElement {}
  var HTMLDocsDropdownElement: {
    prototype: HTMLDocsDropdownElement;
    new (): HTMLDocsDropdownElement;
  };

  interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {}
  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsMenuToggleElement extends Components.DocsMenuToggle, HTMLStencilElement {}
  var HTMLDocsMenuToggleElement: {
    prototype: HTMLDocsMenuToggleElement;
    new (): HTMLDocsMenuToggleElement;
  };

  interface HTMLDocsNavElement extends Components.DocsNav, HTMLStencilElement {}
  var HTMLDocsNavElement: {
    prototype: HTMLDocsNavElement;
    new (): HTMLDocsNavElement;
  };

  interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {}
  var HTMLDocsPageElement: {
    prototype: HTMLDocsPageElement;
    new (): HTMLDocsPageElement;
  };

  interface HTMLDocsPageFooterElement extends Components.DocsPageFooter, HTMLStencilElement {}
  var HTMLDocsPageFooterElement: {
    prototype: HTMLDocsPageFooterElement;
    new (): HTMLDocsPageFooterElement;
  };

  interface HTMLDocsPaginationElement extends Components.DocsPagination, HTMLStencilElement {}
  var HTMLDocsPaginationElement: {
    prototype: HTMLDocsPaginationElement;
    new (): HTMLDocsPaginationElement;
  };

  interface HTMLDocsReferenceElement extends Components.DocsReference, HTMLStencilElement {}
  var HTMLDocsReferenceElement: {
    prototype: HTMLDocsReferenceElement;
    new (): HTMLDocsReferenceElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLDocsSelectElement extends Components.DocsSelect, HTMLStencilElement {}
  var HTMLDocsSelectElement: {
    prototype: HTMLDocsSelectElement;
    new (): HTMLDocsSelectElement;
  };

  interface HTMLDocsTabElement extends Components.DocsTab, HTMLStencilElement {}
  var HTMLDocsTabElement: {
    prototype: HTMLDocsTabElement;
    new (): HTMLDocsTabElement;
  };

  interface HTMLDocsTableOfContentsElement extends Components.DocsTableOfContents, HTMLStencilElement {}
  var HTMLDocsTableOfContentsElement: {
    prototype: HTMLDocsTableOfContentsElement;
    new (): HTMLDocsTableOfContentsElement;
  };

  interface HTMLDocsTabsElement extends Components.DocsTabs, HTMLStencilElement {}
  var HTMLDocsTabsElement: {
    prototype: HTMLDocsTabsElement;
    new (): HTMLDocsTabsElement;
  };

  interface HTMLFileTreeElement extends Components.FileTree, HTMLStencilElement {}
  var HTMLFileTreeElement: {
    prototype: HTMLFileTreeElement;
    new (): HTMLFileTreeElement;
  };

  interface HTMLFileTreeDirectoryElement extends Components.FileTreeDirectory, HTMLStencilElement {}
  var HTMLFileTreeDirectoryElement: {
    prototype: HTMLFileTreeDirectoryElement;
    new (): HTMLFileTreeDirectoryElement;
  };

  interface HTMLFileTreeFileElement extends Components.FileTreeFile, HTMLStencilElement {}
  var HTMLFileTreeFileElement: {
    prototype: HTMLFileTreeFileElement;
    new (): HTMLFileTreeFileElement;
  };

  interface HTMLHeaderMobileCollapseElement extends Components.HeaderMobileCollapse, HTMLStencilElement {}
  var HTMLHeaderMobileCollapseElement: {
    prototype: HTMLHeaderMobileCollapseElement;
    new (): HTMLHeaderMobileCollapseElement;
  };

  interface HTMLHubspotFormElement extends Components.HubspotForm, HTMLStencilElement {}
  var HTMLHubspotFormElement: {
    prototype: HTMLHubspotFormElement;
    new (): HTMLHubspotFormElement;
  };

  interface HTMLIonicSearchElement extends Components.IonicSearch, HTMLStencilElement {}
  var HTMLIonicSearchElement: {
    prototype: HTMLIonicSearchElement;
    new (): HTMLIonicSearchElement;
  };

  interface HTMLLayeredColorsSelectElement extends Components.LayeredColorsSelect, HTMLStencilElement {}
  var HTMLLayeredColorsSelectElement: {
    prototype: HTMLLayeredColorsSelectElement;
    new (): HTMLLayeredColorsSelectElement;
  };

  interface HTMLNativeEntInstallElement extends Components.NativeEntInstall, HTMLStencilElement {}
  var HTMLNativeEntInstallElement: {
    prototype: HTMLNativeEntInstallElement;
    new (): HTMLNativeEntInstallElement;
  };

  interface HTMLNewColorGeneratorElement extends Components.NewColorGenerator, HTMLStencilElement {}
  var HTMLNewColorGeneratorElement: {
    prototype: HTMLNewColorGeneratorElement;
    new (): HTMLNewColorGeneratorElement;
  };

  interface HTMLSmsFormElement extends Components.SmsForm, HTMLStencilElement {}
  var HTMLSmsFormElement: {
    prototype: HTMLSmsFormElement;
    new (): HTMLSmsFormElement;
  };

  interface HTMLSteppedColorGeneratorElement extends Components.SteppedColorGenerator, HTMLStencilElement {}
  var HTMLSteppedColorGeneratorElement: {
    prototype: HTMLSteppedColorGeneratorElement;
    new (): HTMLSteppedColorGeneratorElement;
  };

  interface HTMLWistiaVideoElement extends Components.WistiaVideo, HTMLStencilElement {}
  var HTMLWistiaVideoElement: {
    prototype: HTMLWistiaVideoElement;
    new (): HTMLWistiaVideoElement;
  };
  interface HTMLElementTagNameMap {
    'code-color': HTMLCodeColorElement;
    'color-accordion': HTMLColorAccordionElement;
    'color-gen-css-text': HTMLColorGenCssTextElement;
    'color-gen-preview': HTMLColorGenPreviewElement;
    'color-gen-select-colors': HTMLColorGenSelectColorsElement;
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement;
    'color-generator': HTMLColorGeneratorElement;
    'command-cursor': HTMLCommandCursorElement;
    'command-line': HTMLCommandLineElement;
    'command-output': HTMLCommandOutputElement;
    'command-prompt': HTMLCommandPromptElement;
    'contributor-list': HTMLContributorListElement;
    'docs-button': HTMLDocsButtonElement;
    'docs-card': HTMLDocsCardElement;
    'docs-cards': HTMLDocsCardsElement;
    'docs-code': HTMLDocsCodeElement;
    'docs-codepen': HTMLDocsCodepenElement;
    'docs-demo': HTMLDocsDemoElement;
    'docs-dropdown': HTMLDocsDropdownElement;
    'docs-header': HTMLDocsHeaderElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-menu-toggle': HTMLDocsMenuToggleElement;
    'docs-nav': HTMLDocsNavElement;
    'docs-page': HTMLDocsPageElement;
    'docs-page-footer': HTMLDocsPageFooterElement;
    'docs-pagination': HTMLDocsPaginationElement;
    'docs-reference': HTMLDocsReferenceElement;
    'docs-root': HTMLDocsRootElement;
    'docs-select': HTMLDocsSelectElement;
    'docs-tab': HTMLDocsTabElement;
    'docs-table-of-contents': HTMLDocsTableOfContentsElement;
    'docs-tabs': HTMLDocsTabsElement;
    'file-tree': HTMLFileTreeElement;
    'file-tree-directory': HTMLFileTreeDirectoryElement;
    'file-tree-file': HTMLFileTreeFileElement;
    'header-mobile-collapse': HTMLHeaderMobileCollapseElement;
    'hubspot-form': HTMLHubspotFormElement;
    'ionic-search': HTMLIonicSearchElement;
    'layered-colors-select': HTMLLayeredColorsSelectElement;
    'native-ent-install': HTMLNativeEntInstallElement;
    'new-color-generator': HTMLNewColorGeneratorElement;
    'sms-form': HTMLSmsFormElement;
    'stepped-color-generator': HTMLSteppedColorGeneratorElement;
    'wistia-video': HTMLWistiaVideoElement;
  }
}

declare namespace LocalJSX {
  interface CodeColor extends JSXBase.HTMLAttributes<HTMLCodeColorElement> {
    'display'?: string;
    'mode'?: string;
    'value'?: string;
  }
  interface ColorAccordion extends JSXBase.HTMLAttributes<HTMLColorAccordionElement> {}
  interface ColorGenCssText extends JSXBase.HTMLAttributes<HTMLColorGenCssTextElement> {
    'cssText'?: string;
    'header'?: boolean;
    'onCssTextChange'?: (event: CustomEvent<any>) => void;
  }
  interface ColorGenPreview extends JSXBase.HTMLAttributes<HTMLColorGenPreviewElement> {
    'cssText'?: string;
    'demoMode'?: string;
  }
  interface ColorGenSelectColors extends JSXBase.HTMLAttributes<HTMLColorGenSelectColorsElement> {
    'colors'?: ColorVariable[];
  }
  interface ColorGenVariableSelector extends JSXBase.HTMLAttributes<HTMLColorGenVariableSelectorElement> {
    'editable'?: boolean;
    'isNew'?: boolean;
    'isParentOpen'?: boolean;
    'name'?: string;
    'onColorChange'?: (event: CustomEvent<any>) => void;
    'onNameChange'?: (event: CustomEvent<any>) => void;
    'property'?: string;
    'value'?: string;
  }
  interface ColorGenerator extends JSXBase.HTMLAttributes<HTMLColorGeneratorElement> {
    'onDemoMessage'?: (event: CustomEvent<any>) => void;
  }
  interface CommandCursor extends JSXBase.HTMLAttributes<HTMLCommandCursorElement> {
    'blink'?: boolean;
  }
  interface CommandLine extends JSXBase.HTMLAttributes<HTMLCommandLineElement> {
    'nobuttons'?: boolean;
  }
  interface CommandOutput extends JSXBase.HTMLAttributes<HTMLCommandOutputElement> {}
  interface CommandPrompt extends JSXBase.HTMLAttributes<HTMLCommandPromptElement> {}
  interface ContributorList extends JSXBase.HTMLAttributes<HTMLContributorListElement> {
    'contributors'?: string[];
    'link'?: (contributor: string) => string;
  }
  interface DocsButton extends JSXBase.HTMLAttributes<HTMLDocsButtonElement> {
    'href'?: string;
    'round'?: boolean;
  }
  interface DocsCard extends JSXBase.HTMLAttributes<HTMLDocsCardElement> {
    'header'?: string;
    'href'?: string;
    'icon'?: string;
    'img'?: string;
    'ionicon'?: string;
  }
  interface DocsCards extends JSXBase.HTMLAttributes<HTMLDocsCardsElement> {}
  interface DocsCode extends JSXBase.HTMLAttributes<HTMLDocsCodeElement> {
    'language'?: string;
  }
  interface DocsCodepen extends JSXBase.HTMLAttributes<HTMLDocsCodepenElement> {
    'defaultTab'?: string;
    'height'?: string | number;
    'penTitle'?: string;
    'preview'?: boolean;
    'slug'?: string;
    'theme'?: string;
    'user'?: string;
  }
  interface DocsDemo extends JSXBase.HTMLAttributes<HTMLDocsDemoElement> {
    'source'?: string;
    'url'?: string;
  }
  interface DocsDropdown extends JSXBase.HTMLAttributes<HTMLDocsDropdownElement> {
    'align'?: 'left' | 'right' | 'center';
    'icon'?: (props: any) => JSX.Element;
    'label'?: string;
  }
  interface DocsHeader extends JSXBase.HTMLAttributes<HTMLDocsHeaderElement> {
    'onToggleClick'?: (e: Event) => void;
  }
  interface DocsMenu extends JSXBase.HTMLAttributes<HTMLDocsMenuElement> {
    'onToggleClick'?: (e: Event) => void;
  }
  interface DocsMenuToggle extends JSXBase.HTMLAttributes<HTMLDocsMenuToggleElement> {}
  interface DocsNav extends JSXBase.HTMLAttributes<HTMLDocsNavElement> {
    'items'?: MenuItems;
  }
  interface DocsPage extends JSXBase.HTMLAttributes<HTMLDocsPageElement> {
    'history'?: RouterHistory;
    'path'?: string;
  }
  interface DocsPageFooter extends JSXBase.HTMLAttributes<HTMLDocsPageFooterElement> {
    'page'?: Page;
  }
  interface DocsPagination extends JSXBase.HTMLAttributes<HTMLDocsPaginationElement> {
    'page'?: Page;
  }
  interface DocsReference extends JSXBase.HTMLAttributes<HTMLDocsReferenceElement> {
    'data'?: any[];
    'keys'?: ReferenceKeys;
  }
  interface DocsRoot extends JSXBase.HTMLAttributes<HTMLDocsRootElement> {
    'onPageChanged'?: (event: CustomEvent<any>) => void;
  }
  interface DocsSelect extends JSXBase.HTMLAttributes<HTMLDocsSelectElement> {
    'initializer'?: (options: string[]) => string;
    'onSelection'?: (event: CustomEvent<string>) => void;
    'optionRenderer'?: (option: string) => any;
    'options'?: string[];
  }
  interface DocsTab extends JSXBase.HTMLAttributes<HTMLDocsTabElement> {
    'selected'?: boolean;
    'tab'?: string;
  }
  interface DocsTableOfContents extends JSXBase.HTMLAttributes<HTMLDocsTableOfContentsElement> {
    'basepath'?: string;
    'label'?: string;
    'links'?: Link[];
  }
  interface DocsTabs extends JSXBase.HTMLAttributes<HTMLDocsTabsElement> {
    'listenFor'?: string;
  }
  interface FileTree extends JSXBase.HTMLAttributes<HTMLFileTreeElement> {}
  interface FileTreeDirectory extends JSXBase.HTMLAttributes<HTMLFileTreeDirectoryElement> {
    'collapsed'?: boolean;
    'name'?: string;
  }
  interface FileTreeFile extends JSXBase.HTMLAttributes<HTMLFileTreeFileElement> {
    'name'?: string;
  }
  interface HeaderMobileCollapse extends JSXBase.HTMLAttributes<HTMLHeaderMobileCollapseElement> {
    'darkMode'?: boolean;
  }
  interface HubspotForm extends JSXBase.HTMLAttributes<HTMLHubspotFormElement> {
    'formId'?: string;
  }
  interface IonicSearch extends JSXBase.HTMLAttributes<HTMLIonicSearchElement> {
    'mobile'?: boolean;
  }
  interface LayeredColorsSelect extends JSXBase.HTMLAttributes<HTMLLayeredColorsSelectElement> {}
  interface NativeEntInstall extends JSXBase.HTMLAttributes<HTMLNativeEntInstallElement> {
    'pluginId'?: string;
    'variables'?: string;
  }
  interface NewColorGenerator extends JSXBase.HTMLAttributes<HTMLNewColorGeneratorElement> {}
  interface SmsForm extends JSXBase.HTMLAttributes<HTMLSmsFormElement> {}
  interface SteppedColorGenerator extends JSXBase.HTMLAttributes<HTMLSteppedColorGeneratorElement> {}
  interface WistiaVideo extends JSXBase.HTMLAttributes<HTMLWistiaVideoElement> {
    'videoId'?: string;
  }

  interface IntrinsicElements {
    'code-color': CodeColor;
    'color-accordion': ColorAccordion;
    'color-gen-css-text': ColorGenCssText;
    'color-gen-preview': ColorGenPreview;
    'color-gen-select-colors': ColorGenSelectColors;
    'color-gen-variable-selector': ColorGenVariableSelector;
    'color-generator': ColorGenerator;
    'command-cursor': CommandCursor;
    'command-line': CommandLine;
    'command-output': CommandOutput;
    'command-prompt': CommandPrompt;
    'contributor-list': ContributorList;
    'docs-button': DocsButton;
    'docs-card': DocsCard;
    'docs-cards': DocsCards;
    'docs-code': DocsCode;
    'docs-codepen': DocsCodepen;
    'docs-demo': DocsDemo;
    'docs-dropdown': DocsDropdown;
    'docs-header': DocsHeader;
    'docs-menu': DocsMenu;
    'docs-menu-toggle': DocsMenuToggle;
    'docs-nav': DocsNav;
    'docs-page': DocsPage;
    'docs-page-footer': DocsPageFooter;
    'docs-pagination': DocsPagination;
    'docs-reference': DocsReference;
    'docs-root': DocsRoot;
    'docs-select': DocsSelect;
    'docs-tab': DocsTab;
    'docs-table-of-contents': DocsTableOfContents;
    'docs-tabs': DocsTabs;
    'file-tree': FileTree;
    'file-tree-directory': FileTreeDirectory;
    'file-tree-file': FileTreeFile;
    'header-mobile-collapse': HeaderMobileCollapse;
    'hubspot-form': HubspotForm;
    'ionic-search': IonicSearch;
    'layered-colors-select': LayeredColorsSelect;
    'native-ent-install': NativeEntInstall;
    'new-color-generator': NewColorGenerator;
    'sms-form': SmsForm;
    'stepped-color-generator': SteppedColorGenerator;
    'wistia-video': WistiaVideo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


