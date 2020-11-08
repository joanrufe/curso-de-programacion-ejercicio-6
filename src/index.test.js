import { fireEvent, getAllByText, getByPlaceholderText, getByText } from "@testing-library/dom";
import { document } from "window-or-global";
import app from "./app";

function mockApp() {
  document.body.innerHTML = `<form id="todo-form">
    <input placeholder="Escribe algo que hacer" name="newTODO" />
    <button type="submit">Añadir tarea</button>
    <div class="listado"></div>
  </form>`;
  app();
  const todoInput = getByPlaceholderText('Escribe algo que hacer');
  const submitButton = getByText('Añadir tarea');
  const listadoTareas = document.querySelector('.listado')
  return {
    todoInput,
    submitButton,
    listadoTareas
  };
}

describe("Gestion de tareas", () => {
  test("Debe añadir una tarea a LocalStorage", () => {
    const { } = mockApp();
  });
  test("Al añadir una tarea debe pintarla en el listado", () => {
    const { } = mockApp();
  });
  test("Al añadir una tarea debe pintar un botón para borrarla", () => {
    const { } = mockApp();
  });
  test("Al hacer click en el botón de borrado de una tarea debe borrarla", () => {
    const { } = mockApp();
  });
});
