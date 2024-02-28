"use client";
import dynamic from "next/dynamic";

const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

const Select = (props: (typeof ReactSelect)["defaultProps"]) => {
  return (
    <ReactSelect
      {...props}
      required
      isMulti
      theme={(theme) => ({
        ...theme,
        borderRadius: 2,
        colors: {
          ...theme.colors,
          primary25: "#f35959",
          primary: "black",
          neutral0: "rgb(39, 39, 42)", // select background
          neutral90: "rgb(39, 39, 42)", // popup background
          neutral80: "rgb(39, 39, 42)", // text
          neutral20: "rgb(39, 39, 42)", // border
        },
      })}
    />
  );
};

export default Select;
