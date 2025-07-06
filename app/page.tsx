import Counter from "@/components/Counter";

const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

const HomePage = async () => {
  const todos = await getTodos();
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold">This is HomePage</h1>
      <Counter />
      <ul>
        {todos?.map((todo: any) => (
          <li key={todo.id}>
            {todo.id}. {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
