import { fireEvent, getByLabelText, getByPlaceholderText, getByText } from '@testing-library/dom';
import { window } from 'window-or-global';
import app from './app';

function mockApp() {
	document.body.innerHTML = `<form id="todo-form">
    <input placeholder="Escribe algo que hacer" name="newTODO" />
    <button type="submit">Añadir tarea</button>
    <div class="listado"></div>
  </form>`;
	app();
	const todoInput = getByPlaceholderText(document, 'Escribe algo que hacer');
	const submitButton = getByText(document, 'Añadir tarea');
	const listadoTareas = document.querySelector('.listado');
	return {
		todoInput,
		submitButton,
		listadoTareas
	};
}

describe('Gestion de tareas', () => {
	test('Debe llamar a localStorage.setItem', () => {
		const { todoInput, submitButton } = mockApp();
		fireEvent.change(todoInput, { event: { target: { value: 'Hacer cosas' } } });
		fireEvent.click(submitButton);
		expect(global.window.localStorage.setItem).toHaveBeenCalled();
	});
	test('Al añadir una tarea debe pintarla en el listado', () => {
		const { todoInput, submitButton, listadoTareas } = mockApp();
		fireEvent.change(todoInput, { event: { target: { value: 'Hacer cosas' } } });
		fireEvent.click(submitButton);
		const todo = getByLabelText(listadoTareas, 'Hacer cosas');
		expect(todo.innerHTML).toContain('Hacer cosas');
	});
	test('Al hacer click en una tarea poner el"checkbox" debe estar checked', () => {
		const { todoInput, submitButton, listadoTareas } = mockApp();
		fireEvent.change(todoInput, { event: { target: { value: 'Hacer cosas' } } });
		fireEvent.click(submitButton);
		const todo = getByLabelText(listadoTareas, 'Hacer cosas');
		fireEvent.click(todo);
		expect(todo.getAttribute('checked')).toBeTruthy();
	});
	test('Al hacer click en el botón de borrado de una tarea debe borrarla', () => {
		const { todoInput, submitButton, listadoTareas } = mockApp();
		fireEvent.change(todoInput, { event: { target: { value: 'Hacer cosas' } } });
		fireEvent.click(submitButton);
		const todo = getByLabelText(listadoTareas, 'Hacer cosas');
		const deleteButton = todo.nextElementSibling;
		fireEvent.click(deleteButton);
		expect(listadoTareas.innerHTML).not.toContain('Hacer cosas');
	});
});
