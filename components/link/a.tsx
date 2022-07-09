import React from "react";
import Link from "next/link";
import classNames from "classnames";

import styles from "./a.module.scss";

type Props = {
  children?: React.ReactNode;
  text?: string;
  href: string;
  classNameOne?: string;
  classNameTwo?: string;
  checkedHandler?: () => void;
};

export default function A({
  children,
  text = "",
  href,
  classNameOne = "",
  classNameTwo = "",
  checkedHandler,
}: Props) {
  return (
    <Link href={href}>
      <a
        className={classNames(classNameOne, classNameTwo, styles.link)}
        onClick={checkedHandler}
      >
        {text ? text : children ? children : ""}
      </a>
    </Link>
  );
}
