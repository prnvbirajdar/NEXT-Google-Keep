import ListDetail from "./ListDetail";

const ListComponent = ({ mainTodoList }) => {
  //renders the todo array, returns loading if todo hasn't loaded yet
  return mainTodoList.length === 0 || undefined || null ? (
    <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-white dark:bg-background opacity-50 flex flex-col items-center justify-center">
      <h2 className="text-center dark:text-offwhite text-lg lg:text-xl font-medium">
        Notes you add appear here
      </h2>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 mx-4 sm:mx-12 ">
      {mainTodoList?.map((list) => {
        return (
          <ListDetail
            title={list.title}
            id={list.id}
            body={list.body}
            key={list.id}
          />
        );
      })}
    </div>
  );
};

export default ListComponent;
