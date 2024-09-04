import React from "react";

type TddProp = {
  name?: string;
};
export default function Tdd(props: TddProp) {
  return <div>Hello {props.name}</div>;
}
