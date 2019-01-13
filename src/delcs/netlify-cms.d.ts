interface CMS {
  registerPreviewTemplate(templateName: string, previewComponent: React.FunctionComponent<any> | React.Component<any, any>): void;
}

declare const cms: CMS;

declare module 'netlify-cms' {
  export default cms;
}