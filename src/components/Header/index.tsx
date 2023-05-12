type HeaderProps = {
  title: string;
  hasLogin?: boolean;
  textLoginAction?: string;
  loginAction?: () => void;
  icon?: () => JSX.Element;
};

const Header = ({
  title = '',
  hasLogin = false,
  textLoginAction = '',
  loginAction,
  icon
}: HeaderProps) => {
  return (
    <div className="w-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-left">
            {title}
          </h1>
          {hasLogin && (
            <div className="text-right ml-auto cursor-pointer flex items-center">
              <span className="mx-0.5" onClick={loginAction}>
                {textLoginAction}
              </span>
              <span className="mx-0.5"> {icon && icon()}</span>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
