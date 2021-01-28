import ListDetail from "./ListDetail";

const ListComponent = ({ mainTodoList, setMainTodoList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 mx-4 sm:mx-12 ">
      {mainTodoList.map((list) => {
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

