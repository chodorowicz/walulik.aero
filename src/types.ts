declare module "*.jpg" {
  const value: any
  export = value
}

declare module "*.png" {
  const value: any
  export = value
}

declare module "*.svg" {
  const value: any
  export = value
}

declare module "MyTypes" {
  export interface IPaper {
    node: {
      fields: {
        slug: string
      }
      frontmatter: {
        category: string
        title: string
        where: string
      }
    }
  }

  export interface IBook {
    node: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        publisher: string;
        image: any;
      }
    }
  }

  export interface IPageContext {
    books: IBook[]
    researchPaper: IPaper[]
  }
}
