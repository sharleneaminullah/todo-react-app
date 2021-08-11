import React from "react";
import "./todolist.css";
import moment from "moment";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const makeDoneStyle = (row) => {
    return row.completed ? "list, complete" : "list";
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeBtn = (cell, row, rowIndex) => {
    return (
      <button
        className="button-complete task-button"
        onClick={() => handleComplete(row)}
      >
        <i className="fa fa-check-circle"></i>
      </button>
    );
  };

  const editBtn = (cell, row, rowIndex) => {
    return (
      <button
        className="button-edit task-button"
        onClick={() => handleEdit(row)}
      >
        <i className="fa fa-edit"></i>
      </button>
    );
  };

  const deleteBtn = (cell, row, rowIndex) => {
    return (
      <button
        className="button-delete task-button"
        onClick={() => handleDelete(row)}
      >
        <i className="fa fa-trash"></i>
      </button>
    );
  };

  const formatDate = (cell, row) => {
    return moment(row.dueDate).format("yyyy-MM-DD");
  };

  const columns = [
    {
      dataField: "title",
      text: "Title",
      style: { background_color: "#ccc" },
      sort: true,
    },
    {
      dataField: "description",
      text: "Description",
      style: { background_color: "#ccc" },
      sort: true,
    },
    {
      dataField: "dueDate",
      text: "Due Date",
      type: "date",
      style: { background_color: "#ccc" },
      sort: true,
      formatter: formatDate,
    },
    { dataField: "1", text: "Done", formatter: completeBtn },
    { dataField: "2", text: "Edit", formatter: editBtn },
    { dataField: "3", text: "Delete", formatter: deleteBtn },
  ];

  const defaultSorted = [
    {
      dataField: "title",
      order: "asc",
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {},
    onSizePerPageChange: function (page, sizePerPage) {},
  });

  const { SearchBar, ClearSearchButton } = Search;

  return (
    <div>
      <div>
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={todos}
          columns={columns}
          search
        >
          {(props) => (
            <div>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={todos}
                columns={columns}
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}
                rowClasses={makeDoneStyle}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    </div>
  );
};

export default TodosList;
