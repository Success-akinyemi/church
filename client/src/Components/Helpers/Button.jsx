function Button({ onClick, text, style }) {
  return (
    <div
      onClick={onClick}
      className={`w-full p-4 rounded-[0px] font-font-2 text-[21px] phone:text-[17px] bg-main-color cursor-pointer duration-500 hover:bg-main-color-dark text-white font-semibold flex items-center justify-center text-center ${style}`}
    >
      {text}
    </div>
  );
}

export default Button;
