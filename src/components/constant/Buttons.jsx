export const GoldBgButton = ({ label, path }) => {
  return (
    <button className="min-w-32 bg-gold-gradient-text text-[#462523] p-4 cursor-pointer bg-transparent font-bold  max-sm:mt-6">
      <a href={path} rel="noreferrer" target="_blank">
        {label}
      </a>
    </button>
  );
};

export const GoldBorderButton = ({label, path}) => {
  return (
    <button className="min-w-32 gold-border text-white p-4 cursor-pointer font-bold bg-black scale-100 transition delay-150 ease-in-out hover:scale-105 max-sm:mt-6">
      <a
        href={path}
        rel="noreferrer"
        target="_blank"
      >
       {label}
      </a>
    </button>
  );
};

export const GoldTextButton = ({label, path}) => {
    return (
      <button className="min-w-32 bg-white p-4 cursor-pointer font-bold hover:shadow-slide_right scale-100 transition delay-150 ease-in-out hover:scale-105 max-sm:mt-6">
        <a
          href={path}
          rel="noreferrer"
          target="_blank"
          className="bg-gold-gradient-text bg-clip-text text-transparent"
        >
         {label}
        </a>
      </button>
    );
  };
