import LayoutDefault from 'src/components/layouts/LayoutDefault';

const Home: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold opacity-80">NextJS Template</h1>
        <a
          href="https://github.com/anandaprabawa/nextjs-template"
          target="_blank"
          rel="noreferrer"
          className="uppercase text-sm py-2 px-4 border-blue-500 border rounded-3xl mt-8 text-blue-500 font-medium hover:bg-blue-50"
        >
          Go to repository
        </a>
      </main>
    </>
  );
};

Home.layout = LayoutDefault;

export default Home;
