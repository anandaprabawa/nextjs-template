const LayoutDefault: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
    </div>
  );
};

export default LayoutDefault;
