declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "MyTypes" {
  export interface IPaper {
    node: {
      fields: {
        slug: string;
      }
      frontmatter: {
        category: string
        title: string;
        where: string;
      }
    }
  }
}