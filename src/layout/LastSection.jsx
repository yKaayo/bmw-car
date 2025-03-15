import closeIcon from "../assets/x_lg_white_icon.svg";

const LastSection = () => {
  return (
    <div id="end" className="h-[80vh]">
      <a href="#home">
        <img src={closeIcon} className="size-6 absolute right-20" alt="Icone para fechar" />
      </a>
    </div>
  );
};

export default LastSection;
