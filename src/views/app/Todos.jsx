import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from "../../services/todos";
import { Input } from "../../components/Base/Input";
import { Button } from "../../components/Base/Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Base/Spinner";

const Todos = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo, response] = useDeleteTodoMutation();
  const [addTodo, addResponse] = useAddTodoMutation();
  const [task, setTask] = useState("");

  useEffect(() => {
    if (error?.status === 403) {
      navigate("/login");
    }
  }, [error, navigate]);

  useEffect(() => {
    if (response.status === "rejected") {
      enqueueSnackbar(response?.error?.data?.error, { variant: "error" });
    }
  }, [response]);

  useEffect(() => {
    if (addResponse.isSuccess) {
      enqueueSnackbar("todo is added.", { variant: "success" });
    }
    if (addResponse.isError) {
      enqueueSnackbar(addResponse?.error?.data?.error, { variant: "error" });
    }
  }, [addResponse]);

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo({
      task: task,
      isCompleted: false,
    });
    setTask("");
  };

  const handleDelete = (id) => () => {
    deleteTodo(id);
  };

  return (
    <div>
      {error && <div>Error when data is loading...</div>}
      {isLoading && <Spinner />}

      <div>
        <form>
          <Input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={handleAdd}>Ekle</Button>
        </form>
      </div>
      <div className="mt-2">
        <ol>
          {data &&
            data.map((todo) => (
              <li className="mb-2" key={todo.id}>
                {todo.task}
                <Button className="ml-4" onClick={handleDelete(todo.id)}>
                  Delete
                </Button>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Todos;
