"use client";
import dynamic from "next/dynamic";

const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

const Select = (props: (typeof ReactSelect)["defaultProps"]) => {
  return (
    <ReactSelect
      isMulti
      {...props}
      required
      styles={{
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isDisabled
              ? undefined
              : isSelected
              ? "hsl(0 0% 20%)"
              : isFocused
              ? "hsl(0 0% 9%)"
              : "hsl(0 0% 3.9%)",
            color: isDisabled ? "hsl(0 0% 9%)" : isSelected ? "hsl(0 0% 80%)" : "hsl(0 0% 98%)",
            cursor: isDisabled ? "not-allowed" : "default",

            ":active": {
              ...styles[":active"],
              backgroundColor: !isDisabled
                ? isSelected
                  ? "yellow"
                  : "hsl(0 0% 90%)"
                : undefined,
            },
          };
        },
        multiValue: (styles, { data }) => {
          return {
            ...styles,
            backgroundColor: "hsl(0 0% 98%)",
          };
        },
        multiValueLabel: (styles, { data }) => ({
          ...styles,
          color: "hsl(0 0% 14.9%)",
        }),
        multiValueRemove: (styles, { data }) => ({
          ...styles,
          color: "hsl(0 62.8% 30.6%)",
          ":hover": {
            backgroundColor: "hsl(0 0% 63.9%)",
            color: "hsl(0 62.8% 30.6%)",
          },
        }),
        control: (styles) => ({ ...styles, backgroundColor: "hsl(0 0% 3.9%)" }),
      }}
      // control: (styles) => ({ ...styles, backgroundColor: "white" }),
      // theme={(theme) => ({
      //   ...theme,
      //   borderRadius: 2,
      //   colors: {
      //     ...theme.colors,
      //     primary25: "#f35959",
      //     primary: "white",
      //     neutral0: "rgb(39, 39, 42)", // select background
      //     neutral90: "rgb(39, 39, 42)", // popup background
      //     neutral80: "white", // text
      //     neutral20: "rgb(39, 39, 42)", // border
      //   },
      // })}
    />
  );
};

export default Select;
