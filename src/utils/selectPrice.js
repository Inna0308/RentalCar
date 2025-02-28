export const customStylesPrice = {
  control: (base) => ({
    ...base,
    borderRadius: "12px",
    width: "196px",
    height: "44px",
    background: "#f7f7f7",
    border: "none",
    boxShadow: "none",
    fontWeight: "500",
  }),
  menu: (base) => ({
    ...base,
    border: "1px solid #f7f7f7",
    borderRadius: "12px",
    width: "196px",
    maxHeight: "188px",
    boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
    background: "#ffffff",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "2px",
    paddingRight: "8px",
    overflowY: "auto",
  }),
  option: (base, state) => ({
    ...base,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25",
    color: state.isSelected ? "#101828" : "#8d929a",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#101828",
      backgroundColor: "transparent",
    },
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "140px",
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#dadde1",
      borderRadius: "10px",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#101828",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.25",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
};
