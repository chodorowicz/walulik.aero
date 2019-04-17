import React from "react"

import { Layout } from "../layout"
import { SectionTop } from "../components";
import BooksPageBackground from "../images/books/books-bg@2x.jpg"
import { SectionBooks } from "./books-components/section-books";

const Books: React.FC = () => (
  <Layout>
    <SectionTop background={BooksPageBackground} isHome={false} />
    <SectionBooks />
  </Layout>
)

export default Books;