import Link from "next/link";
import { Fragment } from "react";

function NewsPage(){
  return <Fragment>
    <h1>
    The NEws Page
  </h1>
  <ul>
    <li>
      <Link href='/news/about'>About</Link>
    </li>
    <li>Something</li>
  </ul>
  </Fragment>
}

export default NewsPage;