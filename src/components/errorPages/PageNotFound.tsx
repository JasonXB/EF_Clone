import Button from '../buttons/reusable-buttons';
import Router from 'next/router';
interface props {
  redirectTo: string; // should be a path like /auth/login or something
  pageName: string;
}

const errorPage = (props: props) => {
  return (
    <div className={`text-center py-[200px]`}>
      <div className="">
        <div className="flex justify-center items-center gap-5">
          {/*  prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#CE1982" className="bi bi-bug-fill" viewBox="0 0 16 16"> <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/> <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/></svg>
          <h1 className="text-primary-2 font-semibold">404</h1>
        </div>

        <div className="flex flex-col justify-center items-center py-[30px]">
          <p className="text-4xl mb-2 font-bold">Page not found!</p>
          <p className="text-2xl font-bold">
            Our apologies, the page you requested could not be found
          </p>
        </div>
        <Button
          clickHandler={() => Router.replace(props.redirectTo)}
          variant="primary"
        >
          Go to {props.pageName}
        </Button>
      </div>
    </div>
  );
};

export default errorPage;
